function ExtractingString(){
    var str='Hello..This is javascript string extracting function';
    var extr=str.slice(7,14);
    console.log('extring string from the given string :'+'\n'+'Given string is :'+str+'\n'+'extracted string is :'+extr)//This is
    var e=str.slice(-45,-37);//If a parameter is negative, the position is counted from the end of the string.
    console.log('string is : '+e)//o/p This is
   //If you omit the second parameter, the method will slice out the rest of the string:
   var res=str.slice(7);
   console.log(res);
   //substr() second parameter specifies the length of the extracted part.
   var sub=str.substr(7,7);
   console.log(sub);
   //substring() cannot accept negative indexes.
   var sub2=str.substring(7,14);
   console.log(sub2);
   //The replace() method does not change the string it is called on. It returns a new string.
   var rep=str.replace('javascript','nodejs');
   console.log('string is :'+str+'\n'+'replace string :'+rep);
   //replace() method replace only the first match .it is case-sensitive for that used regular expression.
   var m=str.replace(/JAVASCRIPT/i,'nodejs');
   console.log(m);
}
ExtractingString();