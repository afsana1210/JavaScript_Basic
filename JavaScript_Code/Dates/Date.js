var d=new Date()
console.log("Date is :"+d);
// month start from 0 january to 11 December
var new_format=new Date(2020,9,24,10,30,60,0);
console.log("Date in year,moth,day,hourse,minutes,second,milisecond :"+new_format);
var d = new Date(2018, 11);
console.log("Date in year and month :" +d);
//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
var month=new Date(2020);
console.log(" month is passed as a parameter :"+month);
//One and two digit years will be interpreted as 19xx:
var two_digit=new Date(99,10,25);
console.log("Date is :"+two_digit);
//new Date(dateString) creates a new date object from a date string:
var string_date_format=new Date("October 10 ,2020 11:30:49");
console.log("Date in string format is passing :"+string_date_format);
var d=new Date(0);
console.log(d);