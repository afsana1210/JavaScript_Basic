//normal function

function hello(){
  return "hello world"
}
console.log(hello());

//arrow function
hello=()=>{return "hello world......"};
console.log(hello());

//It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
hello=()=>"hello";
console.log(hello());

//If you have parameters, you pass them inside the parentheses:
hello=(name)=>"hello"+"\t"+name;
console.log(hello("javascript"));

