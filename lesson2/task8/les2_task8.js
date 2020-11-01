//* С помощью рекурсии организовать функцию возведения числа в степень.
//Формат: function power(val, pow), где val — заданное число, pow –— степень.

function power(val, pow) {
    if (pow == 0) {
        return 1;
    } else if (val == 0 && pow < 0) {
        return '?';
    } else if (val == 0) {
        return 0;
    }

    if (pow == 1) {
        return val;
    } else if (pow == -1) {
        return 1 / val;
    }

    if (pow > 0) {
        return val * power(val, pow - 1);
    } else {
        return 1 / val * power(val, pow + 1);
    }
}

let num = 4, degree = -3;

let supDegree = String(degree).sup();
let resoultStr = (`${num}${supDegree} = ${power(num, degree)}`);
document.getElementById('info').innerHTML = resoultStr;