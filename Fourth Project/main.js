// 4th Project
alert("welcome")

let username = prompt("Enter your name");
let AMPM = prompt("Enter AM or PM:");
let time = prompt("Enter time (HH:MM):");

function convertToMinutes(timeStr) {
    let [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
}

let timeInMinutes = convertToMinutes(time);

if (AMPM === "AM" && timeInMinutes >= convertToMinutes("06:00") && timeInMinutes <= convertToMinutes("11:59")) {
    document.write("Good Morning!" +username);
} else if (AMPM === "PM" && timeInMinutes >= convertToMinutes("12:00") && timeInMinutes <= convertToMinutes("18:59")) {
    document.write("Good Afternoon!" + username);
} else if (AMPM === "PM" && timeInMinutes >= convertToMinutes("19:00") && timeInMinutes <= convertToMinutes("23:59")) {
    document.write("Good Evening!" + username);
} else if (AMPM === "AM" && (timeInMinutes >= convertToMinutes("00:00") && timeInMinutes <= convertToMinutes("05:59"))) {
    document.write("Good Night!" +username  );
} else {
    document.write("Invalid Answer");
}
