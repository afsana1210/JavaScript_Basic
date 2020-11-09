var d=new Date();
//The setFullYear() method sets the year of a date object
d.setFullYear(2010);
console.log(d);

//The setFullYear() method can optionally set month and day:
d.setFullYear(2010,11,3);
console.log(d);

//The setMonth() method sets the month of a date object (0-11):
d.setMonth(5)
console.log(d);

//The setDate() method sets the day of a date object (1-31):
d.setDate(11)
console.log(d);

d.setDate(d.getDate()+50);
console.log(d);

d.setHours(22);
console.log(d);

d.getMinutes(30);
console.log(d);

d.getSeconds(30);
console.log(d);


var today,someday,text;
today=new Date();
someday=new Date();
someday.setFullYear(2100,0,14);

if(someday > today){
    text='today is before January 14 2100';
}
else{
    text='today is after Ianuary 14 2100';
}
console.log(text);