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
var WindowButton = /** @class */ (function () {
    function WindowButton() {
    }
    WindowButton.prototype.render = function () {
        console.log('window按钮');
    };
    return WindowButton;
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
var WindowIcon = /** @class */ (function () {
    function WindowIcon() {
    }
    WindowIcon.prototype.render = function () {
        console.log('Window图标');
    };
    return WindowIcon;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.createButton = function () {
    };
    Factory.prototype.createIcon = function () {
    };
    return Factory;
}());
var AppleFactory = /** @class */ (function () {
    function AppleFactory() {
    }
    AppleFactory.prototype.createButton = function () {
        return new AppleButton();
    };
    AppleFactory.prototype.createIcon = function () {
        return new AppleIcon();
    };
    return AppleFactory;
}());
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowButton();
    };
    WindowsFactory.prototype.createIcon = function () {
        return new WindowIcon();
    };
    return WindowsFactory;
}());
var settings = {
    'apple': AppleFactory,
    'windows': WindowsFactory
} /
    let, appleFactory = new settings['apple']();
appleFactory.createButton().render();
appleFactory.createIcon().render();
var windowsFactory = new settings['windows']();
windowsFactory.createButton().render();
windowsFactory.createIcon().render();
