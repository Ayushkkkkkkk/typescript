"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //return num + 2;
    return 90;
}
function getUpper(value) {
    return value.toUpperCase();
}
function singUp(name, email, password, isPaid) { }
var loginUser = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(90);
singUp("ayush", "ayush124@gmail.com", "1232323231", false);
loginUser("ayush1240945@gmail.com", "ayush", true);
function getValue(myVal) {
    if (myVal > 5) {
        return 3.14;
    }
    else {
        return 2.71;
    }
}
var getHello = function (isValid) {
    return false;
};
var heros = ["batman", "ben10", "legolas", "eragon"];
heros.map(function (hero, index) {
    return "hero is ".concat(hero, " and power is ").concat(index);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function HandleError(errmsg) {
    throw new Error(errmsg);
}
