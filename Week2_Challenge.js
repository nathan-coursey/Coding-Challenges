function minMax(arr) {
	let maximum = arr.reduce((a,b)=>Math.max(a,b));
	let minimum = arr.reduce((a,b)=>Math.min(a,b));
	return([minimum, maximum]);
}
