//  Chapter 5
// Math  expressions:
// Familiar operators (e.g. + and -):
// Addition
let firstnumber = 10;
let secondnumber = 12;
let thirdnumber = (firstnumber + secondnumber);
console.log(thirdnumber);

// Subtraction
let fourthnumber = 16;
let fifthnumber = 14;
let sixthnumber = (fourthnumber - fifthnumber);
console.log(sixthnumber);

// Chapter 6
// Math expressions:
// Unfamiliar operators (e.g. ++,--)
// addition
let number1 = 25;
let number2 = number1++;

console.log(number1); // Outputs: 26

// subtraction
let number3 = 32;
let number4 = number3--;
console.log(number3); // Outputs: 31

// Chapter 7
// Math expressions:
// Eliminating ambiguity
// Multiplication
let cost1 = 1;
let cost2 = 4;
let cost3 = ((cost1 + cost2)*5)
console.log(cost3); // Outputs:25

// Division
let cost4 = 24;
let cost5 = 6;
let cost6 = ((cost4 + cost5)/5)
console.log(cost6); // Outputs: 5

// Chapter 8
// Concatenating text strings
let message1 = "Hello Muhammad";
let message2 = " Thanks for joining";
let message3 = (message1 + message2);
alert (message3);

// Chapter 9
// Prompts
// Addition
let t =  prompt("Enter your 1st number: ");
let tcon = Number(t);
let u = prompt("Enter your 2nd number: ");
let ucon = Number(u);
console .log (ucon + tcon);

// Subtraction
let  w = prompt("Enter your 3rd number: ");
let wcon = Number(w);
let q = prompt("Enter your 4th number: ");
let qcon = Number(q);
console .log (wcon - qcon);

// Multiplication
let v = prompt("Enter your 5th number: ");
let vcon = Number(v);
let g = prompt("Enter your 6th number: ");
let gcon = Number(g);
console.log (vcon * gcon);

// Division
 let x = prompt("Enter your 7th number: ");
 let xcon = Number(x);
 let y = prompt("Enter your 8th number: ");
 let ycon = Number(y);
 console.log (xcon / ycon);