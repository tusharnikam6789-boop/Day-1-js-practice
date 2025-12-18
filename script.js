/*
let name ="tushar";
const age =20;

function greet(user){
    return  "hello  " + user;

}
const add =(a,b) => a+b;

console.log(greet(name));
console.log(add(5,4));

document.getElementById("text").innerText ="Javascript is working !";
*/
// const message = document.getElementById("message");
// const button =document.getElementById("btn");

// button.addEventListener("click", () => {
//     message.innerText = "button clicked successfully";
// });

// function changecolor() {
//     document.body.style.backgroundColor ="lightgreen";
// }

const btn =
document.getElementById("btn");
const heading =
document.getElementById("heading");
const countText =
document.getElementById("count")

let count =0;
let isGreen = false;

btn.addEventListener("click", function (){

    count =count + 1;
    countText.innerText ="clicked: "+ count + "times";
    if (isGreen ===false){
        heading.style.color ="green";
        heading.innerText ="Button Clicked!";
        isGreen = true;
    }   else{
        heading.style.color ="red";
        heading.innerText ="Click Again!";
        isGreen = false;
    }

})

