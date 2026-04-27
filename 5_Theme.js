// 5  Тема: функции JS.

// 1
//Как объявить функцию в JavaScript и почему?
// Объявление функции через function НАЗВАНИЕ ФУНКЦИИ (переменное значение){действие, которое выполняется со значением}


// 2
//Какой результат работы кода и почему? Выберите один ответ.
// ФУНКЦИЯ checkAnswer() {
//       console.log(“Hello World”)
// };


// переменное значение в функцию не введено - значит получится underfined = "Hello, stranger!"



// 3
//  Что вернет вызов функции и почему?

// function FindLongestString(arr) {
// 	let longest = "";

// 	for (let i = 0; i < arr.length; i++) { // работа с массивом вложенным
// 		if (Array.isArray(arr[i])) {
// 			const nestedLongest = FindLongestString(arr[i]);

// 			if (nestedLongest.length > longest.length) { // сравнение по поледнему сравниваемому элементу идёт
// 				longest = nestedLongest;
// 			}
// 		} else if (typeof arr[i] === "string") { // работа со стрингой (пример банана)
// 			if (arr[i].length > longest.length) {
// 				longest = arr[i];
// 			}
// 		}
// 	}

// 	return longest;
// }

// console.log(FindLongestString(['apple', 'strawberry', ['banana', 'mandarin'], 'grape', ['orange', 'pear']])); // strawberry

// самый длинный элемент массива, включая вложенные массивы (анализируются по словам), 'strawberry'



// 4
// О стрелочных функциях JavaScript:

// // Пример стрелочной функции
// const add = (a, b) => a + b;
// console.log(add(2, 3));    // Выведет 5


// Вопрос: Что такое стрелочная функция в JavaScript и почему?
// более короткая запись кода, где убрали фанкшн и скобки действия заменили на стрелку =>
// Название получила из-за стрелки



// 5 
//Напишите функцию, которая выводит в консоль индивидуальное приветствие с именем, которое вы передаете в функцию

function privetstvie(imya){
console.log("Привет, " + imya);
}
privetstvie("НастяЭ" + "!");



// 6
// Напишите функцию с калькулятором (можно использовать код с предыдущей домашней работы), 
// в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.

// Пример:  
// function calculate(a, b, operator)
// {
//    //code
// }
////////////


function calculiator(a, b, operator){

if (operator == "+") {
     console.log(a+b);
} 
else if (operator == "-") {
     console.log(a-b);
} 
else if (operator == "*") {
     console.log(a*b);
} 
else if (operator == "/") {
     console.log(a/b);
} 

else {
     console.log("Недопустимый оператор!");
}

console.log("=" + a + operator + b);
}
calculiator(6, 2, "+");



//////////////////////////////////////////////////////////////////////////

// 7. Создать функцию getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

//     "Hello world!"
//     "!Hola mundo!"
//     "Hallo wereld!"
//     "Пpивeт мир!"

// Создать декларируемую функцию (function Declaration), функцию выражение (function Expression) и стрелочную функцию.

function getGreetingsDeclaration() { //декларируемаЯ функция
    return [
        "Hello world!",
        "!Hola mundo!",
        "Hallo wereld!",
        "Привет мир!"
    ];
}

console.log(getGreetingsDeclaration());

const Expresson1 = function () { // функция выражение
    return [
        "Hello world!",
        "!Hola mundo!",
        "Hallo wereld!",
        "Привет мир!"
    ];
}

console.log(Expresson1());

let strelochnaya1 = () => {  // стрелочная
    return [
        "Hello world!",
        "!Hola mundo!",
        "Hallo wereld!",
        "Привет мир!"
    ]; 
};
    console.log(strelochnaya1());


////////////////////////////////////////////////////////////////////////////////////////////

// 8
// Какой метод был использован в данном коде (на месте *****), чтобы перевести метры в футы и почему?  

// const distanceInMeters = [2, 5, 13, 44, 100];

// const distanceInFeet = distanceInMeters.******(function(i) {
//      return Math.round(i * 3.28084);
// });

// console.log(distanceInFeet);    // Вывод: [ 7, 16, 43, 144, 328 ]

// Использовали метод .map
// он создаёт новый массив, применяя функцию к каждому элементу исходного массива. 
// Внутри массива каждый элемент умножается на 3.28084
// Math.round() - округляет до ближайшего целого числа

//////////////////////////////////////////////////////////////////////////////////////////////////

// 9
// Внедрите в свой код с Кофе (из дз 3, задача 11), как минимум 2 функции 
// (на ваше усмотрение) и вызовите их в коде.

let kofe = "latte";   // latte, americano, cappuccino
let size = "small";   // small, medium, large
function getRecipe(kofe) {
    if (kofe === "latte") {
        return "Эспрессо + молоко + пенка";
    } else if (kofe === "americano") {
        return "Эспрессо + вода";
    } else if (kofe === "cappuccino") {
        return "Эспрессо + много пены";
    } else {
        return "Неизвестный кофе";
    }
}

function getPrice(size) { // Функция для получения цены по размеру
    if (size === "small") {
        return 20;
    } else if (size === "medium") {
        return 30;
    } else if (size === "large") {
        return 40;
    } else {
        return 0;
    }
}

let recipe = getRecipe(kofe);   // вызов первой функции
let price = getPrice(size);     // вызов второй функции

console.log("Ваш выбор: " + kofe);  // Вывод результата
console.log("Рецепт: " + recipe);
console.log("Размер: " + size);
console.log("Стоимость: " + price + " BYN");


///////////////////////////////////////////////////////////////////////////////////////

// 10. Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции).
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, 
// а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.


function snailClimb(height, day, night) {
    let distance = 0; // сколько уже проползла
    let days = 0;     // счётчик дней


    function climbDay() {     //движение днём
        distance = distance + day;
        days = days + 1;
    }

    function slideNight() {     //движение ночью
        distance = distance - night;
    }

    while (distance < height) {  // Основной цикл
        climbDay(); // день

        if (distance >= height) {
            break; // достигла вершины
        }

        slideNight(); // ночь
    }

    return days;
}
let result = snailClimb(5, 3, 2); // вызываем функцию
console.log("Улитка доползёт за " + result + " дней");

/////////////////////////////////////////////////////////////////////////////////////////////////////

//11. Напишите функцию, которая принимает массив чисел как параметр и возвращает сумму всех
// чисел этого массива. Если элемент массива не число, пропускаем этот элемент.

function sumNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (typeof element === "number" && !isNaN(element)) {  // Проверяем, что элемент — число и не NaN
            sum = sum + element;
        }
    }

    return sum;
}
console.log(sumNumbers([1, 2, 3]));  // 6
console.log(sumNumbers([1, "hello", 4, true, 5])); // 10 (1+4+5)
console.log(sumNumbers([10, NaN, "5", 20])); // 30 (10+20)
console.log(sumNumbers([])); // 0

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//12. Напишите функцию, которая принимает массива строк как параметр и возвращает строки длиннее 5 букв.

function filtLongStr(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        
        if (typeof str === "string" && str.length > 5) {  // Проверяем, что элемент — строка и её длина > 5
            result.push(str);
        }
    }

    return result;
}

console.log(filtLongStr(["apple", "strawberry", "pear", "banana"])); // ["strawberry", "banana"]

console.log(filtLongStr(["hi", "hello", "welcome", "bye"])); // ["welcome"]

console.log(filtLongStr([])); // []

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 13
// https://leetcode.com/problems/filter-elements-from-array/description/?utm_source=chatgpt.com

function filter(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (fn(arr[i], i)) { // вызываем fn с элементом и индексом
            result.push(arr[i]);
        }
    }

    return result;
}

// Example 1
function greaterThan10(n) {
    return n > 10;
}
console.log(filter([0, 10, 20, 30], greaterThan10));  // [20, 30]

// Example 2
function firstIndex(n, i) {
    return i === 0;
}
console.log(filter([1, 2, 3], firstIndex));  // [1]

// Example 3
function plusOne(n) {
    return n + 1; // вернёт truthy для всех кроме -1
}
console.log(filter([-2, -1, 0, 1, 2], plusOne)); // [-2, 0, 1, 2]


////////////////////////////////////////////////////////////////////////////////

// 14
// https://leetcode.com/problems/simplify-path/description/

function simplifyPath(path) {
    const parts = path.split("/");  // Разбиваем путь по слэшам
    const stack = [];  //массивдля хранения корректных директорий
 
    for (let part of parts) {
        if (part === "" || part === ".") { // пустая строка или "." → пропускаем
             continue;
        } else if (part === "..") {
            if (stack.length > 0) { // ".." → шаг назад, удаляем последний элемент
                stack.pop();
            }
        } else {
             stack.push(part);  // любое другое имя (например "home", "foo", "...") → добавляем
        }
    }

    return "/" + stack.join("/");  // Собираем путь обратно
}

console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/home//foo/")); // "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")); // "/home/user/Pictures"
console.log(simplifyPath("/../")); // "/"
console.log(simplifyPath("/.../a/../b/c/../d/./")); // "/.../b/d"





