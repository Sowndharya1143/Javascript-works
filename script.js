
var myIndex = 0;

window.onload= carousel=() =>{
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);    
}
menudrop=()=>{
    document.getElementById("drop").style.display='block';
}
closeDrop = () =>{
    document.getElementById("drop").style.display ='none';
}
menudropmobile = () =>{
    if(document.getElementById("menudrop").style.display =='block'){
        document.getElementById("menudrop").style.display=='none';
    }
    document.getElementById("menudrop").style.display='block';
}
// function myFunction() {
//     var x = document.getElementById("navDemo");
//     if (x.className.indexOf("show") == -1) {
//         x.className += " show";
//     } else { 
//         x.className = x.className.replace(" show", "");
//     }
// }
