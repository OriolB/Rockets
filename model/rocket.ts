class Rocket {
    code: string;
    speed: number;
    thrusters: Thruster[] = new Array();

    constructor(code: string, speed: number) {
        this.code = code;
        this.speed = speed;
    }

    addThruster(thruster: Thruster): void {
        this.thrusters.push(thruster);
    }

    getTotalPower(): number {
        var total = 0;
        if (this.thrusters != null && this.thrusters.length > 0) {
            this.thrusters.forEach(x => total += x.power);
        }
        return total;
    }

    accel() {
        if(this.speed<this.getTotalPower()){
            this.speed = this.speed + 10;
        }else{
            this.speed = this.speed;
        }
    }

    stop() {
        if (this.speed == 0) {
            this.speed = 0;
        } else {
            this.speed = this.speed - 10;
        }
    }
}