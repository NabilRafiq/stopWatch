var sec = 0, min = 0, msec = 0,interval ,interval1=false;
var timer1 = document.getElementById('timer');
var lapcontainer = document.getElementById('laps');
function timer() {
    msec++;
    timer1.textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);
    if (msec == 100) {
        msec = 0;
        sec += 1;
        timer1.textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);
    }
    if (sec == 60) {
        sec = 0;
        min += 1;
        timer1.textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);
    }

}
function start() {
    if (interval1==false) {
     interval = setInterval(timer, 10);
        interval1=true;   
    }
}
function pause() {
    if (interval1==true){
    clearInterval(interval);
    interval1 = false;}
}
function reset() {
    msec = 0;
    sec = 0;
    min = 0;
    timer1.textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);
    pause();
    resetlap();
}
function laap1() {
    if (interval1==true) {
        // var node = document.createElement("LI");
        // var x=(min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);
        // var textnode = document.createTextNode(x);
        // node.appendChild(textnode);
        // document.getElementById("laps").appendChild(node);
        var li=document.createElement("LI");
        li.innerText=(min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (msec < 10 ? "0" + msec : msec);
        lapcontainer.appendChild(li);
    }
}
function resetlap() {
   lapcontainer.innerHTML='';
}