const input1 = document.getElementById("valor-1") as HTMLInputElement;
const input2 = document.getElementById('valor-2') as HTMLInputElement;
const button = document.getElementById('button');

function sum(a: number,b: number){
    return a + b
}

button.addEventListener("click", function(){
    console.log(sum(Number(input1.value),Number(input2.value)))
})
