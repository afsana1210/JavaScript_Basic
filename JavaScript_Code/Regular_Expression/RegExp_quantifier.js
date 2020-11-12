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

