/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function grade(a){
    //check if a if number
    if(typeof a=='number'){
        //continue
        if(a>=0 && a<30){
            return 'F';
        }else if(a>=30 && a<40){
            return 'E';
        }else if(a>=40 && a<50){
            return 'D';
        }else if(a>=50 && a<60){
            return 'C';
        }else if(a>=60 && a<80){
            return 'B'
        }else if(a>=80 && a<=100){
            return 'A';
        }
    }else{
        //stop
        return 'Enter Number Between 0-100';
    }
}

