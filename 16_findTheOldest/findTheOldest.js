const findTheOldest = function (people) {
	const age = (person) => {
		const death = person.yearOfDeath || new Date().getFullYear();
		return death - person.yearOfBirth;
	};

	return people.sort((a, b) => age(b) - age(a))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
