"use strict";
var rockets = [];
var rock1f3 = document.getElementById('rocket1f3');
var rock2f3 = document.getElementById('rocket2f3');
var rock1f1 = document.getElementById('rocket1f1');
var rock2f1 = document.getElementById('rocket2f1');
function create_rocket(coder) {
    var rocktext = document.getElementById('textrocket');
    var c1 = document.getElementById("rocket1");
    var c2 = document.getElementById("rocket2");
    var r = new Rocket(coder, 0);
    var listthr = new Array();
    if (coder == '32WESSDS') {
        listthr = new Array(10, 30, 80);
        rocktext.innerHTML = "Rocket 1 created!";
        c1.style.display = "inline-block";
    }
    else if (coder == 'LDSFJA32') {
        listthr = new Array(30, 40, 50, 50, 30, 10);
        rocktext.innerHTML = "Rocket 2 created!";
        c2.style.display = "inline-block";
    }
    listthr.forEach(function (thr) {
        r.addThruster(new Thruster(thr));
    });
    rockets.push(r);
}
function find_rocket(coder) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code == coder)
            return i;
    }
    return -1;
}
function accelerar(coder) {
    var e = find_rocket(coder);
    if (coder == '32WESSDS') {
        if (e == -1) {
            rock1f3.innerHTML = "First you have to create rocket 1.";
        }
        else {
            rockets[e].accel();
            rock1f3.innerHTML = "Velocitat R1: " + rockets[e].speed;
        }
    }
    else if (coder == 'LDSFJA32') {
        if (e == -1) {
            rock2f3.innerHTML = "First you have to create rocket 2.";
        }
        else {
            rockets[e].accel();
            rock2f3.innerHTML = "Velocitat R2: " + rockets[e].speed;
        }
    }
}
function stopr(coder) {
    var e = find_rocket(coder);
    if (coder == '32WESSDS') {
        if (e == -1) {
            rock1f3.innerHTML = "First you have to create rocket 1.";
        }
        else {
            rockets[e].stop();
            rock1f3.innerHTML = "Velocitat R1: " + rockets[e].speed;
        }
    }
    else if (coder == 'LDSFJA32') {
        if (e == -1) {
            rock2f3.innerHTML = "First you have to create rocket 2.";
        }
        else {
            rockets[e].stop();
            rock2f3.innerHTML = "Velocitat R2: " + rockets[e].speed;
        }
    }
}
function print(coder) {
    var e = find_rocket(coder);
    if (coder == '32WESSDS') {
        if (e == -1) {
            rock1f1.innerHTML = "First you have to create rocket 1.";
        }
        else {
            rock1f1.innerHTML = "Rocket " + rockets[e].code + " boosters max power: ";
            for (var i = 0; i < rockets[e].thrusters.length; i++) {
                if (rockets[e].thrusters.length - 1 == i) {
                    rock1f1.innerHTML += rockets[e].thrusters[i].power;
                }
                else {
                    rock1f1.innerHTML += rockets[e].thrusters[i].power + ",";
                }
            }
        }
    }
    else if (coder == 'LDSFJA32') {
        if (e == -1) {
            rock2f1.innerHTML = "First you have to create rocket 2.";
        }
        else {
            rock2f1.innerHTML = "Rocket " + rockets[e].code + " boosters max power: ";
            for (var i = 0; i < rockets[e].thrusters.length; i++) {
                if (rockets[e].thrusters.length - 1 == i) {
                    rock2f1.innerHTML += rockets[e].thrusters[i].power;
                }
                else {
                    rock2f1.innerHTML += rockets[e].thrusters[i].power + ",";
                }
            }
        }
    }
    else if (coder == 'all') {
        print('32WESSDS');
        print('LDSFJA32');
    }
}
