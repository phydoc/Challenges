const overTime = (arr) => {
	let [ sw, ew, hr, ot ] = arr;
	let payedAmount = 0;
	if (ew <= 17) {
		let timeWorked = ew - sw;
		payedAmount += timeWorked * hr;
	}
	if (ew > 17) {
		let normalTime = 17 - sw; 
		payedAmount += normalTime * hr;
		let overWorkedTime =  ew - 17;
		payedAmount += (overWorkedTime * hr) * ot;
	}
	return `\$${payedAmount.toFixed(2)}`
}


console.log(overTime([9, 17, 30, 1.5])) // "$240.00"
console.log(overTime([16, 18, 30, 1.8])) //  "$84.00"
console.log(overTime([13.25, 15, 30, 1.5])) // "$52.50"

// https://edabit.com/challenge/kYwxQo9tqLpFYTMY6
