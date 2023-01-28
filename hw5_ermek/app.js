function reverseStr(str){ 
    var a = ""; 
    for (i = 0; i < str.length; i++){ 
        a += str[(str.length - 1) - i]; 
    } 
    console.log(a); 
} 
reverseStr("hello") 


function  average(arr)
{
    if(arr.length === 0)
        return 0;
 
    let sum = 0;
 
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum / arr.length;
}
 
let k = [1, 2, 3, 4, 5, 6, 7];
console.log(average(k));
 