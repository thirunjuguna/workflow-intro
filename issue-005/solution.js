/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function hello(name){
    name= (typeof name !== 'undefined') ?  name:"world";
    return 'Hello '+name+'!';
 
}

console.log(hello('Jimmy'));