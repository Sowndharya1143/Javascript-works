var btns=document.querySelectorAll(".btn");
var screen = document.querySelector(".screen");
var equalBtn = document.querySelector(".green-btn");
var clearBtn = document.querySelector(".red-btn");
for(let i = 0 ; i < btns.length ; i++){
    btns[i].addEventListener("click",function(){
        let number = btns[i].getAttribute('data-num');
        screen.value +=number;
    })
}
equalBtn.addEventListener("click",function(){
    try{   
        if(screen.value == ""){
            alert("Input is empty");
        }
        else{
            screen.value=eval(screen.value);
        }
    }
    catch{
        alert("Input is invalid");
    }
})
clearBtn.addEventListener("click",function(){
    screen.value="";
})