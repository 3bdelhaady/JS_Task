let seconds = 0;
let interval;

document.getElementById("start").addEventListener("click", function() {
    if (!interval) {
        interval = setInterval(function() {
            seconds++;
            document.getElementById("time").textContent = seconds;
        }, 1000);
    }
});

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(interval);
    interval = null;
});
