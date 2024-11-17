// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// const num = prompt("Введіть число");
// if (num > 0) {
//   console.log(true);
// } else if (num < 0) {
//   console.log(false);
// } else {
//   console.log("Про це не говорилось в умові задачі :)");
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test' 'qwerty' 'true'

// const task2 = prompt("Напишіть слово 'Тест' англійскою мовою").toLowerCase();
// if (task2 === "test") {
//   console.log(true);
//   alert("Ваша відповідь правильна");
// } else if (task2 !== "test") {
//   console.log(false);
//   alert("Ваша відповідь НЕ правильна");
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// const tsk3 = prompt("Введіть число");
// let value = Number(tsk3);

// if (tsk3 > 10) {
//   res = value - 5;
//   alert(`Результат операції ${res}`);
// } else if (tsk3 < 10) {
//   res = value + 5;
//   alert(`Результат операції ${res}`);
// } else {
//   alert("Про це не говорилось в умові задачі :)");
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const tsk4 = prompt("Введіть порядковий номер місяця, а ми скажимо як він називается ^^ ");
// let MonthnName;

// switch (tsk4) {
//   case "1":
//     MonthnName = "Січень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "2":
//     MonthnName = "Лютий";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "3":
//     MonthnName = "Березень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "4":
//     MonthnName = "Квітень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "5":
//     MonthnName = "Травень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "6":
//     MonthnName = "Червень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "7":
//     MonthnName = "Липень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "8":
//     MonthnName = "Серпень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "9":
//     MonthnName = "Вересень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "10":
//     MonthnName = "Жовтень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "11":
//     MonthnName = "Листопад";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   case "12":
//     MonthnName = "Грудень";
//     alert(` Місяць № ${tsk4} українською мовою називається "${MonthnName}"`);
//     break;
//   default:
//     alert(" Оновіть сторінку та введіть число від 1 до 12");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// Привітка : все що функція списано із інтернету, як зробити сам - не зрозумів :(

const digit = prompt("Введіть трьхзначне число");
if (digit >= 100 && digit <= 999) {
  function sumOfDigit(num) {
    let numStr = num.toString();
    let sum = 0;

    for (let digit of numStr) {
      sum += parseInt(digit);
    }

    return sum;
  }

  alert(`Результат обчислень дорівнює "${sumOfDigit(digit)}"`);
} else {
  alert("Число має бути від 100 до 999. Оновіть сторінку та спробуйте ще раз");
}
