//after 3 second myfunction will call by setTimeout
setTimeout(myfunction,5000);

function myfunction(){
    console.log("Hello from Asynchronous")
};

//Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
setTimeout(function(){ myfunction1("hello");},2000);
function myfunction1(value){
  console.log(value);
};
