
var r1: Rocket = new Rocket("", 0);
var r2: Rocket = new Rocket("", 0);
let cr1: boolean = false;
let cr2: boolean = false;

function creater1() {
    r1 = new Rocket("32WESSDS", 0);

    r1.addThruster(new Thruster(10));
    r1.addThruster(new Thruster(30));
    r1.addThruster(new Thruster(80));

    let rocktext = document.getElementById('textrocket') as HTMLInputElement;
    rocktext.innerHTML = "Rocket 1 created!";
    cr1 = true;
}

function creater2() {
    r2 = new Rocket("LDSFJA32", 0);

    r2.addThruster(new Thruster(30));
    r2.addThruster(new Thruster(40));
    r2.addThruster(new Thruster(50));
    r2.addThruster(new Thruster(50));
    r2.addThruster(new Thruster(30));
    r2.addThruster(new Thruster(10));

    let rocktext = document.getElementById('textrocket') as HTMLInputElement;
    rocktext.innerHTML = "Rocket 2 created!";
    cr2 = true;
}

let rock1f3 = document.getElementById('rocket1f3') as HTMLInputElement;
let rock2f3 = document.getElementById('rocket2f3') as HTMLInputElement;
let rock1f1 = document.getElementById('rocket1f1') as HTMLInputElement;
let rock2f1 = document.getElementById('rocket2f1') as HTMLInputElement;


function accelerarr1() {
    if (cr1 == false) {
        rock1f3.innerHTML = "First you have to create rocket 1.";
    } else {
        r1.accel();
        rock1f3.innerHTML = "Velocitat R1: " + r1.speed;
    }
}

function accelerarr2() {
    if (cr2 == false) {
        rock2f3.innerHTML = "First you have to create rocket 2.";
    } else {
        r2.accel();
        rock2f3.innerHTML = "Velocitat R2: " + r2.speed;
    }
}

function stopr1() {
    if (cr1 == false) {
        rock1f3.innerHTML = "First you have to create rocket 1.";
    } else {
        r1.stop();
        rock1f3.innerHTML = "Velocitat R1: " + r1.speed;
    }
}

function stopr2() {
    if (cr2 == false) {
        rock2f3.innerHTML = "First you have to create rocket 2.";
    } else {
        r2.stop();
        rock2f3.innerHTML = "Velocitat R2: " + r2.speed;
    }
}

function printr1() {
    if (cr1 == false) {
        rock1f1.innerHTML = "First you have to create rocket 1.";
    } else {
        rock1f1.innerHTML = "Rocket " + r1.code + " boosters max power: " + r1.thrusters[0].power + "," + r1.thrusters[1].power + "," + r1.thrusters[2].power;
    }
}

function printr2() {
    if (cr2 == false) {
        rock2f1.innerHTML = "First you have to create rocket 2.";
    } else {
        rock2f1.innerHTML = "Rocket " + r2.code + " boosters max power: " + r2.thrusters[0].power + "," + r2.thrusters[1].power + "," + r2.thrusters[2].power
            + "," + r2.thrusters[3].power + "," + r2.thrusters[4].power + "," + r2.thrusters[5].power;
    }
}

function printall() {
    if (cr1 == false || cr2 == false) {
        rock1f1.innerHTML = "First you have to create both rockets.";
    } else {
        rock1f1.innerHTML = "Rocket " + r1.code + " boosters max power: " + r1.thrusters[0].power + "," + r1.thrusters[1].power + "," + r1.thrusters[2].power;
        rock2f1.innerHTML = "Rocket " + r2.code + " boosters max power: " + r2.thrusters[0].power + "," + r2.thrusters[1].power + "," + r2.thrusters[2].power
            + "," + r2.thrusters[3].power + "," + r2.thrusters[4].power + "," + r2.thrusters[5].power;
    }
}





