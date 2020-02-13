'use strict';




function calculateTotalPrice(obj) {
    let totalCost = 0;
    for (let key in obj) {
        totalCost = totalCost + obj[key];
    }
    console.log(`Total price of all items is ${totalCost.toFixed(2)} .`);
}

let cartForParty = {
    chips: 1.20,
    cookies: 3.99,
    chocolate: 2.75,
    coke: 2.50,
    sunFlowerSeeds: 4.00,
}

calculateTotalPrice(cartForParty);
