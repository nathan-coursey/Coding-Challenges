function detectWord(str) {
	let word="";
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toLowerCase()) {
			word += (str[i]);
		}
	}
	return word;
}
