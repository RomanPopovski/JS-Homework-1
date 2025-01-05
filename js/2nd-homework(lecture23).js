// -- 1 --

// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let res1 = fruts.map((item) => item.name);
// console.log(res1);

// -- 2 --

//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let res2 = 2; res2 < 10; res2++) {
//   if (res2 % 2 === 1) continue;
//   console.log(res2);
// }

// -- 3 --

//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let res3 = 0;
// while (res3 < 5) {
//   res3++;
//   console.log(`Результат ${res3}!`);
// }
// -- 4 --

//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let res4;

// while (true) {
//   res4 = prompt("Введіть число більше за 100:");
//   console.log(typeof res4);
//   let number = Number(res4);
//   console.log(typeof number);

//   if (!number) {
//     alert("Ввід скасовано або введено рядок який є порожнім/містить літери.Спробуйте ще раз.");
//     break;
//   }

//   if (number > 100) {
//     alert("Дякуємо! Ви ввели число більше за 100.");
//     break;
//   }
//   alert("Число повинно бути більше за 100. Спробуйте ще раз.");
// }

// -- 5 --
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let age_g = girls.map((item) => item.age);
// console.log(age_g);

// let res5 = age_g.reduce((summ, item) => summ + item) / girls.length;

// console.log(res5);
