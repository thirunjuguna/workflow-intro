/* 
 * THIRU NJUGUNA
 * uriht@outlook.com
 * Made with love
 */

//a function to to test data types
 function dataTypeCheck(a){
 if(typeof a!=='string' && isNaN(a)){
     return 0;
 }else if(typeof a == 'number'){
        if(a%1!=0){
            ///float
            //If it’s a float, it multiplies by 2 and returns the results
            return a*2;
        }else{
            //integer
            ///If it’s an integer, it divides by 2 and returns the results
            return a/2;
        }
                
    }else if(typeof a == 'string'){
        //string
        //check typcasting
       //return Number(a);
       var val=Number(a);
        
        if(parseInt(val)){
           return Number(a);
        }else{
           return 'hello '+a;
        }
    
    }else if(a==null){
        return 0;
    }else if(a=='undefined'){
        return false;
    }
   
    
  
    
}

 
 //console.log(dataTypeCheck(NaN));    
        
      