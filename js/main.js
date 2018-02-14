
// EXERCISE


// google reg ex to see wtf is goin on

// 1-6
var names = ["James", "Todd", "Dimmy", "Lambchuck", "Fak"]
var lowerNames =[]

for(var i = 0; i < names.length; i++){
	names[i] = names[i].toLowerCase();
	lowerNames.push(names[i])
}
console.log(lowerNames)

for(var j = 0; j < lowerNames.length; j++){
	console.log(lowerNames[j][0])
	console.log(lowerNames[j][lowerNames[j].length - 1])
}

// 7
var name = "james"
var splitName = name.split("")

for(var k = 0; k < splitName.length; k++){
	console.log(splitName[k])
}
// 8
var joinedName = splitName.join("");
console.log(joinedName)

// var newName = joinedName.split("j").join("l");
// console.log(newName)

// both ways work!!

var newName = joinedName.replace('j', 'l')
console.log(newName)

var input = document.querySelector('input')
var btn = document.querySelector('button')

function checkEmail() {
	var pattern = /[a-z0-9,_%+-]+@[a-z0-9,-]+\.[a-z]{2,3}$/;
	var myRegex = new RegExp(pattern);
	var isEmail = myRegex.test(input.value);
	if(isEmail == false) {
		alert("please enter a valid email address!")
	} else {
		console.log(true)
	}
}

btn.addEventListener("click", checkEmail)












