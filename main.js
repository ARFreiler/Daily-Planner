console.log("JS Connected");

let currentDay = moment();

// moment(currentDay).format('MM/DD/YYYY');
// $(document).ready(function() {
//     var todayDate = moment().format('dddd, MMM Do YYYY');
//     currentDate.html(todayDate);

// })
console.log(currentDay.format('dddd MMMM Do YYYY'));
document.getElementById("currentDay").innerHTML = currentDay.format('dddd MMMM Do YYYY');