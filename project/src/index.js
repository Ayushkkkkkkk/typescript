var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this._courceCount = 1;
        this.city = "kathmandu";
        this.name = name;
        this.age = age;
    }
    return User;
}());
var ayush = new User("ayush123@gmail.com", 90);
var User1 = /** @class */ (function () {
    function User1(email, name, id) {
        this.email = email;
        this.name = name;
        this.id = id;
        this._courceCount = 1;
        this.city = "kathmandu";
    }
    User1.prototype.deleteToken = function () {
        console.log("token deleted");
    };
    Object.defineProperty(User1.prototype, "getAppleEmail", {
        get: function () {
            return "".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User1.prototype, "courseCountPrint", {
        get: function () {
            return this._courceCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User1.prototype, "courseCountSet", {
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course is less");
            }
            this._courceCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User1;
}());
var Subuser = /** @class */ (function (_super) {
    __extends(Subuser, _super);
    function Subuser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    Subuser.prototype.changeCourseCount = function () {
        this._courceCount = 4;
    };
    return Subuser;
}(User1));
