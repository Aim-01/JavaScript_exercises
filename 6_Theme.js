// 6. Тема: объекты

//1. Создайте объект cars, где будут 3-4 разные машины с их названиями, моделями, годом выпуска и цветом.


// const cars = {
//     car1: {
//         name: "Toyota",
//         model: "Corolla",
//         year: 2020,
//         color: "Silver"
//     },
//     car2: {
//         name: "BMW",
//         model: "X5",
//         year: 2018,
//         color: "Black"
//     },
//     car3: {
//         name: "Audi",
//         model: "A4",
//         year: 2021,
//         color: "White"
//     },
//     car4: {
//         name: "Tesla",
//         model: "Model 3",
//         year: 2022,
//         color: "Red"
//     }
// };


///////////////////////////////////////////////////////////////////////////////////////////////////


// 2
// Работа с объектом room. Выполняйте пошагово.
    // а. Создайте объект room и его параметры:
    //     	ключ height со значением 3
    //     	ключ tv со значением samsung
    //     	ключ big со значением true

let room = {
    height: 3,
    tv: "samsung",
    big: true
};


    // b. Выведите в console все параметры объекта room по очереди

console.log("height:", room.height);
console.log("tv:", room.tv);
console.log("big:", room.big);


    // c. Выведите в console тип данных параметра big

console.log("Тип big:", typeof room.big);

    // d. Выведите в console количество символов в строке параметра tv (длину строки)

console.log("Длина строки tv:", room.tv.length);

    // e. Выведите в console результат расчёта: длина строки параметра tv минус 1

console.log("tv.length - 1 =", room.tv.length - 1);

    // f. Поменяйте samsung на все заглавные буквы и выведите в console.

console.log("tv в верхнем регистре:", room.tv.toUpperCase());

    // g. Замените samsung на LG в нашем объекте room

room.tv = "LG";
console.log("tv после замены:", room.tv);

    // h. Добавьте в наш объект room ещё одну пару ключ-значение: 

room.furniture = ["table", "chair", "sofa"];
console.log("furniture:", room.furniture);

    //     ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"

console.log("Элемент chair:", room.furniture[1]);

    // i. выведите chair в console (путем обращения к массиву)

console.log("Элемент chair:", room.furniture[1]);

    // j. Удалите из нашего объекта room параметр big

delete room.big;
console.log("room после удаления big:", room);

/////////////////////////////////////////////////////////////////////////////////////////////

// 3. Создайте функцию, которая принимает следующий объект как параметр:
    // {name: "dog", legs: 4, color: "yellow"}
    // Возвратите строку: "This yellow dog has 4 legs."

function describeAnimal(animal) {
    return "This " + animal.color + " " + animal.name + " has " + animal.legs + " legs.";
}
const obj = {name: "dog", legs: 4, color: "yellow"};
console.log(describeAnimal(obj));

////////////////////////////////////////////////////////////////////////////////////////////////

// 4
//  Что произойдет при выполнении следующего кода и почему?
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (let key in person) {
//     console.log(key);
// }

// ////////// Объявляем объект person с тремя переменными
// Цикл перебирает ключи объека на каждой имтерации (нэйм эйдж сити)
// в консоль выводятся именно ключи, а не значения

///////////////////////////////////////////////////////////////////////////////////////////////


// 5
//  Что будет результатом работы кода и почему?
// const person = {
// name: "John",
// age: 30,
// occupation: "Engineer",
// sayHello: function() {
//   		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }
// };

// person.sayHello();

///// ошибка синтаксиса - отсутствуют обратные кавычки '' в консоли и хэлоу май нэйм из - не взято 
// в кавычки, поэтому не распознаётся как стринга


///////////////////////////////////////////////////////////////////////////////////////////

// 6
// Есть список людей, которые подписались на международную встречу разработчиков.
//  Вопрос: есть ли хоть один разработчик, работающий на JavaScript? Возвратите да или нет. Будьте внимательны.

var developers = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
    { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
    { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
    { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
    { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
    { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
    { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
];

let hasJS = false;
for (let i = 0; i < developers.length; i++) { // Проверка: есть ли хоть один разработчик с языком "Javascript"
    if (developers[i].language === "Javascript") {
        hasJS = true;
        break;
    }
}

console.log("Есть ли разработчик на JavaScript? ->", hasJS);

////////////////////////////////////////////////////////////////////////////////////////////

 
// 7. Задача для сладкоежек. Есть массив десертов. Выведите самый дешевый десерт и самый дорогой десерт.
    const desserts = [
        { name: "Пирожное", price: 65 },
        { name: "Мороженое", price: 35 },
        { name: "Торт Наполеон", price: 250 },
        { name: "Песочное Печенье", price: 50 },
        { name: "Пудинг", price: 80 },
        { name: "Фруктовый Тарт", price: 40 },
        { name: "Желе Земляничное", price: 40 },
        { name: "Вафли Шоколадные", price: 36 },
        { name: "Булочка с Изюмом", price: 28 }
    ];

let cheapest = desserts[0];
let mostExpensive = desserts[0];

for (let i = 1; i < desserts.length; i++) {
    if (desserts[i].price < cheapest.price) {
        cheapest = desserts[i];
    }
    if (desserts[i].price > mostExpensive.price) {
        mostExpensive = desserts[i];
    }
}

console.log("Самый дешевый десерт:", cheapest.name, "-", cheapest.price, "BYN");
console.log("Самый дорогой десерт:", mostExpensive.name, "-", mostExpensive.price, "BYN")


////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Создайте библиотеку книг Стивена Кинга, Марка Твена и Александра Сергеевича. В библиотеке 
// должно быть по 5 книг каждого писателя. Каждая книга должна иметь идентификатор (isbn), имя книги,
//  имя автора, год выпуска, жанр, количество страниц, популярность книги у этого автора (от 1 до 5) и 
// первое предложение/строку.
//     a. Выведите в console названия всех книг.
//     b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
//     c. Отсортируйте библиотеку по году выпуска книг


const library = [
    
    { isbn: "SK001", name: "The Shining", author: "Stephen King", year: 1977, genre: "Horror", pages: 447, popularity: 5, firstLine: "Jack Torrance thought..."},
    { isbn: "SK002", name: "It", author: "Stephen King", year: 1986, genre: "Horror", pages: 1138, popularity: 4, firstLine: "The terror began..."},
    { isbn: "SK003", name: "Misery", author: "Stephen King", year: 1987, genre: "Thriller", pages: 320, popularity: 3, firstLine: "Paul Sheldon..."},
    { isbn: "SK004", name: "Carrie", author: "Stephen King", year: 1974, genre: "Horror", pages: 199, popularity: 2, firstLine: "Carrie White..."},
    { isbn: "SK005", name: "Pet Sematary", author: "Stephen King", year: 1983, genre: "Horror", pages: 374, popularity: 4, firstLine: "Louis Creed..."},
    
    { isbn: "MT001", name: "Adventures of Tom Sawyer", author: "Mark Twain", year: 1876, genre: "Adventure", pages: 274, popularity: 5, firstLine: "Tom!"},
    { isbn: "MT002", name: "Adventures of Huckleberry Finn", author: "Mark Twain", year: 1884, genre: "Adventure", pages: 366, popularity: 4, firstLine: "You don’t know..."},
    { isbn: "MT003", name: "The Prince and the Pauper", author: "Mark Twain", year: 1881, genre: "Historical", pages: 192, popularity: 3, firstLine: "In the ancient city..."},
    { isbn: "MT004", name: "A Connecticut Yankee in King Arthur's Court", author: "Mark Twain", year: 1889, genre: "Satire", pages: 260, popularity: 2, firstLine: "It was in Warwick Castle..."},
    { isbn: "MT005", name: "Life on the Mississippi", author: "Mark Twain", year: 1883, genre: "Memoir", pages: 624, popularity: 4, firstLine: "The Mississippi is..."},
    
    { isbn: "AP001", name: "Евгений Онегин", author: "Alexander Pushkin", year: 1833, genre: "Novel in verse", pages: 224, popularity: 5, firstLine: "Мой дядя самых честных правил..."},
    { isbn: "AP002", name: "Капитанская дочка", author: "Alexander Pushkin", year: 1836, genre: "Historical novel", pages: 192, popularity: 4, firstLine: "Отец мой служил..."},
    { isbn: "AP003", name: "Борис Годунов", author: "Alexander Pushkin", year: 1825, genre: "Drama", pages: 150, popularity: 3, firstLine: "На Красной площади..."},
    { isbn: "AP004", name: "Повести Белкина", author: "Alexander Pushkin", year: 1831, genre: "Short stories", pages: 180, popularity: 2, firstLine: "Вот вам повести..."},
    { isbn: "AP005", name: "Руслан и Людмила", author: "Alexander Pushkin", year: 1820, genre: "Poem", pages: 200, popularity: 4, firstLine: "У лукоморья дуб зелёный..."}
];

// a. Вывести названия всех книг
console.log("Все книги:");
library.forEach(book => console.log(book.name));

// b. Самая популярная книга каждого автора
function mostPopularByAuthor(author) {
    let books = library.filter(b => b.author === author);
    let popular = books.reduce((max, b) => b.popularity > max.popularity ? b : max, books[0]);
    return popular.name;
}

console.log("Самая популярная книга Стивена Кинга:", mostPopularByAuthor("Stephen King"));
console.log("Самая популярная книга Марка Твена:", mostPopularByAuthor("Mark Twain"));
console.log("Самая популярная книга Александра Пушкина:", mostPopularByAuthor("Alexander Pushkin"));

// c. Сортировка по году выпуска
let sortedLibrary = [...library].sort((a, b) => a.year - b.year);
console.log("Библиотека, отсортированная по году:");
sortedLibrary.forEach(book => console.log(`${book.year} - ${book.name}`));