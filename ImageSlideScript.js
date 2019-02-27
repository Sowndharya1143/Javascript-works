var nextBtn = document.querySelector(".nextBtn");
var prevBtn = document.querySelector(".prevBtn");
var images = document.querySelector(".images");

var count=0;
nextBtn.addEventListener("click",nextBtnfun);
prevBtn.addEventListener("click",prevBtnfun);

function nextBtnfun(){
    if(count===5){
        count=0;
    }
    count++;
    let urls = `url("bg-${count}.jpg")`;
    images.style.backgroundImage=urls;
}
function prevBtnfun(){
    if(count===0){
        count=5;
    }
    count--;
    let urls = `url("bg-${count}.jpg")`;
    images.style.backgroundImage=urls;
}