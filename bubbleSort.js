function bubbleSort(inputList) {
	for (let j = 0; j < inputList.length; j++) {
		for (let i = 0; i < inputList.length; i++) {
			if (inputList[i] > inputList[i + 1]) {
				var temp = inputList[i];
				inputList[i] = inputList[i + 1];
				inputList[i + 1] = temp;
			}
		}
	}

	return inputList;
}

mixedList = [50, 40, 8, 39, 32, 46, 9, 5, 27, 23, 11, 36, 10, 18, 6, 51];

console.log(bubbleSort(mixedList));
