const array = [
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
];

const filterArr = (array, callback) => {
  return callback(array);
};

const filterOdd = (array) => {
  const filter = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      filter.push(array[i]);
    }
  }
  return filter;
};
const result = filterArr(array, filterOdd);
console.log(result);
