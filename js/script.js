var clock = document.getElementById('clock');

function magicClock() {
    var time = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    console.log (time)
    
    var clockString = time;

    clock.textContent = clockString;

}
magicClock();
setInterval(magicClock, 1000);