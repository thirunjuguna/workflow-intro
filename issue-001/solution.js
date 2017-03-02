/* 
 * THIRU NJUGUNA
 * uriht@outlook.com
 * Made with love
 */

//a function to to test data types
 function CheckDataType(num){
    var type=typeof num;
    if(type=='number' && num%1!=0){
        return 'Float';//checking for float
     }elseif(type==''){
        return 'Variable is empty'; /// empty variable
        
        }
 
    return typeof num;
    
}
console.log(CheckDataType('fga'));