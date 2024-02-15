/**
 * Print in the console the sum of each elements.
 * @param {number[]} table
 */
export function sumOfTable(table) {
    let sum = table.reduce((acc, value) => acc + value, 0);
    console.log(sum);
}

/**
 * Print only even number of an array.
 * @param {number[]} table
 */
export function evenNumberOfTable(table) {
    let evenNumbers = table.filter(function (number) {
        return number % 2 === 0
      })
      console.log(evenNumbers);
}

/**
 * Print index of first wanted element in table, print an error message if it's not in the table
 * @param {number[]} table
 * @param {number} wanted
 */
export function indexOfWantedInTable(table, wanted) {
    let index = table.indexOf(wanted);
    if (index !== -1) {
        console.log(index);
    } else {
        console.error("it's not in the table");
    }
}

/**
 * Print each elements that was greater than a limit
 * @param {number[]} table
 * @param {number} limit
 */
export function greaterThanLimitInTable(table, limit) {
    const resultTable = table.reduce((acc, item) => {
        if (item > limit) {
            acc.push(item);
        }
        return acc;
    }, [])
    console.log(resultTable);
}

/**
 * Print cumulative sum of table
 * @param {number[]} table
 */
export function cumulativeSumOfTable(table) {
    let cumulSum = 0;
    for (let index = 0; index < table.length; index++) {
        const element = table[index];
        cumulSum = cumulSum + parseFloat(element);
        console.log(cumulSum);
    }
}

/**
 * Print the minimum value in the table.
 * @param {number[]} table
 */
export function printMinValue(table) {
    const min = table.reduce((acc, num) => Math.min(acc, num))
    console.log(min);
}

/**
 * Print the maximum value in the table.
 * @param {number[]} table
 */
export function printMaxValue(table) {
    const max = table.reduce((acc, num) => Math.max(acc, num))
    console.log(max);
}
