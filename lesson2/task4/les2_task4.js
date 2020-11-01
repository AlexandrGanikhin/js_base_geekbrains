//Присвоить переменной а значение в промежутке [0..15].
//С помощью оператора switch организовать вывод чисел от a до 15.

'use strict';

let userInput = +prompt('Введите число от 0 до 15');
let lastNum = 15;

function arrayCreat(firstNum) {
    let numArray = [];
    for (let i = firstNum; i <= lastNum; i++) {
        numArray.push(i);
    }
    return numArray;
}

switch (userInput) {
    case 0:
        alert(arrayCreat(0));
        break;
    case 1:
        alert(arrayCreat(1));
        break;
    case 2:
        alert(arrayCreat(2));
        break;
    case 3:
        alert(arrayCreat(3));
        break;
    case 4:
        alert(arrayCreat(4));
        break;
    case 5:
        alert(arrayCreat(5));
        break;
    case 6:
        alert(arrayCreat(6));
        break;
    case 7:
        alert(arrayCreat(7));
        break;
    case 8:
        alert(arrayCreat(8));
        break;
    case 9:
        alert(arrayCreat(9));
        break;
    case 10:
        alert(arrayCreat(10));
        break;
    case 11:
        alert(arrayCreat(11));
        break;
    case 12:
        alert(arrayCreat(12));
        break;
    case 13:
        alert(arrayCreat(13));
        break;
    case 14:
        alert(arrayCreat(14));
        break;
    case 15:
        alert(arrayCreat(15));
        break;

    default:
        alert('Вы ввели неверные данные');
        break;
}