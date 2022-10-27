var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.coord1 = 23;
        this.coord2 = 25;
    }
    SmartPhone.prototype.getCoordinates = function () {
        console.log(this.coord1);
        console.log(this.coord2);
    };
    SmartPhone.prototype.start = function () {
        console.log("media player started");
    };
    SmartPhone.prototype.stop = function () {
        console.log("Media player stop");
    };
    SmartPhone.prototype.pause = function () {
        console.log("Media player is paused");
    };
    return SmartPhone;
}());
var sm = new SmartPhone();
sm.getCoordinates();
sm.start();
sm.pause();
sm.stop();
