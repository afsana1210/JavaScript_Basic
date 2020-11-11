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

var str1="Perform a global match ,find all matches rather than stopping after the first match";
var s_all=str1.match(/match/g); //o/p->[ 'match', 'match', 'match' ]
console.log(s_all);

//Do a global, case-insensitive search for 
var global_insensitive_search=str1.match(/MATCH/gi);
console.log(global_insensitive_search);

//he global property returns true if the "g" modifier is set, otherwise it returns false.
var patt=/match/g;
var result=patt.global;
console.log(result);//true

var patt1=/MATCH/i;
var r=patt1.ignoreCase;
console.log(r);//true

//m is used to search pattern in multi line
var s='\nIs th\nis it?';
var p=/^is/m;
var res=s.match(p);
console.log(res);//[ 'is', index: 7, input: '\nIs th\nis it?' ]

//Do a global, multiline search for "is" at the beginning of each line in a string:
var p=/^is/gm;
var t=s.match(p);
console.log(t);//[ 'is' ]

//Do a global, case-insensitive, multiline search for "is" at the beginning of each line in a string:
var p=/^is/gmi;
var r=s.match(p);
console.log(r);//[ 'Is', 'is' ]

//Do a global, multiline search for "is" at the end of each line in a string:
var st="Is\nthis\nhis\n?";
var pat1=/is$/gm;
var r=st.match(pat1);
console.log(r);

var p=/match/gi;
var r=p.multiline;
console.log(r);
