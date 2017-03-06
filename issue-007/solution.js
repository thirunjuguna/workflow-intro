/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function superSum(array){
    //return array;
    var answer=0;
    var sums=array.map(function(a) {
  return Array.prototype.slice.call(a.toString()).map(Number).reduce(function(b, c) {
    return b + c;
  });
});
    for (i = 0; i < sums.length; i++) { 
       
            answer=answer+sums[i];
       
    }
    return answer;
}
console.log(superSum(c));
