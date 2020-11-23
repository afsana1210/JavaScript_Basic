var m=Math.max(1,2,3);
console.log(m);

//Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
var a=Math.max.apply(null,[1,2,3]);
console.log(a);

var a=Math.max.apply(0,[1,2,3]);
console.log(a);

var a=Math.max.apply(Math,[1,2,3]);
console.log(a);

var a=Math.max.apply(" ",[1,2,3]);
console.log(a);

var a=Math.max.apply([1,2,3]);//if we don't apply first arg it will return -Infinity
console.log(a);

var a=Math.max(0,[1,2,3]);//NaN
console.log(a);

var a=Math.max([1,2,3]);//NaN
console.log(a);