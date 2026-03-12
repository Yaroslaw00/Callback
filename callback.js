// const array = [
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
// ];

// const filterArr = (array, callback) => {
//   return callback(array);
// };

// const filterOdd = (array) => {
//   const filter = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//       filter.push(array[i]);
//     }
//   }
//   return filter;
// };
// const result = filterArr(array, filterOdd);
// console.log(result);

const wallet = {
  owner: "1",
  currency: "ERO",
  amount: 100000,

  minusMoney(money) {
    if (wallet.amount < money) {
      console.error("помилка");
      return;
    }

    wallet.amount -= money;
    alert(`Баланс гаманця:${wallet.amount}`);
  },
  addMoney(sum) {
    wallet.amount += sum;
    alert(`Баланс гаманця:${wallet.amount}`);
  },
};
const wq = confirm("поповнити гаманець");
if (wq) {
  const er = Number(prompt("cкількі"));
  wallet.addMoney(er);
  console.log(wallet);
}
// wallet.addMoney
console.log(wq);

const qaz = confirm("зняти кошти");
if (qaz) {
  const question = prompt("скільки коштів хочете зняти?");
  wallet.minusMoney(Number(question));
}
