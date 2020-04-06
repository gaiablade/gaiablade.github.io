function startTimer() {
    setInterval(() => {
        const minutes = new Date().getMinutes() % 10;
        const seconds = new Date().getSeconds();
        if (seconds < 10) {
            document.getElementById("time").innerHTML = minutes + ":0" + seconds;
        }
        else {
            document.getElementById("time").innerHTML = minutes + ":" + seconds;
        }
        if (minutes == 4 || minutes == 9) {
            document.getElementById("body").style.backgroundColor = "#00FF00";
        }
        else {
            document.getElementById("body").style.backgroundColor = "#FF0000";
        }
    }, 500);
}