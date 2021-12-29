"use strict";
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var will = new User("Willian", 30);
console.log(will);
