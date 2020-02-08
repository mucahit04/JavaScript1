'use strict';

let complimentsArr = ['great', 'awesome', 'smart', 'ambitious', 'unique', 'generous', 'thoughtful', 'cheerful', 'supportive', 'open-minded'];

/* to get random compliment ; Math.random() produces a random number between
0-1. Then multiply it with the length of the array, this will give a random
index in the array. Then it is passed as an index to array to select a
compliment from the array, randomly. */
function giveCompliment(name) {
    console.log(name.length);
    let compliment = complimentsArr[Math.floor(Math.random() * complimentsArr.length)];
    console.log(`You are ${compliment}, ${name}`);
}

giveCompliment("Mucahit");
giveCompliment("Mucahit");
giveCompliment("Mucahit");