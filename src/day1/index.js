const path = require('path');
const readFileToArray = require('../readFileToArray');

const main = async () => {
    const expenses = await readFileToArray(path.join(__dirname, '/input.txt'));

    const lookup = expenses.reduce((acc, expense) => {
        acc[expense] = expense;
        return acc;
    }, {});

    let answer = -1;
    for (let expense of expenses) {
        let otherExpense = lookup[2020 - expense];
        if (otherExpense) {
            answer = expense * otherExpense;
            break;
        }
    }

    console.log(answer);
};

main();
