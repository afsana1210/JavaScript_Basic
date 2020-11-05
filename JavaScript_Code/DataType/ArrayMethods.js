var fruits=['Apple','Banana','kiwi'];
//Array convert into string using toString method
var convert=fruits.toString();
console.log("Array into string :"+convert);
//Array convert into string using join() method, but in addition you can specify the separator:
var str=fruits.join('*');
console.log("Array into string :"+str);
//The pop() method removes the last element from an array:
var pop_element=fruits.pop();
console.log("pop element is :"+pop_element); //kiwi
console.log("After pop element,Array will be :"+fruits);

//The push() method adds a new element to an array (at the end),returns the new array length:
var push_element=fruits.push('Mango');
console.log("After pushing element into Array :"+push_element);

//shift() method returns the string that was "shifted out",removes the first array element
var shift_element=fruits.shift();
console.log("shifted element :"+shift_element);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
var new_element=fruits.unshift('Grapes');
console.log("New element is :"+new_element); //returns length
console.log("After pop element,Array will be :"+fruits);

//splice(),2->position for new element,0->element remove,rest of the parameter to add element
var add_element=fruits.splice(2, 0, "Lemon", "Kiwi");
console.log("After splice element,Array will be :"+fruits);

//splice for remove element.0->add element.1->removed element
var remove=fruits.splice(0,1);
console.log("New element is :"+remove); //returns removed element
console.log("After splice element,Array will be :"+fruits);

//concat() two array
var veg=['spanish','fenugreek'];
var new_array=fruits.concat(veg);
console.log("Merging two array is :"+new_array); 

console.log("Arary :"+new_array.concat('brinjal'));








