console.log("JS Connected");

let currentDay = moment();

console.log(currentDay.format('dddd MMMM Do YYYY'));
document.getElementById("currentDay").innerHTML = currentDay.format('dddd MMMM Do YYYY');

let currentHour = parseInt(moment().format('HH'));
console.log(currentHour);