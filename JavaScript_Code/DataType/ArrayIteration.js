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