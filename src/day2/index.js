const path = require("path");
const readFileToArray = require("../readFileToArray");

const main = async () => {
	const rows = await readFileToArray(path.join(__dirname, "/input.txt"));

	const answer = rows.reduce((numValidPasswords, row, i) => {
		const [policy, password] = row.split(": ");
		const [rangeString, policyChar] = policy.split(" ");
		const range = rangeString.split("-");
		const min = parseInt(range[0], 10);
		const max = parseInt(range[1], 10);

		let numChars = 0;
		for (let char of password) {
			if (char === policyChar) ++numChars;
		}

		return numChars >= min && numChars <= max
			? numValidPasswords + 1
			: numValidPasswords;
	}, 0);

	console.log(answer);
};

main();
