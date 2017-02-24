<?php
///6
///1 2 3 4 10 11
 function ArraySum($array){
    $sum=0;
    foreach($array as $num){
        $sum=$sum+$num;
    }
   return $sum;//return
}
//call function
print(ArraySum([1,2,3,4,10,11]));
?>
