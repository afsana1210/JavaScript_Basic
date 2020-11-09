var d=new Date();
//The getTime() method returns the number of milliseconds since January 1, 1970:
console.log(d.getTime());

//The getFullYear() method returns the year of a date as a four digit number:
console.log("YEAR :"+d.getFullYear());

console.log(d.getMonth())

var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
console.log(months[d.getMonth()]);
//The getDate() method returns the day of a date as a number (1-31):
console.log(d.getDate());


//The getHours() method returns the hours of a date as a number (0-23):
console.log(d.getHours());


//The getMinutes() method returns the minutes of a date as a number (0-59):
console.log(d.getMinutes());

//The getSeconds() method returns the minutes of a date as a number (0-59):
console.log(d.getSeconds());

//The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
console.log(d.getMilliseconds());

//The getDay() method returns the weekday of a date as a number (0-6):0->sunday
console.log(d.getDay());
var Days=['Sunday','MOnday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(Days[d.getDay()]);

console.log(d.getUTCDate());

