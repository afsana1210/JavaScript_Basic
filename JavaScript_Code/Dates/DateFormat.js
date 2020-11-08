//The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
var d=new Date('2020-11-07');
console.log("date is :"+d);


var y_m=new Date('2020-03');
console.log("Date in year and month format :"+y_m);


//ISO dates can be written without month and day (YYYY):
var y=new Date('2015')
console.log("Date in year :"+y);

//UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
//Date and time is separated with a capital T.
//UTC time is defined with a capital letter Z.
var iso_date=new Date('2020-11-07T10:20:30Z');
console.log("Date in iso format :"+iso_date);

//If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
var d=new Date("2020-03-25T12:00:00-06:30");
console.log(d);

//Short dates are written with an "MM/DD/YYYY" syntax like this:
var d=new Date('10/25/2010');
console.log(d);

var d = new Date("2015/03/25");
console.log("let's see :"+d);


//Long dates are most often written with a "MMM DD YYYY" syntax like this:
var d = new Date("Jan 22 2020");
console.log("long format of Date :"+d);
//Commas are ignored. Names are case insensitive:
var d = new Date("January, 22 ,2020");
console.log("long format of Date,ommitted commas :"+d);

//Date.parse() returns the number of milliseconds between the date and January 1, 1970:
var msec = Date.parse("March 21, 2020");
console.log(msec);
//You can then use the number of milliseconds to convert it to a date object:
var d = new Date(msec);
console.log(d);
