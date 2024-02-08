export function addWithCallback(a, b, callback) {
  setTimeout(() => {
    var sum = a + b;
    callback(sum);
  }, 1000);
}

export function filterArrayWithCallback(array, filterFunc, callback) {
  setTimeout(() => {
    callback(filterFunc(array));
  }, 1000);
}

export async function asyncAdd(a, b) {
  setTimeout(() => {

  }, 1000);
}

export async function filterArrayAsync(array, filterFunc) {
  setTimeout(() => {

  }, 1000);
}
