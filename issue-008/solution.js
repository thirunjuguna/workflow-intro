/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function sum(args){
    var sum=0;
    for(i = 0; i < arguments.length; ++i){
        sum=sum+arguments[i];
    }
    return sum;
}

console.log(sum(10, 5, 5, 3, 10));