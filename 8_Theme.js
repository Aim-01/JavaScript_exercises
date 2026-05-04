// Тема: ООП

// 1
// Создать класс Машина со свойствами Модель, Цвет и Год выпуска. Создать 
// класс Жигули, который наследует от класса Машина. Класс Жигули имеет 
// свойства Место выпуска и Максимальная скорость. Вывести на печать печать 
// всю информацию о Жигулях.

class Car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
}
 class Zhiguli extends Car {
    constructor(model, color, year, place, maxSpeed) {
        super(model, color, year); // вызываем конструктор Car
        this.place = place;
        this.maxSpeed = maxSpeed;
    }

    showInfo() {
        console.log(`Модель: ${this.model}`);
        console.log(`Цвет: ${this.color}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`Место выпуска: ${this.place}`);
        console.log(`Максимальная скорость: ${this.maxSpeed} км/ч`);
    }
}
let myZhiguli = new Zhiguli(
    "ВАЗ-2101",
    "Жёлтый",
    1975,
    "Черепаха",
    100
);

myZhiguli.showInfo();

/////////////////////////////////////////////////////////////////////////

// 2
// Дополнение к задаче №2 из предыдущего домашнего задания
// Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, 
// вычисляющий площадь квадрата. 
// Настройте конструктор экземпляров объекта Square так, чтобы свойству name 
// автоматически присваивалось значение square, а sides для свойства автоматически 
// устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто 
// предоставить свойство sideLength.
// Создайте экземпляр класса Square, вызываемого square с соответствующими значениями 
// свойств, и вызовите его методы calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.



class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        let perimeter = this.sides * this.sideLength;
        console.log(`${this.name} perimeter: ${perimeter}`);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super("square", 4, sideLength); // вызываем Shape с фиксированными name и sides
    }

    calcArea() {
        let area = this.sideLength ** 2;
        console.log(`${this.name} area: ${area}`);
    }
}

let square = new Square(5);

square.calcPerimeter(); // square perimeter: 20
square.calcArea();      // square area: 25


// 3

// Создать абстрактный класс Human со свойствами Имя, Возраст и Интерес 
// и методом info. Метод Info возвращает все свойства в формате предложения.
//  Вывести на печать печать все свойства для двух людей, Кати и Юры.

class Human { // создаём абстрактный класс Human
    constructor(name, age, interest) {
        if (new.target === Human) {
            throw new Error("Нельзя создавать экземпляры абстрактного класса Human");
        }

        this.name = name;
        this.age = age;
        this.interest = interest;
    }

    info() {
        return '${this.name}, ${this.age} лет, интересуется: ${this.interest}.';
    }
}

class Person extends Human { // класс пёрсон наследует Хьюман
    constructor(name, age, interest) {
        super(name, age, interest);
    }
}

let katya = new Person("Катя", 25, "путешествиями"); // создали людей
let yura = new Person("Юра", 30, "программированием");

console.log(katya.info()); 
console.log(yura.info());

////////////////////////////////////////////////////////////////////////////

//4

//Создать метод getFood, который может принимать аргумент foodType (сухая или 
// консервная). Переписать метод так чтобы он мог также принимать аргументы количество
//  и/или бренд.  Вывести на печать следующие фразы:

// Метод без аргументов: "All dogs love to eat!"
// Метод с foodType: "Shepherd Masha eats dry food."
// Метод с foodType и количеством: "Poodle Demi eats 2 bowls a day of wet food."
// Метод с foodType, количеством и брендом: "Corgi Henry eats 3 bowls a day of dry food by Royаl Canin."

class Dog {
    constructor(breed, name) {
        this.breed = breed;
        this.name = name;
    }

    getFood(foodType, amount, brand) {
    
        if (!foodType && !amount && !brand) {    // Без аргументов
            console.log("All dogs love to eat!");
            return;
        }

        if (foodType && !amount && !brand) {   // Только foodType
            console.log(`${this.breed} ${this.name} eats ${foodType} food.`);
            return;
        }
        
        if (foodType && amount && !brand) { // foodType + количество
            console.log(`${this.breed} ${this.name} eats ${amount} bowls a day of ${foodType} food.`);
            return;
        }

        if (foodType && amount && brand) {  // foodType + количество + бренд
            console.log(`${this.breed} ${this.name} eats ${amount} bowls a day of ${foodType} food by ${brand}.`);
            return;
        }
    }
}

let dog1 = new Dog("Shepherd", "Masha");
let dog2 = new Dog("Poodle", "Demi");
let dog3 = new Dog("Corgi", "Henry");

dog1.getFood(); // 1. Без аргументов

dog1.getFood("dry"); // 2. Только foodType

dog2.getFood("wet", 2); // 3. foodType + количество

dog3.getFood("dry", 3, "Royаl Canin"); // 4. foodType + количество + бренд

////////////////////////////////////////////////////////////////////////////////////////

//  5
// Создать классы пользователя и администратора
// В этом задании мы будем использовать приватные свойства, чтобы скрыть определенные 
// значения и предотвратить прямой доступ к ним. Приватные свойства могут быть доступны 
// только внутри объявления класса.
// Мы обозначаем частную переменную или функцию символом решетки (#).
// Например, если бы у нас был класс Person с номером социального 
// страхования и функцией для расчета их налоговой категории, мы бы не 
// обязательно хотели, чтобы эта информация была общедоступной. Поэтому мы можем сделать
//  эти поля приватными, как в примере ниже:

// class Person {
//     #socialSecurityNumber;

//     #calculateTaxBracket() {
//     }
// }

// Ваша задача:
// Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User имеет 
// закрытую функцию updatePassword() и публичную функцию resetPassword(). Класс Admin 
// имеет публичную функцию deleteUser().

// Параметры для класса User
//     username: String
//     (private) password: String

// Параметры для класса Admin
//     username: String
//     (private) password: String

// Свойства класса Admin
// Следующие свойства также должны быть добавлены в класс Admin. Они не являются параметрами.
//     isAdmin = true;

// Функции класса User
// resetPassword(newPassword)
// Вызывает закрытую функцию updatePassword с новым паролем. 

// updatePassword(newPassword)
// Устанавливает пароль пользователя на newPassword. Это частная функция.

// Функции класса Admin
// deleteUser(userToDelete): Принимает строку userToDelete и возвращает строковое сообщение: "Пользователь [userToDelete] был удален."

// Результат
// [testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

// Ограничения
// Пароль должен быть частной переменной
// updatePassword должен быть частной функцией
// Вы должны использовать ключевое слово extends для создания связи между пользователем и администратором.


/////////////////////////////


class User {
    #password;               // приватная переменная
    #updatePassword(newPass) // приватный метод
    {
        this.#password = newPass;
    }

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    resetPassword(newPassword) {
        this.#updatePassword(newPassword);
        return 'Пароль пользователя ${this.username} был обновлён.';
    }
}

class Admin extends User {
    constructor(username, password) {
        super(username, password);
        this.isAdmin = true;
    }

    deleteUser(userToDelete) {
        return 'Пользователь ${userToDelete} был удален.';
    }
}

let testUser = new User("wewewe", "12345");
let testAdmin = new Admin("weweAdmin", "adminPass");

console.log(testUser.resetPassword("newPass123")); // Пароль пользователя wewewe был обновлён.
console.log(testAdmin.deleteUser("oldUser")); // Пользователь oldUser был удален.
console.log(testAdmin.isAdmin); // true

let result = [testUser, testAdmin];
console.log(result);


//////////////////////////////////////////////////////////////////////////

// 6
// Креативное задание. Создать структуру школы.
// В школе есть люди, студенты, учителя, декан, директор школы. 
// У каждого свои свойства, некоторые повторяющиеся, как например имя, возраст, пол, можно больше.
// Но так же есть и не повторяющиеся, например, 
// студенты - номер курса (1-ый год, 2-й год, и т.д.)
// студенты - специальность (major)
// студенты - средний бал (gpa, от 1 до 4, 1 - студент плохо учиться, 4 - очень хорошо)
// учителя - имеют зарплату
// декан - зарплата в 2 раза больше чем у учителей, плюс годовой бонус в размере 1 зарплаты
// учитель и декан - часы работы
// директор школы - зарплата в 1.5 раза больше чем у декана, плюс годовой бонус в размере 2х зарплат
// Использовать 4 принципа ООП
// Вывести на печать имена и позицию каждого человека
// Вывести на печать зарплату директора школы
// Вывести на печать имя студента valedictorian (лучший студент школы, студент с лучшим gpa).


class Human { // абстрактный класс хьюман создали
    constructor(name, age, gender) {
        if (new.target === Human) {
            throw new Error("Нельзя создавать экземпляр абстрактного класса Human");
        }

        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getPosition() {
        return "Human";
    }

    info() {
        return '${this.name} — ${this.getPosition()}';
    }
}

class Student extends Human { // класс Студенты
    constructor(name, age, gender, year, major, gpa) {
        super(name, age, gender);
        this.year = year;
        this.major = major;
        this.gpa = gpa;
    }

    getPosition() {
        return "Student";
    }
}

class Teacher extends Human { // учителя
    #salary;

    constructor(name, age, gender, salary, hours) {
        super(name, age, gender);
        this.#salary = salary;
        this.hours = hours;
    }

    get salary() {
        return this.#salary;
    }

    getPosition() {
        return "Teacher";
    }
}

class Dean extends Teacher {
    constructor(name, age, gender, salary, hours) {
        super(name, age, gender, salary * 2, hours);
        this.bonus = this.salary; // годовой бонус = 1 зарплата
    }

    getPosition() {
        return "Dean";
    }
}

class Director extends Human {
    #salary;

    constructor(name, age, gender, deanSalary) {
        super(name, age, gender);
        this.#salary = deanSalary * 1.5;
        this.bonus = this.#salary * 2;
    }

    get salary() {
        return this.#salary;
    }

    getPosition() {
        return "Director";
    }
}

let people = [
    new Student("Катя", 19, "Female", 1, "Computer Science", 3.9),
    new Student("Юра", 20, "Male", 2, "Mathematics", 3.5),
    new Student("Олег", 21, "Male", 3, "Physics", 4.0), // лучший студент

    new Teacher("Марина Петровна", 45, "Female", 2000, 40),
    new Teacher("Иван Сергеевич", 50, "Male", 2200, 35),

    new Dean("Александр Викторович", 55, "Male", 2200, 30),

    new Director("Елена Николаевна", 60, "Female", 2200 * 2) // зарплата декана ×2
];

console.log("Все люди в школе:");
people.forEach(p => console.log(p.info()));

let director = people.find(p => p instanceof Director);
console.log("Зарплата директора:", director.salary);
console.log("Годовой бонус директора:", director.bonus);

let students = people.filter(p => p instanceof Student);
let valedictorian = students.reduce((best, s) => s.gpa > best.gpa ? s : best);

console.log("Valedictorian:", valedictorian.name);
