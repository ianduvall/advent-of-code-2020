const path = require("path");
const readFileToArray = require("../readFileToArray");

const main = async () => {
	const rows = await readFileToArray(path.join(__dirname, "/input.txt"));

	const { part1Answer, part2Answer } = rows.reduce(
		(acc, row, i) => {
			const [policy, password] = row.split(": ");
			const [rangeString, policyChar] = policy.split(" ");
			const range = rangeString.split("-");
			const min = parseInt(range[0], 10);
			const max = parseInt(range[1], 10);

			let numChars = 0;
			for (let char of password) {
				if (char === policyChar) ++numChars;
			}

			if (numChars >= min && numChars <= max) ++acc.part1Answer;

			const minContainsChar = password.charAt(min - 1) === policyChar;
			const maxContainsChar = password.charAt(max - 1) === policyChar;
			if (
				(minContainsChar || maxContainsChar) &&
				!(minContainsChar && maxContainsChar)
			) {
				++acc.part2Answer;
			}

			return acc;
		},
		{ part1Answer: 0, part2Answer: 0 }
	);

	console.log("Part 1:", part1Answer);

	console.log("Part 2:", part2Answer);
};

main();
