// 2. С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

'use strict';

let allProducts = [];
let product = [];
let basket = [];

function creatProduct(name, price = 0, quantity = 0) {
    let creat = true;
    allProducts.forEach(function (el) {
        if (el[0] == name) {
            console.log('Ошибка добавления товара: товар с таким наименованием уже существует.');
            creat = false;
        }
    });

    if (creat === true) {
        product.push(name, price, quantity);
        allProducts.push(Array.from(product));
        product.length = 0;
    }
}

function addProductToBasket(name, quantity = 1) {
    let productAdded = false;

    allProducts.forEach(function (el, elIdx) {
        if (el[0] == name && el[2] < quantity) {
            console.log(`Ошибка добавления товара в корзину: недостаточное количество товара ${name} на складе`);
            productAdded = true;
            return;
        } else if (el[0] == name && el[2] == quantity) {
            basket.push(...allProducts.splice(elIdx, elIdx));
            productAdded = true;
            return;
        } else if (el[0] == name) {
            el[2] = el[2] - quantity;
            let tempArr = Array.from(el);
            tempArr[2] = quantity;
            basket.push(Array.from(tempArr));
            productAdded = true;
            return;
        }
    });

    if (productAdded != true) console.log(`Ошибка добавления товара в корзину: товара ${name} не существует.`);

}

function countBasketPrice() {
    let totalBasketSum = 0;
    basket.forEach(function (el) {
        totalBasketSum += el[1] * el[2];
    });

    return `Общая стоимость корзины ${totalBasketSum}.`
}


creatProduct('Компьютер', 50840, 3);
creatProduct('Велосипед', 7800, 25);
creatProduct('Телефон', 33200, 1);
console.log(...allProducts);
addProductToBasket('Компьютер', 2);
addProductToBasket('Велосипед', 26);
addProductToBasket('Телефон', 1);
addProductToBasket('Троллейбус', 1);
console.log(...allProducts);
console.log('***********************');
console.log(...basket);
console.log('***********************');
console.log(countBasketPrice());