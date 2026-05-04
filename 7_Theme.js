// 1. Есть класс Song. Выведите на печать автора песни.

    class Song {
        constructor(name, author) {
            this._name = name;
            this._author = author;
        }

        get author() {
            return this._author;
        }

        set author(writer) {
            this._author = writer;
        }
    }

//////////РЕШЕНИЕ////////
    let pesnya = new Song("Beautiful", "Ed Sheeran"); // сщздали переменную с name и author для объекта

console.log(pesnya.author); // обратились по ключу объекта к значению

///////////////////////////////////////////////////////////////////////////////////////////////////

// 2
// Определите класс Shape. 
//     - Он имеет три свойства: name, sides, и sideLength. 
//     - Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, 
//         например квадрат или равносторонний треугольник.
//     - Добавьте конструктор в этот класс. 
//     - Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
//     - Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр 
//         (длину внешнего края фигуры) и записывает результат в консоль.
//     - Создайте новый экземпляр класса Shape с именем square. 
//     - Дайте name ему square, sides = 4 и sideLength = 5​
//     - Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, 
//         записывает ли он результаты вычислений в консоль браузера, как ожидалось.
//     - Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
//     - Вызовите triangle.calcPerimeter(), чтобы убедиться, что все работает.

////////////////////

class Shape {                                 // объявляем класс
    constructor(name, sides, sideLength) { // принимаем параметры в свойства объекта, сохраняем ихх через this.
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {                                   //  создание метода calc для расчёта периметра фигур
        let perimeter = this.sides * this.sideLength; //расчёт периметра
        console.log(`${this.name} perimeter: ${perimeter}`);
    }
}

let square = new Shape("square", 4, 5);  // создаём объект квадрат: 4 стороны по 5
square.calcPerimeter(); // расчёт для квадрата периметра по методу кальк

let triangle = new Shape("triangle", 3, 3);  // треугольник: 3 стороны по 3
triangle.calcPerimeter(); // применяем метод кальк с расчётом для параметров треугольника

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. 
// Создайте класс "Employee", представляющий работника. У работника должны быть следующие свойства:
    // 1. "name" - строка, представляющая имя работника.
    // 2. "age" - число, представляющее возраст работника.
    // 3. "position" - строка, представляющая должность работника.
    // 4. "salary" - число, представляющее зарплату работника.

    // Требования:
    // 1. Создайте конструктор класса "Employee", который принимает аргументы 
    //     "name", "age", "position", "salary" и инициализирует соответствующие свойства объекта.
    // 2. Создайте геттеры и сеттеры для свойств "age", "position" и "salary".
    // 3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать 
    //     новые значения свойств.

class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this._age = age;
        this._position = position;
        this._salary = salary;
    }

    get age() { // Геттеры
        return this._age;
    }

    get position() {
        return this._position;
    }

    get salary() {
        return this._salary;
    }

    set age(value) {   // Сеттеры
        this._age = value;
    }

    set position(value) {
        this._position = value;
    }

    set salary(value) {
        this._salary = value;
    }

    
}

    let rabotnik = new Employee("Volinski S", 18, "manager", 600); // сщздали переменную с name и author для объекта

console.log(rabotnik.salary); // провенрила что выводит по ключу


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4.
//  Создайте класс Person со следующими свойствами:
    // a. Конструктор который принимает 4 аргумента: 
    //     - First Name (по умолчанию значение "John") 
    //     - Last Name (по умолчанию значение "Doe")
    //     - Age (по умолчанию значение 0) 
    //     - Gender (по умолчанию значение "Male"). 
            
    // b. Метод sayFullName без аргументов и возвращает полное имя человека
    // c. Статический метод greetExtraTerrestrials который принимает один аргумент, raceName 
    //     и возвращает "Welcome to Planet Earth <raceName>". 
        
    //     Пример: если значение raceName "Martians", результат должен быть 
    //     "Welcome to Planet Earth Martians"

class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    // Метод, возвращающий полное имя
    sayFullName() {
        return '${this.firstName} ${this.lastName}';
    }

    // Статический метод
    static greetExtraTerrestrials(raceName) {
        return 'Welcome to Planet Earth" ${raceName}';
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// 5. 
// Переделайте креативное задание из урока 7 в класс. Потом, используя класс, сделайте те же задания:
    // a. Выведите в console названия всех книг.
    // b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
    // c. Отсортируйте библиотеку по году выпуска книг

    
let library = [
    
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

class Book { // создаём класс из библиотеки
    constructor({ isbn, name, author, year, genre, pages, popularity, firstLine }) {
        this.isbn = isbn;
        this.name = name;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.pages = pages;
        this.popularity = popularity;
        this.firstLine = firstLine;
    }
}

let books = library.map(book => new Book(book));

console.log("Все книги:");  // a. Вывести названия всех книг
books.forEach(book => console.log(book.name));

// b. Самая популярная книга каждого автора
function mostPopularByAuthor(author) {
    let authorBooks = books.filter(b => b.author === author);
    return authorBooks.reduce((max, b) =>
        b.popularity > max.popularity ? b : max
    );
}

console.log("Самая популярная книга Стивена Кинга:", mostPopularByAuthor("Stephen King").name);
console.log("Самая популярная книга Марка Твена:", mostPopularByAuthor("Mark Twain").name);
console.log("Самая популярная книга Александра Пушкина:", mostPopularByAuthor("Alexander Pushkin").name);

let sortedByYear = [...books].sort((a, b) => a.year - b.year);  // c. Сортировка по году выпуска

console.log("Библиотека, отсортированная по году:");
sortedByYear.forEach(book => console.log(`${book.year} - ${book.name}`));


////////////////////////////////////////////////////////////////////////////////////////////////////////

