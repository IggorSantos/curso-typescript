var input1 = document.getElementById("valor-1");
var input2 = document.getElementById('valor-2');
var button = document.getElementById('button');
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
