// Set the target countdown date (2028-06-01 00:00:00)
var countDownDate = new Date(2028, 5, 1, 0, 0, 0);

// Update the countdown every second
var x = setInterval(function() {
    // Get the current date and time
    var dateTimeNow = new Date().getTime();

    // Calculate the distance between now and the countdown date
    var distance = countDownDate - dateTimeNow;

    // If the countdown is still ongoing
    if (distance > 0) {
        // Calculate days, hours, minutes, and seconds remaining
        var dayTime = 1000 * 60 * 60 * 24;
        var hourTime = 1000 * 60 * 60;
        var minutesTime = 1000 * 60;

        var days = Math.floor(distance / dayTime);
        var hours = Math.floor((distance % dayTime) / hourTime);
        var minutes = Math.floor((distance % hourTime) / minutesTime);
        var seconds = Math.floor((distance % minutesTime) / 1000);

        // Display the countdown in the respective elements
        document.getElementById("day").innerText = (days < 10) ? '0' + days : days;
        document.getElementById("hours").innerText = (hours < 10) ? '0' + hours : hours;
        document.getElementById("minutes").innerText = (minutes < 10) ? '0' + minutes : minutes;
        document.getElementById("seconds").innerText = (seconds < 10) ? '0' + seconds : seconds;
    } else {
        // If the countdown is finished, clear the interval and display "done"
        clearInterval(x);
        var done = document.getElementById("main-div");
        done.innerHTML = " done ";
        done.style.fontSize = "2rem";
    }
}, 1000); // Repeat every 1000ms (1 second)
