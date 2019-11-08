
function copyPassword(){
   document.getElementById("display").select();
   document.execCommand("copy");
   alert ("Password copied to clipboard!");
}
function lowercase() {
    var hasUserSelectedLowerCase = confirm ("Do you want your pass to contain lower case letters?");
    
}



function generate(){


let value1 = "!@#$%^&*()";
let value2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let value3 = "abcdefghijklmnopqrstuvwxyz";
let value4 = "1234567890";

let password = "";
var complexity = prompt ("How many letters you want in your password?");


for(var i= 0; i <= complexity; i++){
    
    
    if (hasUserSelectedLowerCase){
        password = password + value3.charAt(Math.floor(Math.random() * Math.floor(value3.length - 1)));

    }
    
  
}


document.getElementById("display").value = password;


document.getElementById("lastNums").innerHTML +=password + "<br /r>";
}


document.getElementById("length").innerHTML = "length: 30";


