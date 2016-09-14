start.addEventListener("click",start_click);
pause.addEventListener("click",pause_click);
clear.addEventListener("click",clear_click);

var count=0, timerId;


function start_click(){
  for_text.innerHTML="start_click";
  timerId = setInterval(function() {
    count++;
    var msek=count%1000;
    var sek= Math.floor(count/1000)%60;
    var min= Math.floor(count/60000)%60;
    var hours= Math.floor(count/3600000)%24;
    var str= hours+":"+min+":"+sek+":"+msek;
    for_count.innerHTML=str;
  }, 1);
}
function pause_click(){
  for_text.innerHTML="pause_click";
}
function clear_click(){
  clearInterval(timerId);
  for_text.innerHTML="clear_click";
}

function () {
    var b = document.getElementById("button");
        b.setAttribute("aria-pressed", "false");
        b.onclick = function() {
    if ( this.innerHTML == "Start" )
         this.innerHTML = "Pause",
         this.setAttribute("aria-pressed", "true");
    else this.innerHTML = "Start",
         this.setAttribute("aria-pressed", "false");
    }
    return false;
}
