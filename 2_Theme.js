//Темы: строка, методы строки, if-else, switch.

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

