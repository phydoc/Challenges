
const buildStaircase = (numberOfStairs, character) => {
	let resultArr = []
	let otherNumber = numberOfStairs - 1;
	for (let i = 1; i < numberOfStairs+1; i++) {
		let row = '';
		row += character.repeat(i);
		row += '_'.repeat(otherNumber);
		otherNumber--;
		resultArr.push(row.split(''));
	}
	return resultArr;
}

console.log(buildStaircase(4, '$'));
console.log(buildStaircase(10, "#"));
console.log(buildStaircase(3, "A"));

// https://edabit.com/challenge/7HiitQLp9CQGQNWJr

