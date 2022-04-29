var iPhone6 = /** @class */ (function () {
    function iPhone6() {
    }
    iPhone6.prototype.useLightning = function () {
        console.log('use type C');
    };
    return iPhone6;
}());
var googlePixel = /** @class */ (function () {
    function googlePixel() {
    }
    googlePixel.prototype.useMicroUSB = function () {
        console.log('use micro USB');
    };
    return googlePixel;
}());
//implement Adapter
var ConvertLightningToUSB = /** @class */ (function () {
    function ConvertLightningToUSB(iphone) {
        this.iphoneDevice = iphone;
    }
    ConvertLightningToUSB.prototype.useMicroUSB = function () {
        console.log('Converting...');
        this.iphoneDevice.useLightning();
    };
    return ConvertLightningToUSB;
}());
//create instance
var iphoneInstance = new iPhone6();
var emergencyAdapter = new ConvertLightningToUSB(iphoneInstance);
emergencyAdapter.useMicroUSB();
