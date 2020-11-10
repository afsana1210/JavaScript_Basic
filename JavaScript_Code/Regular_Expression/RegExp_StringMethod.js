//A regular expression is a sequence of characters that forms a search pattern.

//The search pattern can be used for text search and text replace operations.

//The search() method searches a string for a specified value and returns the position of the match:
var str="learning javascript language";
var n=str.search('javascript');
console.log("given search position is :"+n)

//search with a regular expression
var s=str.search(/JAVASCRIPT/i); //here i is used for case-insensitive,where i->modifier and javascript->pattern(/pattern/modifiter) 
console.log('using reg exp,given search position is :'+s);

//replace method replaces a specified value with another value in a string:
var rep=str.replace('learning','practising');
console.log("replace string :"+rep);
console.log(str);

//replace method with regular expression
var rep_regexp=str.replace(/LEARNING/i,'practising');
console.log('using reg exp,replace string is :'+rep_regexp);

