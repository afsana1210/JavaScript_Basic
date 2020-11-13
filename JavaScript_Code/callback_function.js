//A callback is a function passed as an argument to another function.
function calculator(num1,num2,mycallback){
    var sum=num1+num2;
    mycallback(sum);
}
function display(result){
    console.log(result);
}

calculator(5,5,display);