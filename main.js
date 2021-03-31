console.log("JS Connected");

let currentDay = moment();

console.log(currentDay.format('dddd MMMM Do YYYY'));
document.getElementById("currentDay").innerHTML = currentDay.format('dddd MMMM Do YYYY');

let currentHour = parseInt(moment().format('HH'));
console.log(currentHour);

let input9AM = $("9AM");
let input10AM = $("10AM");
let input11AM = $("11AM");
let input12PM = $("12PM");
let input1PM = $("1PM");
let input2PM = $("2PM");
let input3PM = $("3PM");
let input4PM = $("4PM");
let input5PM = $("5PM");