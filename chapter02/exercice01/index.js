/**
 * Print in the console each elements of the table.
 * @param {number[]} table
 */
export function printTable(table) {
    for (let index = 0; index < table.length; index++) {
        const element = table[index];
        console.log(element);
    }
}

/**
 * Print in the console each elements of the table in reverse order.
 * @param {number[]} table
 */
export function printTableInverted(table) {
    let revTable = table.reverse();
    for (let index = 0; index < table.length; index++) {
        const element = revTable[index];
        console.log(element);
    }
}

/**
 * Print in the console the sum of each elements.
 * @param {number[]} table
 */
export function sumOfTable(table) {
    let sum = table.reduce((acc, value) => acc + value, 0);
    console.log(sum);
}
