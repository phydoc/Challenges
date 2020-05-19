const overTime = (arr) => {
	let [ sw, ew, hr, ot ] = arr;
	let payedAmount = 0;
	if (ew <= 17) {
		let timeWorked = ew - sw;
		payedAmount += timeWorked * hr;
	} else if (ew > 17 && sw > 17) {
		let normalTime = ew - sw;
		payedAmount += (normalTime * hr) * ot;
	} else if (ew > 17 && sw < 17) {
		let normalTime = 17 - sw; 
		payedAmount += normalTime * hr;
		let overWorkedTime =  ew - 17;
		payedAmount += (overWorkedTime * hr) * ot;
	}
	return `\$${payedAmount.toFixed(2)}`
}


console.log(overTime([18, 20, 32.5, 2])) //  "$84.00"

// https://edabit.com/challenge/kYwxQo9tqLpFYTMY6
