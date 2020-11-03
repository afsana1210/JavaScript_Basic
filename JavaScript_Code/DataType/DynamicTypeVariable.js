function myfunction(){
    var x;   //Now x is undefined
    x=5;     //Now x is number
    x='john'; //Now x is string
    console.log('value of x is:'+x);
}
myfunction();