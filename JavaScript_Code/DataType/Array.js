var fruits_name=['Apple','banana','kiwi'];
console.log(fruits_name[0])
fruits_name[1]='Grapes';//canged the value of index[1] from banana to Grapes
console.log(fruits_name)// variable name return full array
var len=fruits_name.length
console.log('length of Array :'+len)
//accessing the last element:
var last=fruits_name[fruits_name.length-1];
console.log(last);
//for loop
for(i=0;i<len;i++){
    console.log((i+1)+":"+fruits_name[i]);
}
//add a new element
fruits_name.push('Watermelon')
console.log(fruits_name)
var inst=fruits_name instanceof Array;
console.log("instance of Array: "+inst);
