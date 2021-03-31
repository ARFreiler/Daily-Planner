console.log("JS Connected");

// Display Current Day and Date in Jumbotron
let currentDay = moment();

console.log(currentDay.format('dddd MMMM Do YYYY'));
document.getElementById("currentDay").innerHTML = currentDay.format('dddd MMMM Do YYYY');

// Array of Planner Hours 
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Set Current Hour for User Interface
let currentHour = parseInt(moment().format('HH'));
console.log(currentHour);

// Variables for Interfacing with Planner
// let input9AM = $("col-10");
let input9AM = $("9AM");
let input10AM = $("10AM");
let input11AM = $("11AM");
let input12PM = $("12PM");
let input1PM = $("1PM");
let input2PM = $("2PM");
let input3PM = $("3PM");
let input4PM = $("4PM");
let input5PM = $("5PM");

// Variable for Setting User Input
// let input = document.getElementsByTagName("input");
let span = document.getElementsByTagName("span");
let input = document.getElementById("9AM");
let text = document.getElementsByClassName("col-10");

// Event Listener for Save Buttons
// $(".saveBtn").click(function() {
//     console.log("Functioning");
//     localStorage.setItem
// });

// $(".saveBtn").click(function() {
//     let userInput = input.value;
//     localStorage.setItem('userInput', userInput);
//     console.log(userInput);
// });

// $(".saveBtn").click(function() {
//     let userInput = document.getElementsByTagName("input").value;
//     localStorage.setItem('userInput', userInput);
//     console.log(userInput);
// });

// function saveInput() {
//     let userInput = document.getElementsByClassName("col-10").value;
//     localStorage.setItem('userInput', userInput);
//     console.log(userInput);
// };

let button = document.getElementById("button");

/* Working-ish */
// button.addEventListener("click", function() {
//     let input = document.getElementById("9AM").value;
//     localStorage.setItem("input", input);
// });

$("button").on("click", function() {
    localStorage.setItem("9AM", (input9AM.val()))
    localStorage.setItem("10AM", (input10AM.val()))
    localStorage.setItem("11AM", (input11AM.val()))
    localStorage.setItem("12AM", (input12PM.val()))
    localStorage.setItem("13PM", (input1PM.val()))
    localStorage.setItem("14PM", (input2PM.val()))
    localStorage.setItem("15PM", (input3PM.val()))
    localStorage.setItem("16PM", (input4PM.val()))
    localStorage.setItem("17PM", (input5PM.val()))
});

$("input9AM").append(localStorage.getItem("9AM"));