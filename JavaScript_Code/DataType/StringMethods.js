function StringMethod()
{
    var str="This is a javascript code."
    var len=str.length
    console.log("length of string is :"+len)
    // The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
    var pos=str.indexOf('s') //3
    console.log(pos)
    var pos_last=str.lastIndexOf('s') //14
    console.log(pos_last)
    var pos=str.indexOf('z')
    console.log(pos) //Both indexOf(), and lastIndexOf() return -1 if the text is not found.
    var ind=str.indexOf('s',10) //The indexOf() method accepts a second parameter as the starting position for the search
    console.log(ind)
    var s=str.search('s') //3 
    console.log(s)
}
StringMethod();