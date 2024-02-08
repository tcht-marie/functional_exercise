export function sum(a, b) {
    return a + b;
}

export function isGreaterThan(input, comp) {
    return input > comp;
}

export function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}
