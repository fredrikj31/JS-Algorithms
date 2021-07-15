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


array = [1,2,3,4,5,6,7,8];

console.log(linearSearch(array, 11));