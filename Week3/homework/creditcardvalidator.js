'use strict';
/*main function is getting the info from other functions and returns the errors of the
invalid card number or returns the statement that says card number is valid.*/
function main(cardNum) {
    // let errors = [];
    if (isValid(cardNum) === false) {
        console.log(`(${cardNum})`)
        if (checkLength(cardNum) === false) {
            console.log('Number must be 16 digits!');
        }
        if (checkSum(cardNum) === false) {
            console.log('Sum less than 16!');
        }
        if (allEqualCharacters(cardNum) === false) {
            console.log('All numbers can not be the same!');
        }
        if (onlyNumbers(cardNum) === false) {
            console.log('Invalid characters!');
        }
        if (isEndEven(cardNum) === false) {
            console.log('Odd final number!');
        }
        return;
    }

    console.log(`"${cardNum}" is a valid credit card number.`);
}

//checking the length of number if its equal to 16
function checkLength(cardNum) {
    let numberLength = cardNum.length;
    if (numberLength == 16) {
        return true;
    }
    return false;
}

//checking the sum of the digits of the card number if its greater than 16 
function checkSum(cardNum) {
    let sum = 0;
    for (let i = 0; i < cardNum.length; i++) {
        sum = parseInt(sum) + parseInt(cardNum[i]);
    }
    if (sum > 16) {
        return true;
    }
    return false;
}

// checking the card number if it has at least 2 different numbers
function allEqualCharacters(cardNum) {
    let characterCheck = cardNum.split('').every(char => char === cardNum[0]);
    if (characterCheck == true) {
        return false;
    }
    return true;
}

// checking if the card number ends with an even number
function isEndEven(cardNum) {
    let lastNumber = cardNum[cardNum.length - 1];
    if (lastNumber % 2 == 0) {
        return true;
    }
    return false;
}

// checking if the card number is made of only numbers
function onlyNumbers(cardNum) {
    let isNumOnly = /^\d+$/.test(cardNum); //this method is to check if the items of the variable is only made of numbers if so it returns 'true'.
    if (isNumOnly == true) {
        return true;
    }
    return false;
}

// checking if the card number is valid according to the given requirements
function isValid(cardNum) {
    switch (false) {
        case checkLength(cardNum):
            return false;
        case checkSum(cardNum):
            return false;
        case allEqualCharacters(cardNum):
            return false;
            break;
        case onlyNumbers(cardNum):
            return false;
            break;
        case isEndEven(cardNum):
            return false;
            break;
    }
    return true;
}


//main('1000000000006');
main('9999777788880000'); //valid number example
main('6666666666661666'); //valid number example

main('a92332119c011112'); //Invalid number example
main('4444444444444444'); //Invalid number example
main('1111111111111110'); //Invalid number example
main('6666666666666661'); //Invalid number example