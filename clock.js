function masterTime() {
    let today = new Date();
    const dateDisplay = document.getElementById("date");
    const timeDisplay = document.getElementById("time")



    let dd = String(today.getDate()).padStart(2, '0');
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[today.getDay()];
    function end(dd) {
        let dayEnding;
        if (dd == "01" || dd == "21" || dd == "31") {
            dayEnding = "st"
        } else if (dd == "02" || dd == "22") {
            dayEnding = "nd"
        } else if (dd == "03" || dd == "23") {
            dayEnding = "rd"
        } else {
            dayEnding = "th"
        }
        return dayEnding;

    };

    let month = String(today.getMonth()).padStart(2, '0');
    let monthDict = {
        "00": "January",
        "01": "February",
        "02": "March",
        "03": "April",
        "04": "May",
        "05": "June",
        "06": "July",
        "07": "August",
        "08": "September",
        "09": "October",
        "10": "November",
        "11": "December"
    };

    let year = today.getFullYear();

    let now = day + ", " + monthDict[month] + ' ' + dd + end(dd) + ' ' + year;
    dateDisplay.textContent = now;


    let hour = today.getHours();
    function nonMilitary(x) {
        let hours;
        if (x <= 12) {
            hours = x
        } else if (x > 12) {
            hours = x - 12
        } return String(hours);
    };
    function dayNight(hour) {
        let amPM;
        if (hour < 12) {
            amPM = "AM"
        } else if (hour >= 12) {
            amPM = "PM"
        } return amPM;
    };


    let minute = String(today.getMinutes()).padStart(2, "0");

    let second = String(today.getSeconds()).padStart(2, "0")



    let time = nonMilitary(hour) + " : " + minute + " : " + second + ' ' + dayNight(hour);
    timeDisplay.textContent = time;
}

setInterval(masterTime, 1000)