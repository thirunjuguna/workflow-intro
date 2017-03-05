/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function selectSum(a){
    var sum=0;
    for (i = 0; i < a.length; i++) { 
        if(typeof a[i]=='number'){
            sum=sum+a[i];
        }
    }
    return sum;
}
  var a = [10, 6, 4],
            b = ['a', 20, 30, 'x', 'y'],
            c = ['a', 'b', 'c'];
    console.log(selectSum(c));