// 1. Напишіть рекурсивну функцію, яка обчислює факторіал заданого числа. Факторіал числа n позначається як n!
// і визначається як добуток усіх додатних цілих чисел від 1 до n.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(6));

// 2. Числа Фібоначчі (використати рекурсію)
// Напишіть рекурсивну функцію, яка повертає n-те число Фібоначчі.
// Ряд Фібоначчі визначається наступним чином: перші два числа дорівнюють 0 і 1,
// а кожне наступне число — це сума двох попередніх.

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(7));

// 3. Сума цифр числа (використати рекурсію)
// Напишіть рекурсивну функцію, яка повертає суму всіх цифр заданого числа.
// Якщо число від'ємне, функція повинна обробляти його як додатнє.

function sumDigits(number) {
  number = Math.abs(number);

  if (number < 10) {
    return number;
  }

  return (number % 10) + sumDigits(Math.floor(number / 10));
}
console.log(sumDigits(235));

// 4. Створити об'єкт project. У нього є назва, наприклад, Facebook.
// У нього є developer, у якого є ім'я, прізвище та address, а в address є країна та місто.
// За допомогою деструктуризації витягти країну та місто.

let project = {
  name: "Facebook",
  developer: {
    firstName: "Mark",
    lastName: "Zuckerberg",
    address: {
      country: "USA",
      city: "Palo Alto",
    },
  },
};

let {
  developer: {
    address: { country, city },
  },
} = project;

console.log(country);
console.log(city);

// 5. Є дані в такому вигляді:
// `Ivan;Ivanov;1990;ivanov@gmail.com`
// Витягти пошту та рік народження за допомогою деструктуризації.

let dataString = "Ivan;Ivanov;1990;ivanov@gmail.com";
let arr = dataString.split(";");

let [, , year, email] = arr;
console.log(year);

// 6. Створити об'єкт телефон за допомогою функції конструктора, у нього є бренд, модель, ціна, колір.
// Створити три об'єкти телефонів. Наприклад:
// бренд: Samsung,
// модель: x100,
// ціна: 1000 грн,
// колір: червоний.
// Під час перетворення в рядок потрібно відобразити інформацію.

function Phone(brand, model, price, color) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
}

let phone1 = new Phone("Samsung", "x100", 1000, "red");
let phone2 = new Phone("Apple", "iPhone 13", 30000, "white");
let phone3 = new Phone("Xiaomi", "Redmi", 8000, "black");

Phone.prototype.toString = function () {
  return `brand: ${this.brand}, model: ${this.model}, price: ${this.price} UAH, color: ${this.color}`;
};

console.log(phone1.toString());

// 7. Створити функцію, яка приймає будь-яку кількість чисел і рахує середнє арифметичне та повертає його як результат.
// Викликати цю функцію з трьома аргументами і з масивом, у якому три значення.
function calculateAverage(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

let averageNumbers = calculateAverage(10, 20, 30);
console.log(averageNumbers);

let numbersArray = [10, 20, 30];
let averageArray = calculateAverage(...numbersArray);
console.log(averageArray);

// 8. Є масив об'єктів User. У них є ім'я та прізвище.
// Створити новий масив користувачів на основі старого,
// додавши при цьому до кожного об'єкта властивість `isSelected: false`.

let User = [
  { name: "Tana", surname: "Skovyra" },
  { name: "Evan", surname: "Evanov" },
  { name: "Petro", surname: "Petrov" },
];

let updatedUser = User.map(function (user) {
  return {
    ...user,
    isSelected: false,
  };
});

console.log(updatedUser);
