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
function logDetails(id, item) {
    console.log("O " + item + " tem como id " + id);
}
logDetails(123, "sapato");
