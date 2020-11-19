var text="";
var person={fname:"john",lname:"smith",age:50};
var x;
for( x in person){
    text+=person[x]+" ";
}
console.log(text);
