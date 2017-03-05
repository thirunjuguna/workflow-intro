/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function product(a,b){
   try{
   
      if(typeof a!='number' || typeof b!='number'){ 
          throw 'NaN Expection';
      }else{
         
      return a*b;
  }
      
   }catch(e){
       return e;
   }
}

