"use strict";
//boolean
var isOpen;
isOpen = true;
//string
var message;
message = "Uma mensagem";
//number
var num;
num = 2;
//array
var nums;
nums = [2, 3, 4, 5];
//type inference
var newMessage = "Uma nova mensagem";
//Union
function logDetails(id, item) {
    console.log("O " + item + " tem como id " + id);
}
function logInfo(uid, name) {
    console.log("O " + name + " tem como id " + uid);
}
logInfo(123, "Luis");
var player = {
    id: 123,
    email: "iggor@gmail.com",
    name: "Iggor",
    level: 15
};
