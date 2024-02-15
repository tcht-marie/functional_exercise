/**
 * Print a table sorted ASC using any technique you want
 * @param {number[]} table
 */
export function basicSortTable(table) {
    const sorted = table.sort((index, nextIndex) => index - nextIndex);
    console.log(sorted);
}

/**
 * Print a table sorted ASC using Bubble sort
 * @param {number[]} table
 */
export function bubbleSortTable(table) {
    // je crée une variable swapped
    let swapped;
    //boucle do...while pour itérer jusqu'à ce que tout le tableau soit trié
    do {
        // définition de la variable swapped (bouléenne) à false au début de chaque itération
        swapped = false;
        // boucle for pour comparer les éléments voisins
        for (let index = 0; index < table.length - 1; index++) {
        // si élément courant est supérieur à l'élément suivant, ils sont échangés
        if (table[index] > table[index + 1]) {
            let swap = table[index];
            table[index] = table[index + 1];
            table[index + 1] = swap;
            // swapped passe à true si un élément est échangé (tableau pas encore tout trié)
            swapped = true;
            }
        }
    //
    } while (swapped);
    console.log(table);
};

/**
 * Print a table sorted ASC using insertion sort
 * @param {number[]} table
 */
export function insertionSortTable(table) {
    // déclaration des variables key et changeIndex
    let key;
    let changeIndex;
    for (let index = 0; index < table.length; index++) {
        //stockage de l'index actuel dans la variable key
        key = table[index];
        // stockage de l'index - 1 dans la variable changeIndex
        changeIndex = index -1;
        // pour chaque itération, compare la key à tous les éléments précédents (changeIndex).
        // Si la valeur est plus petite, échange avec les précédents jusqu'à que celui de gauche soit plus petit et celui de droite soit plus grand
        for (changeIndex >= 0; table[changeIndex] > key; changeIndex--) {
            table[changeIndex + 1] = table[changeIndex];
        }
        // Tableau final trié
        table[changeIndex + 1] = key;
    }
    console.log(table);
}

/**
 * Print a table sorted ASC using merge sort
 * @param {number[]} table
 */
function merge(left, right) {
    let table2 = [];
    while ((left.length) && (right.length)) {
        if (left[0] < right[0]) {
            table2.push(left.shift())  
        } else {
            table2.push(right.shift()) 
        }
    return [ ...table2, ...left, ...right ];
    }
}

export function mergeSortTable(table) {

    const half = table.length / 2;
    if(table.length < 2){
        return table;
    }
    const left = table.splice(0, half)
  console.log(merge(mergeSortTable(left),mergeSortTable(table)));
}

// console.log(mergeSortTable());

/**
 * Print a table sorted ASC using quick sort
 * @param {number[]} table
 */
export function quickSortTable(table) {
}
