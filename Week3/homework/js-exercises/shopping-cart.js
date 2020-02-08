'use strict';

let itemsInTheCart = ['bananas', 'milk'];

function addToShoppingCart(newItem) {
    itemsInTheCart.push(newItem);
    if (itemsInTheCart.length > 3) {
        itemsInTheCart.shift();
    }
    console.log(`You bought ${itemsInTheCart}!`);
}

addToShoppingCart('kiwi');
addToShoppingCart('honey');
addToShoppingCart('bread');