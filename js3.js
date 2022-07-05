'use strict';

function showLastProduct(array) {
    console.log(array[length - 1]);
}

function devider() {
    console.log("----------------------------------------");
}

console.log("Task 1");

let products = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8', 'product9'];

let length = products.length;

showLastProduct(products);

devider();

console.log("Task2");

let styles = ['Jazz', 'Blues'];

console.log("Massive before add a rock`n`roll to the end ---------> " + styles)

styles.push('Rock`n`roll');

console.log("Massive after add a rock`n`roll to the end ---------> " + styles);

devider();

console.log("replace prelastelement")

for (let i = 0; i < styles.length; i++) {
    if (styles[i + 1] == undefined) {
        styles[i - 1] = 'Classic';
    }
}

console.log(styles + "");

devider();

console.log("deleting first element and showing it")

console.log(styles.shift());

console.log(styles + "");

devider();

console.log("add Rap and Reggy to the start of array");

styles.unshift('Rap', 'Raggy');

console.log(styles + "");

devider();

function find(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        } else {
            return -1;
        }
    }
}

console.log(find(styles, "qwe"));

devider();

function filterRange(fArray, a, b) {
    for (let i = a; i < b; i++) {
        console.log(fArray[i]);
    }
}

let array = [1, 2, 3, 4, 5, 6, 2, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

filterRange(array, 3, 8);

devider();
console.log('Task 4(max)')


let stringVar = "my-short-string";
function camelize(str) {
    let splitted = str.split("-");
    let CapitalizedWords = [];

    splitted.forEach(element => {
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });

    return CapitalizedWords.join("");
}

console.log(camelize(stringVar));



