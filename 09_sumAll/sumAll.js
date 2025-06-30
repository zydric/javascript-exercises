const sumAll = function (num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
	if (num1 < 0 || num2 < 0) return 'ERROR';

	const array = [];

	let start = num1 < num2 ? num1 : num2;
	const end = num1 > num2 ? num1 : num2;

	for (let i = start; i <= end; i++) {
		array.push(start++);
	}

	return array.reduce((sum, item) => (sum += item), 0);
};

// Do not edit below this line
module.exports = sumAll;
