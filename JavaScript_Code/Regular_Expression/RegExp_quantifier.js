//Do a global search for at least one "o":
var str='Hellooo world !hello wooorld';
var pattern=/\o+/;
var res=str.match(pattern);
console.log(res);//o/p->['ooo']

//modifier used with quantifier .modifier-g,g->find more then one match
var patt=/\o+/g;
var r=str.match(patt);
console.log(r);//o/p->[ 'ooo', 'o', 'o', 'ooo' ]

//Do a global search for an "l", followed by zero or more "o" characters:
var patt=/\lo*/g;
var r=str.match(patt);
console.log(r);//o/p->[ 'l', 'looo', 'l', 'l', 'lo', 'l' ]

var str = "1, 100 or 1000?";
var patt1 = /10*/g;
var res=str.match(patt1);
console.log(res);//o/p->[ '1', '100', '1000' ]
//Do a global search for a "1", followed by zero or one "0" characters:
var patt=/10?/g;
var res1=str.match(patt);
console.log(res1);//o/p->[ '1', '10', '10' ];

//Do a global search for a substring that contains a sequence of four digits:
var str="100 , 1000 0or 10000";
var patt=/\d{4}/g;
var res=str.match(patt);
console.log(res);//[ '1000', '1000' ]
//Do a global search for a substring that contains a sequence of three to four digits:
var pattern=/\d{3,4}/g;
var res1=str.match(pattern);
console.log(res1);//[ '100', '1000', '1000' ]
//Do a global search for a substring that contains a sequence of at least three digits:
var patt1 = /\d{3,}/g;
var r=str.match(patt1);
console.log(r);

//Do a global search for "is" at the end of a string:
var str='is this your wish,his';
var patt=/is$/g;
var r=str.match(patt);
console.log(r);

//Do a global, multiline search for "is" at the end of each line in a string:
var str = "Is\nthis\nhis\n?";
var patt1 = /is$/gm;
var r=str.match(patt1);
console.log(r);
