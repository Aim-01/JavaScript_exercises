// 1

//Нарисуйте треугольник с цифрами - вниз

// 9 8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8 9
//   8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8
//     7 6 5 4 3 2 1 0 1 2 3 4 5 6 7
//       6 5 4 3 2 1 0 1 2 3 4 5 6
//         5 4 3 2 1 0 1 2 3 4 5
//           4 3 2 1 0 1 2 3 4
//             3 2 1 0 1 2 3
//               2 1 0 1 2
//                 1 0 1
//                   0

/////РЕШЕНИЕ///

//cоздаём массивы
let arr = [];          // прямой массив 0–9
let arrReverse = [];   // обратный массив 9–0


for (let i = 0; i <= 9; i++) { // наполняем массивы цифрами по условию
    arr.push(i);            // 0 1 2 3 4 5 6 7 8 9 добавляет элементы в конец массива
    arrReverse.unshift(i);  // 9 8 7 6 5 4 3 2 1 0 добавлет элементы в начало
}

// вывод треугольника вниз
for (let row = 0; row <= 9; row++) { // первая строка полная - все последующие строке меньше на 1

    let spaces = " ".repeat(row * 2); //" ".repeat(n)- создаёт n пробелов слева. (row * 2) - тк пробел+символ убираются
    let line = "";  // создаём строку для вывода (когда строка пустая - выводятся цифры)

    for (let i = row; i < arrReverse.length; i++) { // row - индекс элемента массива, чем больше он - тем меньше элементов массива берём
        line += arrReverse[i] + " "; // добавляем в строку из реверсивного массива + пробел
    }

    for (let i = row + 1; i < arr.length; i++) { // row + 1 чтобы начать массив не с нуля, чтобы 0 не повторялся, чем большн raw тем меньше элементов справа
        line += arr[i] + " "; // добавляем правую часть к строке
    }

    console.log(spaces + line); // вывод пробелов и двух массивов (правая и левая части)
}


///////////////////////////////////////////////////////////////////////////////////////////////

//2

// Нарисуйте ромб из цифр (будьте внимательны!)
//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1

////РЕШЕНИЕ///

const max = 9;
const extraLeftPadding = 1;

let middle = "";
for (let i = 1; i <= max; i++) {
    middle += i;
}
middle += "0";
for (let i = max; i >= 1; i--) {
    middle += i;
}

const fullWidth = middle.length;

for (let row = 1; row <= max; row++) { // Верхняя часть
    let line = "";

    for (let i = 1; i <= row; i++) {
        line += i;
    }

    for (let i = row - 1; i >= 1; i--) {
        line += i;
    }

    let spaces = "";
    const spacesCount = Math.floor((fullWidth - line.length) / 2) + extraLeftPadding;

    for (let i = 0; i < spacesCount; i++) {
        spaces += " ";
    }

    console.log(spaces + line);
}

{ // Центральная строка
    let spaces = "";
    const spacesCount = Math.floor((fullWidth - middle.length) / 2) + extraLeftPadding;

    for (let i = 0; i < spacesCount; i++) {
        spaces += " ";
    }

    console.log(spaces + middle);
}

for (let row = max; row >= 1; row--) { // Нижняя часть
    let line = "";

    for (let i = 1; i <= row; i++) {
        line += i;
    }

    for (let i = row - 1; i >= 1; i--) {
        line += i;
    }

    let spaces = "";
    const spacesCount = Math.floor((fullWidth - line.length) / 2) + extraLeftPadding;

    for (let i = 0; i < spacesCount; i++) {
        spaces += " ";
    }

    console.log(spaces + line);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3

// Сложнее*: Нарисуйте горизонтальный треугольник из цифр

// 1  
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

///////

let num = 1;
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = "";
    
    for (let j = 1; j <= i; j++) {
        line += num + " ";
        num++;
    }
    
    console.log(line);
}

//////////////////////////////////////////////////////////////////////////

// 4

// Сложно, на смекалку: Нарисуйте вертикальный треугольник из цифр

// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15

let rows = 5;
let num = 1;

let total = 0;  // Вычисляем сумму всех чисел в треугольнике
for (let i = 1; i <= rows; i++) {
    total += i;
}

let pos = 1; //Переменная для позиции в последовательности

for (let row = 0; row < rows; row++) { // Выводим строки
    let line = "";
    
    for (let col = 0; col <= row; col++) {
       
        let columnStart = col;  // Формула: номер столбца + сумма строк выше текущей
        let prevRowsSum = 0;
        for (let r = 0; r < row; r++) {
            prevRowsSum += r + 1;
        }
        line += (prevRowsSum + columnStart + 1) + " ";
    }
    
    console.log(line.trim());
}

///////////////////////////////////////////////////////////////////

// 5 

// Имеется зашифрованное предложение 

// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”

// Мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.


let encrypted = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let arr = encrypted.split(""); // Разделяем строку на массив символов
let result = [];

for (let i = 0; i < arr.length; i++) {
   
    if (arr[i] === 'b' && arr[i + 1] === 'r') {  // Проверяем, не является ли текущий и следующий символ началом "br"
        i++; // Пропускаем 'r', так как 'b' уже проверяем сейчас
    } else {
        result.push(arr[i]); // Добавляем символ в результирующий массив
    }
}

console.log(result.join("")); // Соединяем массив обратно в строку


/////////////////////////////////////////////////////////////////////////////////////////////////

// 6

// Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему.

let text = "Пример текста";
let arr = text.split("");
let encryptedArr = [];

for (let i = 0; i < arr.length; i++) {
    encryptedArr.push(String.fromCharCode(arr[i].charCodeAt(0) + 3));
}

encryptedArr.reverse();
let encrypted = encryptedArr.join("");

console.log("Зашифровано:", encrypted);


let encryptedText = encrypted;
let arr2 = encryptedText.split("").reverse();
let decryptedArr = [];

for (let i = 0; i < arr2.length; i++) {
    decryptedArr.push(String.fromCharCode(arr2[i].charCodeAt(0) - 3));
}

let decrypted = decryptedArr.join("");

console.log("Расшифровано:", decrypted);

///////////////////////////////////////////////////////////////////////////////////////

// 7

// https://www.codewars.com/kata/5932c94f6aa4d1d786000028 
//In mathematics, an nth root of a number x, where n is usually assumed to be a 
// positive integer, is a number r which, when raised to the power n, yields x:

//r * ( r n-times) = x
// Given number n, such that n > 1, find if its 2nd root, 4th root and 8th root are all integers (fractional part is 0). Return true if yes, false if no.

// Examples
// // 2nd root of 256 is 16
// // 4th root of 256 is 4
// // 8th root of 256 is 2
// 256 --> true 

// // 2nd root of 16 is 4
// // 4th root of 16 is 2
// // 8th root of 16 is 1.4142135... --> not an integer
// 16 --> false

let n = 256; // ввод числа
let r2 = null;
let r4 = null;
let r8 = null;

for (let i = 1; i * i <= n; i++) { // проверка квадратного корня
    if (i * i === n) {
        r2 = i;
    }
}

for (let i = 1; i * i * i * i <= n; i++) { // проверка четвёртого корня
    if (i * i * i * i === n) {
        r4 = i;
    }
}

for (let i = 1; i * i * i * i * i * i * i * i <= n; i++) { // проверка восьмого корня
    if (i * i * i * i * i * i * i * i === n) {
        r8 = i;
    }
}

if (r2 !== null && r4 !== null && r8 !== null) {
    console.log("true");
} else {
    console.log("false");
}

//////////////////////////////////////////////////////////////

// 8 

// https://www.codewars.com/kata/570bcd9715944a2c8e000009

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

///////

let n = 7; // можно менять число

for (let i = 0; i < n; i++) {
    let line = "";
  
    for (let j = 0; j < i; j++) {   // добавляем пробелы слева
        line += " ";
    }
    line += "I";   // ставим букву I

    console.log(line);
}

///////////////////////////////////////////////////////////////////////////////

// 9
// https://www.codewars.com/kata/5601409514fc93442500010b

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

////////

let classPoints = [70, 80, 90, 100]; // массив баллов одноклассников
let myPoints = 95;                 // твой балл

let sum = 0; // считаем сумму баллов класса
for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
}

let average = sum / classPoints.length; // считаем среднее

if (myPoints > average) { // сравниваем твой балл с средним
    console.log(true);
} else {
    console.log(false);
}

///////////////////////////////////////////////////////////

// 10
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

/////////////////

// массив пар: [вошли, вышли]
let busStops = [
    [10, 0],
    [3, 5],
    [5, 8]
];

let people = 0; // автобус пустой в начале

for (let i = 0; i < busStops.length; i++) {
    let on = busStops[i][0];   // сколько вошло
    let off = busStops[i][1];  // сколько вышло

    people = people + on;      // добавляем вошедших
    people = people - off;     // вычитаем вышедших

    if (people < 0) {
        people = 0; // защита: не может быть отрицательно
    }
}

console.log(people); // сколько осталось в автобусе

////////////////////////////////////////////////////////////////////////////



// 11

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

/////////////////

let array = [10, 20, 30, 40]; // можно менять
let sum = 0;
let average = 0;

if (array.length === 0) {
    average = 0; // пустой массив → 0
} else {
   
    for (let i = 0; i < array.length; i++) {  // считаем сумму
        sum = sum + array[i];
    }


    average = sum / array.length;    // делим сумму на количество
}

console.log(average);


// 12
//  https://www.codewars.com/kata/58acfe4ae0201e1708000075
// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.

// Input/Output
// [input] integer array L ($a in PHP)
// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

// [output] a boolean value

// true if Arthur need to invite more women, false otherwise.

////////

let L = [1, -1, 1, -1, -1]; // массив гостей (-1 = женщина, 1 = мужчина)

let men = 0;
let women = 0;
let needMoreWomen = false;

for (let i = 0; i < L.length; i++) { // считаем количество мужчин и женщин
    if (L[i] === 1) {
        men = men + 1;
    } else if (L[i] === -1) {
        women = women + 1;
    }
}

if (women < men) { // проверка условия
    needMoreWomen = true;
} else {
    needMoreWomen = false;
}

console.log(needMoreWomen);

//////////////////////////////////////////////////////////////////////////

// 13

// https://www.codewars.com/kata/5265326f5fda8eb1160004c8

// We need a function that can transform a string into a number. What ways of achieving this do you know?

//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

let numberr = 123;
let str = numberr.toString(); 

///////////////////////////////////////////////////////////////////////

// 14

// Task
// Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr, it's a 2D array,
//  it contains three 1D array. The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.

// You can think of arr as a moat, the elements of arr like water constantly flow in. The direction 
// of flow is controlled by the parameter d. The value of d can be "left" or "right". "left" means 
// the "river" moves to the left. All elements in the 1D array are to the left moving n position, if
//  beyond the bounds of the array and the element is moved to the tail on the left side of the array; 
// if it exceeds the left boundary element would be moved to the tail of 3rd array(like a circle). Right
//  is also similar to the operation, but it is moving to the right.

// Finally, return arr.

// Examples
// infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) should return [[2,3,4],[5,6,7],[8,9,1]]
// infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) should return [[9,1,2],[3,4,5],[6,7,8]]
// infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2) should return [[3,4],[5,6,7,8],[9,10,1,2]]


//////////////

let arr = [[1,2,3],[4,5,6],[7,8,9]]; 
let d = "left"; // направление: "left" или "right"
let n = 1;      // количество шагов

for (let k = 0; k < n; k++) {  // повторяем n раз
    if (d === "left") {
        let first = arr[0][0];   // берём первый элемент из первой строки
      
        for (let i = 0; i < arr[0].length - 1; i++) {   // сдвигаем первую строку влево
            arr[0][i] = arr[0][i+1];
        }
        arr[0][arr[0].length - 1] = arr[1][0];

        for (let i = 0; i < arr[1].length - 1; i++) { // сдвигаем вторую строку влево
            arr[1][i] = arr[1][i+1];
        }
        arr[1][arr[1].length - 1] = arr[2][0];

        for (let i = 0; i < arr[2].length - 1; i++) {   // сдвигаем третью строку влево
            arr[2][i] = arr[2][i+1];
        }
        arr[2][arr[2].length - 1] = first;
    }

    if (d === "right") {
        let first = arr[0][arr[0].length - 1]; // берём последний элемент из первой строки

        for (let i = arr[0].length - 1; i > 0; i--) {  // сдвигаем первую строку вправо
            arr[0][i] = arr[0][i-1];
        }
        arr[0][0] = arr[1][arr[1].length - 1];
       
        for (let i = arr[1].length - 1; i > 0; i--) {   // сдвигаем вторую строку вправо
            arr[1][i] = arr[1][i-1];
        }
        arr[1][0] = arr[2][arr[2].length - 1];

        for (let i = arr[2].length - 1; i > 0; i--) {    // сдвигаем третью строку вправо
            arr[2][i] = arr[2][i-1];
        }
        arr[2][0] = first;
    }
}

console.log(arr);

//////////////////////////////////////////////////////////////////////////////////////////////

// 15
// https://www.codewars.com/kata/572cb264362806af46000793

// // Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. 
// // Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.

// Note1: You should not modify the original array.

// Note2: Because this is a beginner Kata, and due to the author's mercy ;-), 
// so you do not have to verify the validity of the parameter, and do not worry about the number
//  of elements of the array is not a multiple of 3.

// Example:

// threeInOne( [1,2,3]) should return [6]
// threeInOne( [1,2,3,4,5,6]) should return [6,15]
// threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
// threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]

/////////

let arr = [1,3,5,2,4,6,7,7,7]; // [1,2,3]  /// [1,2,3,4,5,6] /// [1,2,3,4,5,6,7,8,9]
let result = [];
let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) { // идём по массиву
    sum = sum + arr[i];   // добавляем элемент
    count = count + 1;    // считаем, сколько сложили
   
    if (count === 3) {  // если набрали 3 элемента
        result[result.length] = sum; // добавляем сумму в результат
        sum = 0;     // обнуляем сумму
        count = 0;   // обнуляем счётчик
    }
}

console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////

// 16
//https://www.codewars.com/kata/572df796914b5ba27c000c90

// Coding in function sortIt. function accept 1 parameters arr, it's a number array. 
// Your task is to sort the array according to the specified conditions, and returns a new 
// array(should not modify the original array).

// conditions1: according to the number of elements(in ascending order) for example:

// sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
// because [1,1,1,2,2,3] has one 3, two 2 and three 1
// conditions2: If the same number of elements, according to the number values(in descending order) for example:

// sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
// because number of 3,2 and 1 both are three, then according to 3>2>1
// Comprehensive two conditions should be like this:

// sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]

///////////

let arr = [1, 2, 3, 4, 4, 5, 5, 6, 6]; // исходный массив
let copy = []; // копия массива
let freq = {}; // частота чисел

for (let i = 0; i < arr.length; i++) { // создаём копию массива
    copy[i] = arr[i];
}

for (let i = 0; i < copy.length; i++) { // считаем количество каждого числа
    let num = copy[i];
    if (freq[num] === undefined) {
        freq[num] = 1;
    } else {
        freq[num] = freq[num] + 1;
    }
}

for (let i = 0; i < copy.length - 1; i++) { // сортировка по условиям
    for (let j = 0; j < copy.length - 1 - i; j++) {
        let a = copy[j];
        let b = copy[j + 1];
        
        if (freq[a] > freq[b]) { // условие 1: по частоте (возрастающий порядок)
            let temp = copy[j];
            copy[j] = copy[j + 1];
            copy[j + 1] = temp;
        } else if (freq[a] === freq[b]) {
            
            if (a < b) {  // условие 2: если частота одинаковая → по значению (убывающий порядок)
                let temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;
            }
        }
    }
}

console.log(copy);

///////////////////////////////////////////////////////////////////////////////////////

// 17
// Who remembers back to their time in the schoolyard, when girls would take a flower and 
// tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, 
// "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the 
// last petal for a flower of a given number of petals. The number of petals is always greater than 0.

/////////////

let nbPetals = 10; // количество лепестков
let phrase = ""; // фраза на последнем лепестке

for (let i = 1; i <= nbPetals; i++) {
    let pos = i % 6; // позиция в цикле

    if (pos === 1) {
        phrase = "I love you";
    } else if (pos === 2) {
        phrase = "a little";
    } else if (pos === 3) {
        phrase = "a lot";
    } else if (pos === 4) {
        phrase = "passionately";
    } else if (pos === 5) {
        phrase = "madly";
    } else if (pos === 0) {
        phrase = "not at all";
    }
}

console.log(phrase); 

//////////////////////////////////////////////////////////////////////////////////////// /
// 18 

// https://www.codewars.com/kata/56b29582461215098d00000f
// Issue
// Looks like some hoodlum plumber and his brother has been running around and
// damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before
//  you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the
//  previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list
//  so that the values increment by 1 for each index from the minimum value up
//  to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

/////////////////////

let arr = [1, 3, 5, 6, 7, 8]; // исходный массив
let newArr = [];

let min = arr[0];                 // минимальное значение
let max = arr[arr.length - 1];    // максимальное значение


for (let i = min; i <= max; i++) {  // цикл от min до max
    newArr.push(i);
}

console.log(newArr); 

//////////////////////////////////////////////////////////////////////////////////

// 19
// https://www.codewars.com/kata/5413759479ba273f8100003d

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)
//////////////

let arr = [1, 2, 3, 4, 5]; // исходный массив
let reversed = [];          // новый массив для результата


for (let i = arr.length - 1; i >= 0; i--) { // идём с конца к началу
    reversed.push(arr[i]);
}

console.log(reversed); 
console.log(arr.reverse());

//////////////////////////////////////////////////////////////////////////////////////////

// 20

//https://www.codewars.com/kata/515e271a311df0350d00000f

let numbers = [1, 2, 2]; // исходный массив
let sum = 0;


for (let i = 0; i < numbers.length; i++) { // идём по каждому элементу массива
    let num = numbers[i];
    let square = num * num; // возводим в квадрат
    sum = sum + square;     // прибавляем к сумме
}

console.log(sum); 

/////////////////////////////////////////////////////////////////////////////////////////

// 21
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note
// If there is nothing to sum, the sum is default to 0.

////////////

let arr = [1, -4, 7, 12]; // исходный массив
let sum = 0;

for (let i = 0; i < arr.length; i++) { // идём по каждому элементу массива
    let num = arr[i];

    if (num > 0) {        // проверяем, что число положительное
        sum = sum + num;  // прибавляем к сумме
    }
}

console.log(sum); 

///////////////////////////////////////////////////////////////////////////

// 22 

//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

// Complete the function that takes a sequence of numbers as single parameter.
//  Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0
 /////////////

let arr = [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]; // исходный массив
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 1 === 0 && num % 2 === 0) {  // проверяем: число целое и чётное
        sum = sum + num;
    }
}

console.log(sum); 

//////////////////////////////////////////////////////////////////

// 23 
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative. If the array is empty, return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: [-2.398]
// Output: -2.398

// Input: []
// Output: 0

// Assumptions
// You can assume that you are given a (possibly empty) valid array containing only numbers.

///////////////

let arr = [1, 5.2, 4, 0, -1]; // исходный массив
let sum = 0;


for (let i = 0; i < arr.length; i++) {  // идём по каждому элементу массива
    sum = sum + arr[i];
}

console.log(sum);

///////////////////////////////////////////////////////////////////////////

// 24
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// You take your son to the forest to see the monkeys. You know that there are a certain 
// number there (n), but your son is too young to just appreciate the full number, he has 
// to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array 
// with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

////////////

let n = 10;      // количество обезьян
let monkeys = []; // массив для результата

for (let i = 1; i <= n; i++) {
    monkeys.push(i);
}

console.log(monkeys); // [1,2,3,4,5,6,7,8,9,10]

///////////////////////////////////////////////////////////////////////

//25
//  https://www.codewars.com/kata/571d42206414b103dc0006a1

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

//////////

let N = 10;        // пример входного числа
let result = [];  // массив для результата

for (let i = 0; i < N; i++) {
    result[i] = i; // присваиваем по индексу
}

console.log(result); 

