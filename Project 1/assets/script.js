
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var y = d.getFullYear();

var months = new Array(12);
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

var current_date = new Date();
month_value = current_date.getMonth();
day_value = current_date.getDate();

document.getElementById("date").innerHTML = days[d.getDay()] + "&nbsp - &nbsp" + months[month_value] + "&nbsp " +
day_value + ",&nbsp" + y;



