/* number1*/
let java = document.getElementById("elzero");
console.log(java);
let element = document.getElementsByClassName("element");
console.log(element);
let name = document.getElementsByName("Js")
console.log(name);
 let div = document.getElementsByTagName("div");
console.log(div);
let query = document.querySelector(".element");
console.log(query);
let all = document.querySelectorAll(".element");
console.log(all);



let imges = document.querySelectorAll("img");
imges.forEach((img)=>{
    img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png”";
    img.alt = " Elzero Logo";
    
});




let input = document.querySelector("[name='dollar']");
let result = document.querySelector("result");
input.oninput = function(){
    let usd = input.value;
    let egy = (usd*15.6).toFixed(2);
    result.textContent = `{${usd}}
    usd = {${egy}}egyption`;
};



let element1 = document.querySelector(".one");
let element2 = document.querySelector(".two");
let text1 = element1.innerHTML;
element1.innerHTML = element2.innerHTML;
element2.innerHTML = `${text1}`;
let tit1 = element1.getAttribute("title");
let tit2 = element2.getAttribute("title");
tit1.setAttribute = element2.getAttribute("title");
tit2.setAttribute = element1.getAttribute("title");







/* number2*/
let number = prompt("Print Number From _ To , Example: 5-20");
if(number !== null){
let arr = number.split("_");
let num1 = +arr[0];
let num2 = +arr[1];
if(num1 < num2){
    for(let i=num1; i<=num2; i++){
        console.log(i);
    }
}
else if(num1>num2){
    for(let i=num2; i<=num1; i++){
         console.log(i);
    }
}}







function createPopup(){
    let popUp = document.createElement("div");
    popUp.style.backgroundColor = "#f0eeee";
    popUp.style.padding = "20px";
    popUp.style.border = "solid 1px gray";
    popUp.style.textAlign = "center";
    popUp.style.position = "fixed";
    popUp.style.width = "200px";
    popUp.style.height = "100px";
    popUp.style.top = "50%";
    popUp.style.left = "50%";
    popUp.style.transform = "translate(-50%, -50%)";


    let wel = document.createElement("h2");
    wel.textContent = "Welcome";
    wel.style.marginBottom = "15px";

    let par = document.createElement("p");
    par.textContent = "Welcome To Elzero Web School";

    let close = document.createElement("button");
    close.textContent = "X";
    close.style.backgroundColor = "red";
    close.style.color = "white";
    close.style.position = "absolute";
    close.style.right = "-10px";
    close.style.top = "-10px";
    close.style.borderRadius = "30px";
    close.style.border = "red"

    close.onclick = function(){
        popUp.remove();
    };


    popUp.appendChild(close);
    popUp.appendChild(wel);
    popUp.appendChild(par);
    document.body.appendChild(popUp);
}
setTimeout(createPopup, 5000);



let count = document.getElementById("div");
let counter = setInterval(function(){
    count.innerHTML = count.innerHTML -1;
    if(count.innerHTML==0){
        clearInterval(counter);
    }
}, 1000);



let count1 = document.getElementById("div");
let counter1 = setInterval(function(){
    count.innerHTML = count.innerHTML -1;
    if(count.innerHTML==0){
        clearInterval(counter);
        location.href = "https://elzero.org/";
    }
}, 1000);















