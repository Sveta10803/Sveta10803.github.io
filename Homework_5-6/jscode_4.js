var count=0, timerId;

var for_text = document.getElementById("for_text");
var for_count = document.getElementById("for_count");
var start  = document.getElementById("start");
var pause = document.getElementById("pause");
start.addEventListener("click", start_click);
pause.addEventListener("click", pause_click);
document.getElementById("clear").addEventListener("click", clear_click);

function timer () {
    count+=50;
    for_count.innerHTML = "BLA BLA BLA";
    var msek = String(count%1000);
    var sek = String(Math.floor(count/1000)%60);
    var min = String(Math.floor(count/60000)%60);
    var hours = String(Math.floor(count/3600000)%24);
    for_count.innerHTML=hours + ":" + min + ":" + sek + ":" + msek;
}

function start_click(event){
    event.preventDefault();
    for_text.innerHTML="Start";
    timerId = setInterval(timer, 50);
    start.setAttribute("hidden", true);
    pause.removeAttribute("hidden");
}
function pause_click(event) {
    event.preventDefault();
    clearInterval(timerId);
    for_text.innerHTML="Pause";
    pause.setAttribute("hidden", true);
    start.removeAttribute("hidden");
}

function clear_click(event){
    event.preventDefault();
    clearInterval(timerId);
    count = 0;
    for_text.innerHTML="Clear";
    for_count.innerHTML="";
}

pause.setAttribute("hidden", true);
