//Темы: строка, методы строки, if-else, switch.

const { Children } = require("react");

// Строки. Установить какие методы строк изменяют начальное значение строки.
// ОТВЕТ: изначальная СТРОКА НЕ МЕНЯЕТСЯ МЕТОДОМ, метод создаёт новое
	
// 	Дана строка: 
let s = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";

// Методы:
//s.charAt(); //или с[0] // -  выводит в терминал по 1ой букве в зависимости от её позиции по номеру, начиная с 0
//s.charAt(s.length -1); // -   буквы с конца стринги при записи "-хх"
//s.substring(1, 15); // -   промежутки из стринги, которые задаются числами (между первой и 15ой)
//s.substr(1, 9); // - устарел и не работает у меня, то же самое что и substring
// s.slice(-3); // -  с конца стринги символы, отрезая левую часть
// s.indexOf('l'); -  номер индекса по первому совпадению поиска с начала строки
// s.lastIndexOf('l'); -  номер индекса по последнему совпадению поиска с начала строки
// s.split(“of”); - создаёт новый массив [], разделяет по "of"(можно по запятой или по точке), оф удаляет
// // s.replace(“l”, “L”); - замена первого совпадения внутри переменной стринги с 'l' на 'L'
// s.replaceAll(“l”, “L”); - замена всех совпадений внутри переменной стринги с 'l' на 'L'
// s.toUpperCase(); - всё в капс в стринге
// s.toLowerCase(); - всё в строчные в стринге

//console.log(s.toLowerCase());

//////////////////////////////////////////////////////////////////////////////////////////

// 3. В этом коде ошибки. Найдите и покажите какие и почините.


// var monthNumber = 1;
// var result3;

// switch (monthNumber) {
//      case 1:
//           result3 = "January";
//           console.log(result3);
//           break;
//      case 2:
//           result3 = "February";
//           console.log(result3);
//           break;
//      case 3:
//           result3 = "March";
//           console.log(result3);
//           break;
//      case 4:
//           result3 = "April";
//           console.log(result3);
//           break;
//      case 5:
//           result3 = "May";
//           console.log(result3);
//           break;
//      case 6:
//           result3 = "June";
//           console.log(result3);
//           break
// }

///////////////////////////////////////////////////////////////////

// 4. В этом коде что-то не так. Найдите ошибки, покажите какие и переделайте код, чтобы он работал правильно:


// let day = "monday";
// let message;

// if (day == "Monday") {
//      message = "It's Monday!";
// } 
// else if (day == "Tuesday") {
//      message = "It's Tuesday!";
// } 
// else if (day == "Wednesday") {
//      message = "It's Wednesday!";
// } 
// else if (day == "Thursday") {
//      message = "It's Thursday!";
// } 
// else if (day == "Friday") {
//      message = "It's Friday!";
// } 
// else if (day == "Saturday") {
//      message = "It's Saturday!";
// } 
// else if (day == "Sunday") {
//      message = "It's Sunday!";
// } 
// else {
//      message = "Invalid day!";
// }

// console.log(message);


////////////////////////////////////////////////////////////

// 5. Используя switch, напишите программу перевода дней недели из цифр 
// в названия (перевести дни 1-7 в Пон-Вос).

// var dayOfWeek = 4;
// var dayName;

// switch (dayOfWeek) {
//      case 1:
//           dayName = "Пон";
//           console.log(dayName);
//           break;
//      case 2:
//           dayName = "Вт";
//           console.log(dayName);
//           break;
//      case 3:
//           dayName = "Ср";
//           console.log(dayName);
//           break;
//      case 4:
//           dayName = "Чт";
//           console.log(dayName);
//           break;
//      case 5:
//           dayName = "Пт";
//           console.log(dayName);
//           break;
//     case 6:
//           dayName = "Сб";
//           console.log(dayName);
//           break;

//      case 7:
//           dayName = "Вос";
//           console.log(dayName);
//           break
// }


///////////////////////////////////////////////////////////////////

// 6. Напишите программу по согласованию отпуска в зависимости
//  от месяца. Если месяц “July” или “August”, то программа должна 
//  показать - “approved”, если другие месяцы, то - “denied”.


// let monthN = "Deceber";
// let message;

// if (monthN == "July") {
//      message = "Approved!";
// } 
// else if (monthN == "Tuesday") {
//      message = "It's Tuesday!";
// } 


// else {
//      message = "DENIED !";
// }

// console.log(message);

//////////////////////////////////////////////////////////////////////

// Напишите простенький калькулятор (*, /, +, -). У вас должны быть две
//  переменные для исходных чисел и одна для оператора. В зависимости
//  от оператора, должно происходить то или иное арифметическое действие 
// и выводиться результат в консоль. Проверьте ваш код с разными значениями, 
// положительными, отрицательными, дробными и т.д.


// let a = 4.8;
// let b = 2;


// let operator = "/";

// if (operator == "+") {
//      console.log(a+b);
// } 
// else if (operator == "-") {
//      console.log(a-b);
// } 
// else if (operator == "*") {
//      console.log(a*b);
// } 
// else if (operator == "/") {
//      console.log(a/b);
// } 

// else {
//      console.log("Недопустимый оператор!");
// }

// console.log("=" + a + operator + b);

/////////////////////////////////////////////////////////////////

// 8. Напишите программу, которая определяет, является ли заданный год високосным 
// по правилам Григорианского календаря. 
//Високосный год делится на 4, за исключением случаев, когда он делится на 100, но 
//не на 400.

// let year_input = 2024;


// if (year_input % 4 === 0 && year_input % 100 !== 0 || (year_input % 400 === 0) ) {     // % 4 вычислят остаток при делении на 4
//    console.log(year_input + " - високосный год");
// } else {
//    console.log(year_input + " - невисокосный год");
// }

/////////////////////////////////////////////////////////////////////


// 9. Напишите программу, которая рассчитывает стоимость билета в зависимости от возраста.
// Дети до 2х лет - бесплатно
// Дети до 10 лет - скидка в 50%
// Пожилые (после 65) - скидка в 15%
// Студенты - скидка в 10%

// let vozrast_posetitelya = "студент";
// let ticketPrice = 100;
// let discount = " скидка)";

// допустим, студент это элемент выпадающего списка возрвста и находится в самом верху 
// поиска, так как условие "студент" не прописано однеозначно

// if (vozrast_posetitelya === "студент"){
//     console.log((ticketPrice - (ticketPrice * 10 / 100)) + " BYN " +  " (10%" + discount + " студент");
// }

// else if (vozrast_posetitelya <= 2 && vozrast_posetitelya !== "студент"){
//     console.log("Стоимость билета: Бесплатное посещение");
// }

// else if (vozrast_posetitelya > 2 && vozrast_posetitelya <= 10 && vozrast_posetitelya !== "студент"){
//         console.log("Стоимость билета: " + (ticketPrice /2) + " BYN " +  " (50%" + discount);
// }

// else if (vozrast_posetitelya > 10 && vozrast_posetitelya <= 65 && vozrast_posetitelya !== "студент"){
//         console.log("Стоимость билета: " + ticketPrice + " BYN");
// }

// else if (vozrast_posetitelya > 65 && vozrast_posetitelya !== "студент"){
//         console.log("Стоимость билета: " + (ticketPrice - (ticketPrice * 15 / 100)) + " BYN " + "(15% " + discount +" пенсионер" );
// }


/////////////////////////////////////////////////////////////////////////////////

// 10. Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 
// 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.



// let stena = 5;      // высота стены
// let den_metr = 3;       // поднимается за день
// let noch_metr = 2;   // сползает за ночь

// let metry = 0;    // сколько уже проползла
// let dni = 0;        // счётчик дней

// while (metry < stena) {
//     metry = metry + den_metr; // прибавление дневных метров

//     if (metry >= stena) {
//         break; // достигла вершины
//     }

//     metry = metry - noch_metr; // ночь
//     dni = dni + 1;
// }

// dni = dni + 1; // последний день, когда долезла

// console.log("Улитка доползёт за " + dni + " дней");

////////////////////////////////////////////////////////////////////////////////////

// 11. Креативное задание:
// Напишите следующую программу:
// У клиента должен быть выбор из двух (или трех) видов кофе (на ваш выбор).
// Дайте названия вашим видам кофе.
// Установите цену на кофе в зависимости от величины стаканчика (small, medium, large).
// Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для 
// изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
// Компоненты кофе не влияют на стоимость.
// Используйте подходящую комбинацию условий - if, else if, else - для решения задачи.


// let kofe = "latte";   // latte, americano, cappuccino - можем прописывать
// let size = "small";        // small, medium, large - прописываем в переменной

// // Рецепты 
// let recipe;

// if (kofe === "latte") {
//     recipe = "Эспрессо + молоко + пенка";
// } else if (kofe === "americano") {
//     recipe = "Эспрессо + вода";
// } else if (kofe === "cappuccino") {
//     recipe = "Эспрессо + много пены";
// }

// // Цена по размеру
// let price;

// if (size === "small") {
//     price = 20;
// } else if (size === "medium") {
//     price = 30;
// } else if (size === "large") {
//     price = 40;
// }

// // Вывод результата
// console.log("Ваш выбор: " + kofe);
// console.log("Рецепт: " + recipe);
// console.log("Размер: " + size);
// console.log("Стоимость: " + price + " BYN");


////////////////////////////////////////////////////////////////////////////////////////

// 12. Создайте программу, которая определяет, имеет ли человек право на определенное 
// мероприятие, на основе нескольких критериев: возраста, статуса членства и 
// посещения предыдущих мероприятий.
// Критерии участия:
// Возраст должен быть не менее 18 лет.
// Для членов клуба другие ограничения не применяются.
// Если человек не является членом клуба, необходимо посетить не менее 3 предыдущих мероприятий.
// Если человек не является членом клуба, но посетил 5 или больше предыдущих мероприятий, он 
// получает специальный VIP-пропуск.

// let age = 18; // ввод возраста
// let chlenstvo = "yes"; // ввод наличия членства
// let visits_party = 3; // ввод количества мероприятий

// if ( age >= 18 && chlenstvo === "yes"){
//     console.log("Allowed");
// }

// else if(age >= 18 && chlenstvo !== "yes" && visits_party >= 3 && visits_party < 5 ){
//     console.log("Allowed");
// }

// else if (age >= 18 && chlenstvo !== "yes" && visits_party >= 5 ){
//      console.log("VIP- пропуск");
// }

// else { console.log("DENIED !");
// }
/////////////////////////////////////////////////////////////////////////////////////

// 13. 

// Description:
// Create a function that accepts a parameter representing a name and 
// returns the message: "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// let name_input = "Lola";

// console.log("Hello, " + name_input + "how are you doing today?" );

///////////////////////////////////////////////////////////////////////////////////////////


//14. https://www.codewars.com/kata/583f158ea20cfcbeb400000a
// Description: Given two numbers and an arithmetic operator 
// (the name of it, as a string), return the result of the two
//  numbers having that operator used on them.

// a and b will both be positive integers, and a will always be 
// the first number in the operation, and b always the second.

//The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

//5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3

// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// {let a = 5;
// let b = 2;
// let operatorADD = a + b;
// let operatorSUBTRACT = a - b;
// let operatorMULTIPLY = a * b;
// let operatorDIVIDE = a / b;

// console.log(operatorADD);
// console.log(operatorSUBTRACT);
// console.log(operatorMULTIPLY);
// console.log(operatorDIVIDE);}



//////////////////////////////////////////////////////////////////////////////

//15
// Description:
// We need a simple function that determines if a plural is needed or not. It 
// should take a number, and return true if a plural should be used with 
// that number or false if not. This would be useful when printing out a
//  string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, 
// where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// let n = 5
//   if (n === 1) {
//     console.log("false");
//   } else {
//     console.log("true");
//   }


 /////////////////////////////////////////////////////////////////////////////////////

// 16 
// https://www.codewars.com/kata/554003323fd6af1c4200004e

//Description:
//Create a function that checks if a number is odd.

//Expect negative and decimal numbers too. Remember... 
// all negative numbers can also be either odd or even.

//Decimal numbers always return false

//////

// let n = 4;
 
//         // если число целое, проверяем остаток от деления на 2
//         if (n % 2 !== 0) {
//             console.log("true");  // нечётное
//         } else {
//             console.log("false"); // чётное
//         }
    
/////////////////////////////////////////////////////////////////////

// 17
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3  

// let chasti_FI = "Sam Harris";
// let iniciali = chasti_FI.split(" ");

// if (iniciali.length === 2){
//     let initsial1 = chasti_FI[0] [0].toUpperCase();
//     let initsial2 = chasti_FI[1] [0].toUpperCase();
//     console.log("Инициалы для " + chasti_FI + " = " + initsial1 + "." + initsial2);
//     }

//////////////////////////////////////////////////////////////////////

// 18
// https://www.codewars.com/kata/55908aad6620c066bc00002a

// Description:
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

//////

// let strng = "Somebome"
// let str = strng.toLowerCase;
// let countX = 0;
// let countO = 0;

// for (let i = 0; i < strng.lengt; i++) {
//     if (str[i] === "x") {
//         countX++;
//     } 
//     else if (str[i] === "o" ){
//         countO++;
//     }
// }

// if (countX === countO) {
//     console.log("true");
// } else {
//     console.log("false");
// }

