'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Cложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 24000);
let rollback = 21;
let adaptive = prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * rollback / 100;
let allServicePrices = servicePrice1 + servicePrice2;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%"
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%"
  } else if (price < 15000 && price > 0) {
    return "Скидка не предусмотрена"
  } else if (price <= 0) {
    return "Что-то пошло не так"
  }
}

/* Это я  не понимаю..
const getAllServicePrices = function () {
  const allServicePrices = function (servicePrice1, servicePrice2) {
    console.log(servicePrice1 + servicePrice2);
  }
}
*/

/* Может так надо? 
const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2
}
*/

/* Или так? */
function getAllServicePrices() {
  return calcSum = servicePrice1 + servicePrice2;
}

function getFullPrice() {
  return calcSum = screenPrice + allServicePrices;
}

function getServicePercentPrices() {
  return servicePercentPrice;
}

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);
console.log(allServicePrices);

console.log("Стоимость вёрстки экранов " + screenPrice + " рублей/долларов/гривен/юаней");

// console.log(getAllServicePrices(servicePrice1, servicePrice2));