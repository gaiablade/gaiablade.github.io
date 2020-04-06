function startTimer() {
    setInterval(() => {
        const minutes = new Date().getMinutes() % 10;
        const seconds = new Date().getSeconds();
        document.getElementById("time").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        document.getElementById("body").style.backgroundColor = (minutes == 4 || minutes == 9) ? "#00FF00" : "#FF0000";
    }, 500);
}