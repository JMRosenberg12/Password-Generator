function copyPassword() {
	document.getElementById("display").select();
	document.execCommand("copy");
	alert("Password copied to clipboard!");
}

function lowercase() {
	var hasUserSelectedLowerCase = confirm("Do you want your pass to contain lower case letters?");
	return hasUserSelectedLowerCase;

}

function uppercase() {
	var hasUserSelectedUpperCase = confirm("Do you want your pass to contain upper case letters?");
	return hasUserSelectedUpperCase;

}

function special() {
	var hasUserSelectedSpecial = confirm("Do you want your pass to contain special keys?")
	return hasUserSelectedSpecial;
}

function numbers() {
	var hasUserSelectedNumbers = confirm("Do you want your pass to contain numbers?")
	return hasUserSelectedNumbers;
}


function generate() {

		let value1 = "!@#$%^&*()";
		let value2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let value3 = "abcdefghijklmnopqrstuvwxyz";
		let value4 = "1234567890";

		let password = "";
		var complexity = prompt("How many letters you want in your password?");

		var hasUserSelectedUpperCase = uppercase();
		var hasUserSelectedLowerCase = lowercase();
		var hasUserSelectedSpecial = special();
		var hasUserSelectedNumbers = numbers();


		for (var i = 0; i <= complexity; i++) {
			if (hasUserSelectedUpperCase) {
				password = password + value2.charAt(Math.floor(Math.random() * Math.floor(value2.length - 1)));
			}


			if (hasUserSelectedLowerCase) {
				password = password + value3.charAt(Math.floor(Math.random() * Math.floor(value3.length - 1)));

			}
			if (hasUserSelectedNumbers) {
				password = password + value4.charAt(Math.floor(Math.random() * Math.floor(value4.length - 1)));
			}
			if (hasUserSelectedSpecial) {
				password = password + value1.charAt(Math.floor(Math.random() * Math.floor(value1.length - 1)));
            }
        }
   

			document.getElementById("display").value1 = password;
			document.getElementById("display").value2 = password;
			document.getElementById("display").value3 = password;
			document.getElementById("display").value4 = password;
   

			document.getElementById("lastNums").innerHTML = password + "<br /r>";


			document.getElementById("length").innerHTML = "length: 30";

    }

