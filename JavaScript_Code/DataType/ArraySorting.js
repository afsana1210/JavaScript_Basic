var fruits=['Orange','Banana','Mango','Apple'];
console.log("Array sorting :"+fruits.sort());//asceding order 
console.log("Array sorting :"+fruits.reverse());//decending order

//sorting Numeric Array element
var arr=[100,20,1,5,8,24,34];
console.log("Array :"+arr);
var sort_element=arr.sort(function(a,b){return a-b});//ascending order
console.log("Array sorting :"+sort_element);

var sort_dec=arr.sort(function(a,b){return b-a});//ascending order
console.log("Array sorting :"+sort_dec);

function mArraysort(arr){
    return Math.min.apply(null,arr);//same for max
};
console.log(mArraysort(arr));

//sorting object Array
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
var sort_obj_arr=cars.sort(function(a,b){return a.year,b.year}) ;
console.log("Object Array sorting :"+sort_obj_arr);
console.log(cars); 

