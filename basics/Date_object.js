/*
The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
It will continue calling the function until clearInterval() is called or the window is closed.
*/
function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);

/*
The Date object enables us to work with dates.
A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.

Using new Date(), create a new date object with the current date and time

JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). 
One day contains 86,400,000 millisecond.

JavaScript counts months from 0 to 11. January is 0, and December is 11.
Date objects are static, rather than dynamic. The computer time is ticking, 
but date objects don't change, once created.

Format:
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/
// Example:
//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

/*
The Date Object and its methods:
Date.getFullYear() ---> gets the year.
Date.getMonth() ---> gets the month.
Date.getDate() ---> gets the day of the month.
Date.getDay() ---> gets the day of the week.
Date.getHours ---> gets the hour.
Date.getMinutes ---> gets the minutes.
Date.getSeconds() ---> gets the seconds.
Date.getMilliseconds() ---> gets the milliseconds.
*/
// Example:
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

