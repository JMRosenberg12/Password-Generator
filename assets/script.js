function copyPassword(){
   document.getElementById("display").select();
   document.execCommand("copy");
   alert ("Password copied to clipboard!");
}
function generate(){

function lowercase() {
    var hasUserSelectedLowerCase = confirm ("Do you want your pass to contain lower case letters?");

    
}
function uppercase() {
    var hasUserSelectedUpperCase = confirm ("Do you want your pass to contain lower cass letters?");

}
function special() {
    var hasUserSelectedSpecial = confirm ("Do you want your pass to contain special keys?")
}

function special() {
    var hasUserSelectedNumbers = confirm ("Do you want your pass to contain numbers?")
}

let value1 = "!@#$%^&*()";
let value2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let value3 = "abcdefghijklmnopqrstuvwxyz";
let value4 = "1234567890";

let password = "";
var complexity = prompt ("How many letters you want in your password?");


for(var i= 0; i <= complexity; i++){
    if (hasUserSelectedUpperCase){
        password = password + value2.charAt(Math.floor(Math.random() * Math.floor(value2.length - 1)));  
    }
     
    
    if (hasUserSelectedLowerCase){
        password = password + value3.charAt(Math.floor(Math.random() * Math.floor(value3.length - 1)));

    }
    if (hasUserSelectedNumbers){
        password = password + value4.charAt(Math.floor(Math.random() * Math.floor(value4.length - 1)));
    }
    if (hasUserSelectedSpecial){
        password = Password + value1.charAt(Math.floor(Math.random() * Math.floor(value1.length - 1)));
    }
    
  
}
}


document.getElementById("display").value = password;


document.getElementById("lastNums").innerHTML +=password + "<br /r>";



document.getElementById("length").innerHTML = "length: 30";

