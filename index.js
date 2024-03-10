/*
//p18.ex5
var numOne = +prompt("please enter number one");
var numTwo = +prompt("please enter number two");
if(numOne == numTwo){
console.log("number one: " + numOne + " = number two: " + numTwo)
} else if (numOne > numTwo){
console.log("number two: "+ numTwo + " is smaller, than number one: " + numOne);
} else{
console.log("number one: "+ numOne + " is smaller, than number two: " + numTwo);
}
*/



/*
//p20.ex4
var number = +prompt("please enter number from 1 to 9999");
//error msg
if(number > 9999 || number < 1 ){
console.log("please enter number from 1 to 9999")
//optional "else" for blocking algorithm
}
var count = 0;
while (number > 0) {
count = count+1;
//1000/100/10/1
number = parseInt(number / 10);
}
console.log("amount of digits in this number is: " + count);
*/

/*
//p27.ex2
var numOne = +prompt("please enter whole number one:");
var numTwo = +prompt("please enter whole number two:");
//variable for storing max/min values
var minNum = 0;
var maxNum = 0;

if((numOne%1 || numTwo%1)!==0 ){
//whole number check
console.log("please enter whole number.");
}

if (numOne > numTwo) {
minNum = numTwo;
maxNum = numOne;
//msg for myself checking calculation
console.log(numOne + " (one) is bigger, than " + numTwo + " (two)")
} else {
minNum = numOne;
maxNum = numTwo;
//msg for myself checking calculation
console.log(numTwo + " (two) is bigger, than " + numOne + " (one)")
}
var counter = minNum;
//fin calculation
while (counter <= maxNum) {
  console.log(counter++);
}
*/

/*
//p27.ex3
var number = +prompt("please enter whole positive number");
//conditioon check
if(number < 0 || number % 1 !== 0){
console.log("please enter whole positive number")
}
//2 messages for myself. doesn't mandatory here.
if(number % 2 == 0){
    console.log(number + " is even")
} else{
    console.log(number + " is odd")
}

var counter = 0;
// "-1" will always print last even / skip last odd
while(counter < number - 1){
    //for "0" to be printed in the console - change the positions of 2 lines below, change "-1" to "+1" in the line above, and jump 3 times from the cliff.
    counter = counter+2;
    console.log(counter);
}
*/

/*
//p27.ex5
let number = +prompt("please enter positive number: ");
if (number < 0) {
//error check
console.log("please enter positive number");
}
//storing sum
var sumNumbers = number;
//msg for myself - checking calculation
console.log("sumNumbers = " + sumNumbers)
//entering loop
while (number !== -99) {
//second input
number = +prompt("enter next positive number:");
//msg for myself - checking calculation
console.log("number = " + number)
//second check to not include negative value in calculation. somebody please kill me now.
if (number !== -99){
sumNumbers = sumNumbers+number;
//msg for myself - last check before the end of the loop. all good, pal?
console.log("sumNumbers = " + sumNumbers);
}
}
//final result
console.log("the sum of entered numbers is = " + sumNumbers);
*/