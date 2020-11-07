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
}
console.log(red);
console.log('original array :'+numbers);

//The reduce() method can accept an initial value:
var red_init=numbers.reduce(Reducefunction,100);//sum=199

function Reducefunction(total,value){
    return total+value;
}
console.log(red_init);
console.log('original array :'+numbers);


