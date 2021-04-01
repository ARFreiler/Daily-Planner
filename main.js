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
let input9AM = $("#hour9");
let input10AM = $("#hour10");
let input11AM = $("#hour11");
let input12PM = $("#hour12");
let input1PM = $("#hour13");
let input2PM = $("#hour14");
let input3PM = $("#hour15");
let input4PM = $("#hour16");
let input5PM = $("#hour17");

// Event Listener that sets User Input to Local Storage
$("button").on("click", function() {
    localStorage.setItem("9", (input9AM.val()));
    localStorage.setItem("10", (input10AM.val()))
    localStorage.setItem("11", (input11AM.val()))
    localStorage.setItem("12", (input12PM.val()))
    localStorage.setItem("13", (input1PM.val()))
    localStorage.setItem("14", (input2PM.val()))
    localStorage.setItem("15", (input3PM.val()))
    localStorage.setItem("16", (input4PM.val()))
    localStorage.setItem("17", (input5PM.val()))
});

// Function to Get User Input from Local Storage
function setData() {
    console.log("hello");
    for (let index = 0; index < hours.length; index++) {
        const hourNumber = hours[index];
        var input = localStorage.getItem(hourNumber);
     if (input !== null) $('#hour' + hourNumber).val(input);
     console.log("hour" + hourNumber);
    }
}

setData();




