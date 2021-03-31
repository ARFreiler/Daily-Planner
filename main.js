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
let input = document.getElementsByTagName("input");

let buttons = document.getElementsByClassName("saveBtn");

$(".saveBtn").click(function() {
    console.log("Functioning");
});





//  let tasks = input.value;

// let saveBtn = document.getElementsByClassName(".saveBtn");
 
// saveBtn.addEventListener("click", function(event) {
// event.preventDefault();
// localStorage.setItem("tasks", JSON.stringify(tasks));
// })

// function hourColor() {
//     if 
// }

// function saveTask () {

// }

