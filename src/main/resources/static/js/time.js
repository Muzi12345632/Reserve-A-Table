// Create a timer function that updates the timer element every second.
function timer() {
    var date = new Date();
    var time =  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("timer").innerHTML = time;
}

// Start the timer.
setInterval(timer, 1000);

//function for button
