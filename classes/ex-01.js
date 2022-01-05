var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.logDetails = function () {
        console.log("O " + this.name + " tem " + this.age + " anos");
    };
    return User;
}());
var Char = /** @class */ (function (_super) {
    __extends(Char, _super);
    function Char(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(Char.prototype, "getLevel", {
        get: function () {
            return this.level;
        },
        enumerable: true,
        configurable: true
    });
    return Char;
}(User));
var will = new User("Willian", 40);
console.log(will);
will.logDetails();
var john = new Char("John", 50, "johnmaster", 80);
console.log(john);
will.name = "Lucas";
console.log(john.getLevel);
