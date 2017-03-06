/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function sumEven(a){
   
   return a.filter(function(i){if(i%2==0)return i}).reduce(function(a, b){return a+b});
}
function sumOdd(a){
    return a.filter(function(i){return i%2}).reduce(function(a, b){return a+b});
}

function evenOdd(a){
    return sumEven(a)-sumOdd(a);
}
console.log(evenOdd([2,5,3]));



/// odd