let today = new Date();

let dd = String(today.getDate()).padStart(2, '0');
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[today.getDay()];
function end(dd) {
    let dayEnding;
    if (dd == "01") {
        dayEnding = "st"
    } else if (dd == "02") {
        dayEnding = "nd"
    } else if (dd == "03") {
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
console.log(now)