// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
const student = {
  name: "",
  branch: "",
  avrScore: null,
  mislectures: null,
  showinfo: function (avrScore, mislectures) {
    this.avrScore = avrScore;
    this.mislectures = mislectures;
    alert(
      "Студент: " +
        this.name +
        ". Спеціальніть: " +
        this.branch +
        ". Середній бал: " +
        this.avrScore +
        ". Кількість пропущенних заннять: " +
        this.mislectures
    );
  },
};
// student.showinfo();

const Ivan = {
  name: "Іван Іванов",
  branch: "Електротехніка",
};

document.querySelector("#ivan").addEventListener("click", function () {
  student.showinfo.call(Ivan, 71, 20);
});

const Nastya = {
  name: "Анастасія Велика",
  branch: "Дизайнер",
};
document.querySelector("#nastya").addEventListener("click", function () {
  student.showinfo.bind(Nastya, 83, 5)();
});

const Yarik = {
  name: "Ярослав Мудрий",
  branch: "Державне Управління",
};
document.querySelector("#yarik").addEventListener("click", function () {
  student.showinfo.apply(Yarik, [91, 1]);
});

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке
const htmltext = document.querySelector("#html");
htmltext.addEventListener("click", () => {
  alert(
    "HTML (от английского HyperText Markup Language) — это язык гипертекстовой разметки текста. Он нужен, чтобы размещать на веб-странице элементы: текст, картинки, таблицы и видео."
  );
});
const csstext = document.querySelector("#css");
csstext.addEventListener("click", () => {
  alert(
    " По сути — язык, который отвечает за описание внешнего вида HTML-документа. Подавляющее большинство современных веб-сайтов работают на основе связки HTML+CSS."
  );
});
// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4
function shop(productName, pricePerKg, quantity) {
  const totalPrice = pricePerKg * quantity;
  return `${productName}: ${totalPrice} грн`;
}

console.log(shop("banana", 30, 4.5));
console.log(shop("cherry", 58, 1.3));
console.log(shop("orange", 89, 3.4));
