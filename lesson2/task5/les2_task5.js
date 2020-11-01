//Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
//Обязательно использовать оператор return

'use strict';

function mathSum(a, b) {
    return a + b;
}

function mathSubtrac(a, b) {
    return a - b;
}

function mathMultipl(a, b) {
    return a * b;
}

function mathDivision(a, b) {
    if (b == 0) return '?';
    return a / b;
}

let a = 12, b = 0;
alert(`
    ${a} + ${b} = ${mathSum(a, b)}\n
    ${a} - ${b} = ${mathSubtrac(a, b)}\n
    ${a} * ${b} = ${mathMultipl(a, b)}\n
    ${a} / ${b} = ${mathDivision(a, b)}
    `);