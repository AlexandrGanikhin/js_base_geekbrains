//3.Продолжить работу с интернет-магазином:

//3.1. В прошлом домашнем задании вы реализовали корзину на базе массивов.
//     Какими объектами можно заменить их элементы?

//3.2. Реализуйте такие объекты.

//3.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

//'use strict';

const basket = {
    product_1: {
        product_id: 001,
        product_name: 'Велосипед',
        product_pice: 18300,
        product_quantity: 18,
    },
    product_2: {
        product_id: 002,
        product_name: 'Самокат',
        product_pice: 12100,
        product_quantity: 1,
    },
    product_3: {
        product_id: 003,
        product_name: 'Ролики',
        product_pice: 8300,
        product_quantity: 4,
    },
};

const basketPrice = {
    totalPrice: 0,
    calc() {
        for (prop in basket) {
            this.totalPrice += basket[prop].product_pice * basket[prop].product_quantity;
        }
    },
};

basketPrice.calc();
console.log(basketPrice.totalPrice);