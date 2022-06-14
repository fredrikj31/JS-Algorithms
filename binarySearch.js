function binarySearch(list, target) {
	let inputList = list.sort();
	let spliceNum = Math.floor(inputList.length / 2);
	let found = false;
	
	//let sliceArray = inputList.slice(spliceNum - 1, inputList.length - 1);
	//console.log(sliceArray)

	while (found == false && inputList.length > 1) {
		if (inputList[spliceNum] > target) {
			inputList = inputList.slice(0, spliceNum - 1);
			spliceNum = Math.floor(inputList.length / 2);
			//console.log(inputList)
			continue;
		} else if (inputList[spliceNum] < target) {
			inputList = inputList.slice(spliceNum - 1, inputList.length - 1);
			spliceNum = Math.floor(inputList.length / 2);
			//console.log(inputList)
			continue;
		} else if (inputList[spliceNum] === target) {
			found = true;
			//console.log(inputList)
			break;
		}
	}

	return found;
}

array = [22, 30, 40, 42, 44, 70, 81, 91, 99]

let startTime = new Date();

console.log(binarySearch(array, 18));

let endTime = new Date();

console.log("Time : " + Math.abs(endTime - startTime));