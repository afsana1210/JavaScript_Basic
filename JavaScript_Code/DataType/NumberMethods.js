function NumberMethod()
{
    var num=123;
    console.log(num.toString())
    var x=5.656;
    console.log(x.toExponential()) //5.656e+0
    console.log(x.toExponential(2)) //5.66e+0
    console.log(x.toExponential(4)) // 5.6560e+0
    console.log(x.toFixed(0)) //6
    console.log(x.toFixed(2)) //5.66
    console.log(x.toPrecision(2)) //5.7
    console.log(parseFloat(num))
    console.log(Number(x))
    console.log(parseInt(x))

}
NumberMethod();