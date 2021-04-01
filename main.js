console.log("JS Connected");

// Display Current Day and Date in Jumbotron
let currentDay = moment();

console.log(currentDay.format('dddd MMMM Do YYYY'));
document.getElementById("currentDay").innerHTML = currentDay.format('dddd MMMM Do YYYY');

// Array of Planner Hours 
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// console.log(hours);
// Set Current Hour for User Interface
let currentHour = parseInt(moment().format('HH'));
console.log(currentHour);

for (let i = 0; i < hours.length; i++) {
    const hour = hours[i];
    if (hour < currentHour) {
        $("#" + hour).addClass("past");
    } else if (hour === currentHour) {
        $("#" + hour).addClass("present");
    } else $("#" + hour).addClass("future");
}

// Variables for Interfacing with Planner
let input9AM = $("#9AM");
let input10AM = $("#10AM");
let input11AM = $("#11AM");
let input12PM = $("#12PM");
let input1PM = $("#1PM");
let input2PM = $("#2PM");
let input3PM = $("#3PM");
let input4PM = $("#4PM");
let input5PM = $("#5PM");

// Event Listener that sets User Input to Local Storage
$("button").on("click", function() {
    localStorage.setItem("9AM", (input9AM.val()));
    localStorage.setItem("10AM", (input10AM.val()))
    localStorage.setItem("11AM", (input11AM.val()))
    localStorage.setItem("12PM", (input12PM.val()))
    localStorage.setItem("1PM", (input1PM.val()))
    localStorage.setItem("2PM", (input2PM.val()))
    localStorage.setItem("3PM", (input3PM.val()))
    localStorage.setItem("4PM", (input4PM.val()))
    localStorage.setItem("5PM", (input5PM.val()))
});

window.onload = function() {
    var input9AM = localStorage.getItem("9AM");
    if (input9AM !== null) $('#9AM').val(input9AM);
    var input10AM = localStorage.getItem("10AM");
    if (input10AM !== null) $('#10AM').val(input10AM);
    var input11AM = localStorage.getItem("11AM");
    if (input11AM !== null) $('#11AM').val(input11AM);
    var input12PM = localStorage.getItem("12PM");
    if (input12PM !== null) $('#12PM').val(input12PM);
    var input1PM = localStorage.getItem("1PM");
    if (input1PM !== null) $('#1PM').val(input1PM);
    var input2PM = localStorage.getItem("2PM");
    if (input2PM !== null) $('#2PM').val(input2PM);
    var input3PM = localStorage.getItem("3PM");
    if (input3PM !== null) $('#3PM').val(input3PM);
    var input4PM = localStorage.getItem("4PM");
    if (input4PM !== null) $('#4PM').val(input4PM);
    var input5PM = localStorage.getItem("5PM");
    if (input5PM !== null) $('#5PM').val(input5PM);
}

// function setData() {
//     $("#input9AM").append(localStorage.getItem("9AM"));
//     $("#input10AM").append(localStorage.getItem("10AM"));
//     $("input11AM").append(localStorage.getItem("11AM"));
//     $("input12PM").append(localStorage.getItem("12PM"));
//     $("input1PM").append(localStorage.getItem("1PM"));
//     $("input2PM").append(localStorage.getItem("2PM"));
//     $("input3PM").append(localStorage.getItem("3PM"));
//     $("input4PM").append(localStorage.getItem("4PM"));
//     $("input5PM").append(localStorage.getItem("5PM"));
// }

// setData();



