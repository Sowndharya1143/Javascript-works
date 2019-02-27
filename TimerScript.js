function Timer(){
    var time=new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let formatTime = formatter(hours);
    hours = Checkhours(hours);
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById("clock").innerHTML=`${hours}: ${minutes}:${seconds} ${formatTime}`;
}
function formatter(hours){
    let format ="AM";
    if(hours >= 12){
        format="PM";
    }
    return format;
}
function Checkhours(hours){
    if(hours>12){
        hours = hours - 12;
    }
    if(hours === 0){
        hours =  12;
    }
    return hours;
}
function addZero(time){
    if(time<10){
        time="0"+time;
    }
    return time;
}
Timer();
setInterval(Timer,1000);