// Chap 9 to 11

// project 1
var city = prompt("please entre your city name :");

// Check if the entered city is "Karachi"
if (city.toLowerCase () === "karachi" ) {
    alert("Welcome to the city of lights!")
} else {
    alert("welcome to " + city + " !");
}

// Project 2
var gender = prompt("Please enter your gender");

// if the gender is male
if (gender === "Male") {
    alert("Good Morning sir !")
// if the gender is female
} else if (gender === "Female") {
    alert("Good Morning Madam!");
}

// Project 3

// Signal Color

var color = prompt("please enter color :");
// RED
if (color === "Red") {
    alert("Stop driving!");
// YELLOW
} else if (color === "Yellow") {
    alert("Ready to move!");
// Green
} else if (color === "Green") {
    alert("Drive now"):
}

// Project 4
// FUEL


var Fuel = prompt("Please check your Fuel Tank !")

// Fuel < 0.25 liter
if (Fuel <= 0.25) {
    alert("Refill your fuel tank!");
// Fuel >= 0.25 liter
} else if (Fuel >= 0.25) {
    alert("You have enough fuel to go!");
}


// Project 6
// marksheet

var username = prompt("Enter your name !");
var percentage = prompt("Enter your percentage!");
var obtainedmarks = prompt ("Enter your obtained marks");

if (percentage >= 90) {
    alert(username + " \nTotalMarks:300 \n" + "Grade: A-one" + "\nExcellent")
} else if (percentage >= 80) {
    alert(username + "\nTotalMarks:300 \n" + "Grade: A" + "\nVery Good");
} else if (percentage >= 70) {
    alert(username + "\nTotalMarks:300 \n" + "Grade: B+" + "\nGood");
} else if (percentage >= 60) {
    alert(username + "\nTotalMarks:300 \n" + "Grade: B" + "\nSatisfactory");
} else if (percentage >= 50) {
    alert(username + "\nTotalMarks:300 \n" + "Grade: C" + "\nNeeds Improvement");
} else if (percentage >= 40) {
    alert(username + "\nTotalMarks:300 \n" + "Grade: D" + "\nBelow Average");
} else if(percentage <= 40) {
    alert(username + "\nTotalMarks:300 \n" + "Grade: F" );
} else{
    alert("invalid user");
}

