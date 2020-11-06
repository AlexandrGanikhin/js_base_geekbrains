// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

'use strict';

function eratosthenes(lim = 100) {
    let boolArr = new Array(lim).fill(true);
    let currentIdx = 2;
    let i;
    let resultArr = [];

    while (currentIdx ** 2 <= boolArr.length) {
        if (boolArr[currentIdx] == true) {
            i = 0;
            while (currentIdx ** 2 + currentIdx * i <= boolArr.length) {
                boolArr[currentIdx ** 2 + currentIdx * i] = false;
                i++;
            }

        }
        currentIdx++;
    }

    i = 2;

    while (i <= boolArr.length) {
        if (boolArr[i] == true) {
            resultArr.push(i);
        }
        i++
    }

    return resultArr;
}


console.log(...eratosthenes(100));