function binarySearch(list, target) {
	let inputList = list.sort();
	let spliceNum = Math.floor(inputList.length / 2);
	let found = false;
	while (found == false && inputList.length > 1) {
		if (inputList[spliceNum] > target) {
			inputList = inputList.slice(0, spliceNum - 1);
			spliceNum = Math.floor(inputList.length / 2);
			continue;
		} else if (inputList[spliceNum] < target) {
			inputList = inputList.slice(spliceNum - 1, inputList.length - 1);
			spliceNum = Math.floor(inputList.length / 2);
			continue;
		} else if (inputList[spliceNum] === target) {
			found = true;
			break;
		}
	}
	return found;
}

module.exports = binarySearch;