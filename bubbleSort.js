function bubbleSort(inputList) {
	for (let i = 0; i < inputList.length; i++) {
		for (let j = 0; j < inputList.length; j++) {
			if (inputList[i] > inputList[j]) {
				let temp = inputList[i];
				inputList[i] = inputList[j];
				inputList[j] = temp;
			} else {
				let temp = inputList[j];
				inputList[j] = inputList[i];
				inputList[i] = temp;
			}
		}
	}

	return inputList;
}

mixedList = [50, 40, 8, 39, 32, 46, 9, 5, 27, 23, 11, 36, 10, 18, 6]

console.log(bubbleSort(mixedList));