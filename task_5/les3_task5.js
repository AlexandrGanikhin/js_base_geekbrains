// 5. *Нарисовать пирамиду с помощью console.log,
// как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

'use strict';

const rowCount = 20;
const symbol = 'x'

for (let i = 1; i <= rowCount; i++) {
    console.log(symbol.repeat(i));
}