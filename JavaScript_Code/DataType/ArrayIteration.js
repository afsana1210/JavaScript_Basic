var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "\n";
}
console.log(txt)

//Map function returns new array,it doesn't changed original array
var numbers2 = numbers.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
};
console.log(numbers2);
console.log('original array :'+numbers);

//filter function,The filter() method creates a new array with array elements that passes a test.
var over18=numbers.filter(filterfunction);

function filterfunction(value){
    return value > 18;
}
console.log(over18);
console.log('original array :'+numbers);

//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
var red=numbers.reduce(Reducefunction);//sum=99

function Reducefunction(total,value){
    return total+value;
};
console.log(red);
console.log('original array :'+numbers);

//The reduce() method can accept an initial value:
var red_init=numbers.reduce(Reducefunction,100);//sum=199

function Reducefunction(total,value){
    return total+value;
};
console.log(red_init);
console.log('original array :'+numbers);


//This example check if all array values are larger than 18:,and returns false if all are not over 18,even if somevalue is over 18,it needs all v alue should be over 18.
var allover18=numbers.every(myfunction);
function myfunction(value,index,array){
   return value > 18;
};
console.log(allover18);
console.log('original array :'+numbers);


var some_over_18=numbers.some(myfunction);
function myfunction(value,index,array){
   return value > 18;
};
console.log(some_over_18);
console.log('original array :'+numbers);

//The indexOf() method searches an array for an element value and returns its position.
var pos=numbers.indexOf(16);
console.log(pos);

//The find() method returns the value of the first array element that passes a test function.

//This example finds (returns the value of) the first element that is larger than 18:
var first_pos_value=numbers.find(myfunction);
function myfunction(value,index,array){
  return value > 18
};
console.log(first_pos_value);
console.log('original array :'+numbers);

//The findIndex() method returns the index of the first array element that passes a test function.

//This example finds the index of the first element that is larger than 18:
var first_pos_index=numbers.findIndex(myfunction);
function myfunction(value,index,array){
  return value > 18
};
console.log(first_pos_index);
console.log('original array :'+numbers);
