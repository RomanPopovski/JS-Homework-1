// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

function checkAge(age) {
  return age > 18 ? true : confirm("Батьки дозволили?");
}

const numRef = document.querySelector('input[name="task1"]');
const buttonRef = document.querySelector('button[name="btn-tsk1"]');

buttonRef.addEventListener("click", () => {
  //   let age = Number(numRef.value);
  let age = numRef.value;
  console.log(checkAge(age));
});
// Варіант запису 2

// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }

// ---2---

//     Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b

function min(a, b) {
  return a < b
    ? alert(`Меньшим з двох чисед є число А, воно дорівнює: ${a}`)
    : alert(`Меньшим з двох чисед є число B, воно дорівнює: ${b}`);
}

const AnumRef = document.querySelector('input[name="A"]');
const BnumRef = document.querySelector('input[name="B"]');
const checkbuttonRef = document.querySelector('button[name="btn-tsk2"]');

checkbuttonRef.addEventListener("click", () => {
  let a = Number(AnumRef.value);
  let b = Number(BnumRef.value);
  min(a, b);
});

// --3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

const startbuttonRef = document.querySelector('button[name="btn-tsk3"]');

startbuttonRef.addEventListener("click", () => {
  ask(
    "Ви згодні?",
    function () {
      alert("Ви погодились.");
    },
    function () {
      alert("Ви скасували виконання.");
    }
  );
});
