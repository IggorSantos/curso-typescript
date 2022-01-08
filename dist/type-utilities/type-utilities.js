"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Partial: Transforma todas as propiedades do type em opcionais
function updateTodo(todo, fieldsUpdate) {
    return __assign(__assign({}, todo), fieldsUpdate);
}
//Readonly: Transforma as propiedades do type em readonly
var todo1 = {
    title: "Assistir Dark",
    description: "Relembrar pontos da serie",
    completed: true,
};
var todo2 = updateTodo(todo1, {
    completed: false,
});
var todo3 = {
    title: "Estudar Angular",
    completed: false,
};
//todo1.title = "Mudar"
console.log(todo1);
console.log(todo2);
console.log(todo3);
