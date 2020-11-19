//There are two different ways to access an object property:
//You can use .property or ["property"].
var person={
    firstname:"john",
    lastname:"smith",
    age:50
};
console.log(person.firstname +" is "+ person.age +" years old");

console.log(person["firstname"]+" is "+person["age"]+" years old ");