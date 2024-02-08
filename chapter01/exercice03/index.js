export function reverseString(str) {
    return str.split("").reverse().join("");
}

export function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

export function countVowels(str) {
    return str.match(/[aeiou]/gi).length;
}
