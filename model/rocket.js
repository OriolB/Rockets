"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, speed) {
        this.thrusters = new Array();
        this.code = code;
        this.speed = speed;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.getTotalPower = function () {
        var total = 0;
        if (this.thrusters != null && this.thrusters.length > 0) {
            this.thrusters.forEach(function (x) { return total += x.power; });
        }
        return total;
    };
    Rocket.prototype.accel = function () {
        if (this.speed < this.getTotalPower()) {
            this.speed = this.speed + 10;
        }
        else {
            this.speed = this.speed;
        }
    };
    Rocket.prototype.stop = function () {
        if (this.speed == 0) {
            this.speed = 0;
        }
        else {
            this.speed = this.speed - 10;
        }
    };
    return Rocket;
}());
