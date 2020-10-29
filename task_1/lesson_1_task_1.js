'use strict';

function celsiusToFahrenheit(celsius) {
    return 9 / 5 * celsius + 32;
}

const CELSIUS_TEMPPERATURE = prompt('Введите температуру по Цельсию');
alert(`${CELSIUS_TEMPPERATURE}°C = ${celsiusToFahrenheit(CELSIUS_TEMPPERATURE)}°F`);