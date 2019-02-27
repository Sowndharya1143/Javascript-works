var colorbtn=document.querySelector(".btn");
var bgcolor=document.querySelector("body");
var arr=["red","orange","violet","brown","blue","yellow","green","yellowgreen","tomato"];


function function2(){
// bgcolor.style.backgroundColor="red";
var random= Math.floor(Math.random()*arr.length);
bgcolor.style.backgroundColor=arr[random];
console.log(arr[random]);
document.getElementById("hexValue").textContent=arr[random];
}