var text=document.querySelector("#inputText");
var btn=document.querySelector("#btn");
var msgDisplay=document.querySelector("#msgDisplay");
btn.addEventListener("click",getMsg);
function getMsg(){
    if(text.value==""){
        alert("Please Enter the valid text");
    }
    else{
    msgDisplay.textContent=text.value;
    text.value="";
    }
}