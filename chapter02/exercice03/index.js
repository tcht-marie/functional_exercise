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
  // new Set crée un ensemble qui stocke mes valeurs uniques de table
  // const unique = new Set(table);
  // avec les ..., crée nouveau tableau avec les valeurs récupérées de Set
  const unique = [...new Set(table)];
  // je crée un nouveau tableau en récupérant que mes valeurs uniques récupérées par Set
  // const uniquePrint = Array.from(unique);
  console.log(uniquePrint);
}


/**
 * Check if the table is sorted in ascending order.
 * @param {number[]} table
 */
export function isTableSorted(table) {
  const result = table.reduce((acc, currentValue, currentIndex, myTable) => {
    // si mon acc n'est plus true, je renvoie false (et ça arrête sa boucle)
    if (acc !== true) {
      return false;
    }
    // si ma valeur actuelle est supérieure à l'index suivant du tableau, je renvoie false (donc tableau non trié dans l'ordre croissant)
    if (currentValue > myTable[currentIndex + 1]) {
      return false;
    } else {
      return true;
    }
    // j'instance mon acc à true au départ
  }, true);
  console.log(result);
}
