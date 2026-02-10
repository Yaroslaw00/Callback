// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// // Функція countItems тут
// const countItems = (array, condition) => {
//   let count = 0;
//   for (const element of array) {
//     if (condition(element)) {
//       count++;
//     }
//   }
//   return count;
// };
// // Умови для перевірки:
// const isEven = (num) => num % 2 === 0;
// const isLarge = (num) => num > 10;
// const isShort = (word) => word.length <= 3;

// // Тестування
// console.log("Парних чисел:", countItems(numbers, isEven));
// console.log("Чисел більше 10:", countItems(numbers, isLarge));
// console.log("Коротких слів:", countItems(words, isShort));

const calculate = (a, b, operation) => {
  return operation(a, b);
};

// Стрілкові функції
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    console.log("Error");
    return null;
  }
  return a / b;
};

// Тестування
console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide)); // 2
console.log(calculate(10, 0, divide)); // Error + null

// Основна функція
function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
}

// Приклад колбеку 1: просте повідомлення
function simpleMessage(i) {
  return `Повідомлення номер ${i + 1}`;
}

// Приклад колбеку 2: з емодзі
function emojiMessage(i) {
  return `🎉 Ітерація ${i + 1}! 🎉`;
}

// Приклад колбеку 3: повідомлення з умовою
function conditionalMessage(i) {
  if (i % 2 === 0) {
    return `Парна ітерація: ${i}`;
  } else {
    return `Непарна ітерація: ${i}`;
  }
}

// Тести
console.log("=== Просте повідомлення ===");
repeatMessage(5, simpleMessage);

console.log("\n=== Повідомлення з емодзі ===");
repeatMessage(3, emojiMessage);

console.log("\n=== Повідомлення з умовою ===");
repeatMessage(6, conditionalMessage);

// const movies = [
//   "Аватар",
//   "Титанік",
//   "Гра престолів",
//   "Темний лицар",
//   "Форест Гамп",
//   "Інцепція",
// ];

// function processMovies(movies, action) {
//   for (let index = 0; index < movies.length; index++) {
//     const movie = movies[index];
//     action(movie, index);
//   }
// }

// function watchMovie(movie, index) {
//   console.log(`Користувач дивиться ${movie} під індексом: ${index}`);
// }

// function likeMovie(movie, index) {
//   console.log(`Користувач лайкнув ${movie} з індексом: ${index}`);
// }

// processMovies(movies, watchMovie);
// processMovies(movies, likeMovie);
