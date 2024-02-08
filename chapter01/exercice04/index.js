export function addWithCallback(a, b, callback) {
  setTimeout(() => {
    var sum = a + b;
    callback(sum);
  }, 1000);
}

export function filterArrayWithCallback(array, filterFunc, callback) {
  setTimeout(() => {
    callback(array.filter(filterFunc));
  }, 1000);
}

export async function asyncAdd(a, b) {
  setTimeout(() => {
    let promise = new Promise((resolve, reject) => {
      var sum = a + b;
      resolve(sum);
  }, 1000));
  promise.then((value) => {
    asyncAdd(a, b)
  }).catch((error) => {
    console.error('error');
  })
};



export async function filterArrayAsync(array, filterFunc) {
  setTimeout(() => {

  }, 1000);
}
