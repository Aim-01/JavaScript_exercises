//Темы 1-2 JS
//Данные:
//Пользователь 1: Имя — 'Алиса', Правильных ответов — 17
//Пользователь 2: Имя — 'Карл', Правильных ответов — 22
//Максимально возможное количество правильных ответов — 25
//Необходимо выполнить следующие шаги
//Объявить переменные для хранения данных пользователей и максимального балла с использованием const
//Описать структуру кода с помощью комментариев, разделив логику на блоки.
//Использовать console.log() для вывода в консоль:
//Заголовка отчета.
//Процентного результата каждого пользователя (с помощью математических операций).
//Проверки, кто из пользователей набрал больше 20 баллов (вывести в консоль true или false).
//Простое приветствие в начале скрипта

/////////////////////////////////////////////////////////////////////////////////////////////////

// const user1 = "Алиса"; // данные по юзерам
// const Q_numbers1 = 17;
// const user2 = "Карл";
// const Q_numbers2 = 22;
// const Q_numbers_Max = 25;

// const greet = "Приветствую!";
// const report_title = "Отчёт о результатах пользователей: ";

// const result_precentage1 = Q_numbers1/Q_numbers_Max * 100;
// const result_precentage2 = Q_numbers2/Q_numbers_Max * 100;

// const for_check_Q_more_20 = 21;


// console.log(greet);
// console.log(report_title);
// console.log("Процентный результат " + user1 + " составил " + result_precentage1 + "%");
// console.log("Набрал(а) больше 20 баллов:");

// if (Q_numbers1 >= for_check_Q_more_20) {
//     console.log("true");
// } else {

// console.log("false");}

// console.log("Процентный результат " + user2 + " составил " + result_precentage2 + "%");
// console.log("Набрал(а) больше 20 баллов:");

// if (Q_numbers2 >= for_check_Q_more_20) {
//     console.log("true");
// } else {

// console.log("false");}


//////////////////////////////////////////////

//JS
// Темы: переменные, операторы

// 1. 1. Переменные
// Объявите две переменные: firstName и lastName.
// Присвойте значение "John"  переменной firstName и значение "Adams"   переменной  lastName.
// Выведите в консоль  значение firstName и lastName (должно показать "John Adams").
// Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Brandon Smith).
// В итоге на экране должно быть две строки:
// John Adams
// Brandon Smith

//////////////РЕШЕНИЕ//////////////////

// var firstName = "John";
// var lastName = "Adams";

// console.log(firstName, lastName); // выводим John Adams

// var firstName = "Brandon";  // переназначаем переменные 
// var lastName = "Smith";

// console.log(firstName, lastName); // выводим переназначенные переменны


//////////////////////////////////////////////////////////////////

// 2. Выведите в консоль тип данных следующих переменных (использовать метод typeof())
// let a;
// let c = 9;
// let str = "Hi 5!";
// let b = true;
// let y = 9 + "1";
// let x = "a" / 6; // NaN (not a number) возвращает, что является специальным числовым значением

// console.log(typeof(a));
// console.log(typeof(c));
// console.log(typeof(str));
// console.log(typeof(b));
// console.log(typeof(y));
// console.log(typeof(x));


////////////////////////////////////////////////////////////////

// 3. Придумайте, какие переменные логично объявить через const, пропишите их и выведите на экран

// const - переменная, которую нельза переопределить, но если это объект, то в объекте можно поменять 
// свойство объекта, то есть мы делаем const либо те переменные, которые запрещено будет изменять 
// (кроме объекта), либо объект, который в будущем потребует изменения свойства.


// function getAgeFromBirthDate(birthDateString) {
//   const today = new Date();
//   const birthDate = new Date(
//     birthDateString.substr(0, 4),
//     birthDateString.substr(4, 2) – 1,
//     birthDateString.substr(6)
//   );

//   let age = today.getFullYear() – birthDate.getFullYear();

//   if (today.getMonth() < birthDate.getMonth() ||
//       (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
//     age--;
//   }

//   return age;
// }

// console.log(getAgeFromBirthDate("19910705")); // Возраст будет вычислен исходя из текущей даты.

////////////////
/////////////////
////////////////!!

// Function getAgeFromBirthDate(birthDateString) {
//     const year = Number(birthDateString.slice(0, 4));
//     const month = Number(birthDateString.slice(4, 6)) - 1;
//     const day = Number(birthDateString.slice(6, 8));

//     const birthDate = new Date(year, month, day);

//     if (isNaN(birthDate)) {
//         throw new Error("Некорректная дата рождения");
//     }

//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();

//     if (
//         today.getMonth() < birthDate.getMonth() ||
//         (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
//     ) {
//         age--;
//     }

//     return age;
// }


////////////////////////////////////////////////////////////

//4. Проверьте какие числа находятся между 10 и 20 и выведете на печать для каждой цифры true или false
//let i;
//let chislo1 = 10;
//let chisloX = 20;
//i = 10
//console.log(i >= chislo1 && i <= chisloX);

// for (i = 0; i < chisloX; i++){

//     if (i >= chislo1){
//         console.log(i + " true");
//     }
//     else if (i >= chislo1 && i <= chisloX){
//         console.log(i + " true");
//     }

//     else {
//          console.log(i + "  false");
//     }
    
// }
////



//////////////////////////////////////////////////////////////

//5. Что выведет код и ПОЧЕМУ: 

    //a. 
    //  const number = 15;
    //      const result = number + 5; // покажет сумму =20 (прибавление числа к переменной)
    //      console.log(result);

    //b. 
    //  const number2 = "28";
    //      const result = number2 + 2;  // конкатенация (соединили строку с цислом)
    //      console.log(result);

    //c.  
    //console.log( null || 2 || undefined ); // выведет 2, тк "или" работает на первое тру

    //d.  
    // const x = 5;
    // const y = 10;

    //      console.log(x > 0 && y < 20); // true  тк все условия выполняются
    //      console.log(x < 0 && y > 0); // false тк сравнение И (должны быть верны 2 условия)
    //      console.log(x < 0 && y < 0); // false тк сравнение И (должны быть верны 2 условия)
    //      console.log(x > 0 && "Hello"); // Hello  - тк оба условия верны и одно из них string

    // e.  
    // const a = 0;
    //      const b = "World";

    //      console.log(a > 0 || b.length > 0); //true 
    //      console.log(a > 0 || b.length === 0); // false === это полное сравнение также по типу данных (число или стринг или NaN)
    //      console.log(a > 0 || ""); // пустое значение, тк первое условие неверно, а второе стринга с пустым значением
    //      console.log(a < 0 || "Hello"); // Hello тк стринга

    //f.   
    // let x = 5;
    //      let y = 10;
    //      let z = 15;
    //      let result = (x > y || y < z) && !(z === x); // true - тк 1е условие верно по "y < z" и 2е условие верно из-за НЕ равно

///////////////////////////////////////////////////////////////////////////////////////


//6. 
//Какого типа данных будет результат выполнения оператора "typeof" для переменной "isAdult", если возраст "age" равен 18?

    // let age = 18;
    // let isAdult = age >= 18;
    // let typeOfIsAdult = typeof isAdult;
    // console.log(typeOfIsAdult); // Boolean - тк  это условие тру или фолс

        
////////////////////////////////////////////////////////////////////////////////////////

// Задачки на CodeWars:
// 1. 
// http://www.codewars.com/kata/560f8d41cf6e1fe5c900002e 

// var x = NaN;
// console.log( x === x ); // когда знаение NaN - будет возвращаться false

// var x = "Chef" / "Chet";
// console.log( x === x );

// var x = 
// console.log( x === x );

// 2.
// http://www.codewars.com/kata/50ee6b0bdeab583673000025 

//This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

//ОТВЕТ///////

// может быть: ошибка в наименовании переменной (заглавная буква вместо строчной, ошибка объявления переменной 
// не использовано var let const, ошибка в коде)

/////////////////////////////////////////////////////////////////////////////////