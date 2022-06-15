function linearSearch(list, target) {
	let found = false;

	for (let i = 0; i < list.length; i++) {
		if (list[i] === target) {
			found = true;
			break;
		} else {
			found = false;
		}
	}

	return found;
}


array = [22, 30, 40, 42, 44, 70, 81, 91, 99]

let startTime = new Date();

console.log(linearSearch(array, 18));

let endTime = new Date();

console.log("Time : " + Math.abs(endTime- startTime));