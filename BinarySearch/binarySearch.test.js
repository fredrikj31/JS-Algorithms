const binarySearch = require("./binarySearch.js");

test("Should fint number 30", () => {
	let array = [22, 30, 40, 42, 44, 70, 81, 91, 99]
	expect(binarySearch(array, 30)).toBe(true);
});

test("Should not find the number 69", () => {
	let array = [22, 30, 40, 42, 44, 70, 81, 91, 99]
	expect(binarySearch(array, 69)).toBe(false);
});