// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

const sevenBoom = (arr) => {
	for (i of arr) {
		let stringValue = i.toString();
		let newArray = stringValue.split('');
		for (i of newArray) {
			if (i === "7") {
				return "Boom!";
			};
		};

	};
	return "there is no 7 in the array";
};

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
