/**
 * Print the number of occurrences of a wanted element in the table.
 * @param {number[]} table
 * @param {number} wanted
 */
export function countOccurrencesInTable(table, wanted) {
  let count = 0;
  for (let i = 0; i < table.length; i++) {
    if (table[i] === wanted) {
      count++;
    }
  }
  console.log(count);
}

/**
 * Print only unique elements of the table.
 * @param {number[]} table
 */
export function printUniqueElements(table) {
}

/**
 * Check if the table is sorted in ascending order.
 * @param {number[]} table
 */
export function isTableSorted(table) {
}
