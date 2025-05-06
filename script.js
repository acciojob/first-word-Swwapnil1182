function firstWord(s) {
  // your code here
	let str=s.trim();
	str1=str.split(" ");
	return str1[0]

	/*for(let i=0;i<str1.length;i++){
		return str1[i]
	}*/
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
