"use strict";
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
    };
    return Button;
}());
var AppleButton = /** @class */ (function () {
    function AppleButton() {
    }
    AppleButton.prototype.render = function () {
        console.log('苹果按钮');
    };
    return AppleButton;
}());
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.render = function () {
        console.log('windows按钮');
    };
    return WindowsButton;
}());
var Icon = /** @class */ (function () {
    function Icon() {
    }
    Icon.prototype.render = function () {
    };
    return Icon;
}());
var AppleIcon = /** @class */ (function () {
    function AppleIcon() {
    }
    AppleIcon.prototype.render = function () {
        console.log('苹果图标');
    };
    return AppleIcon;
}());
var WindowsIcon = /** @class */ (function () {
    function WindowsIcon() {
    }
    WindowsIcon.prototype.render = function () {
        console.log('Windows图标');
    };
    return WindowsIcon;
}());
var AppleFactory3 = /** @class */ (function () {
    function AppleFactory3() {
    }
    AppleFactory3.prototype.createButton = function () {
        return new AppleButton();
    };
    AppleFactory3.prototype.createIcon = function () {
        return new AppleIcon();
    };
    return AppleFactory3;
}());
var WindowsFactory3 = /** @class */ (function () {
    function WindowsFactory3() {
    }
    WindowsFactory3.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsFactory3.prototype.createIcon = function () {
        return new WindowsIcon();
    };
    return WindowsFactory3;
}());
var settings3 = {
    'apple': AppleFactory3,
    'windows': WindowsFactory3
};
var appleFactory3 = new settings3['apple']();
appleFactory3.createButton().render();
appleFactory3.createIcon().render();
var windowsFactory3 = new settings3['windows']();
windowsFactory3.createButton().render();
windowsFactory3.createIcon().render();
