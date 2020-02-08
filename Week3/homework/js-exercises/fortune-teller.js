'use strict';

const numChildren = [1, 2, 3, 4, 5, 6, 7];
const partnerNames = ['Elise', 'Emma', 'Adam', 'John', 'Sophia', 'Amelia', 'Henry'];
const locations = ['Amsterdam', 'Paris', 'Den Hauge', 'Bangkok', 'Osaka', 'Chicago', 'Istanbul'];
const jobs = ['Teacher', 'Plumber', 'Software Developer', 'Constraction Worker', 'Doctor', 'Nurse', 'Lawyer'];

//Math.random() produces a random number between 0-1. Math.floor rounds the number
function tellFortune(numChildren, partnerNames, locations, jobs) {
    let job_title = jobs[Math.floor(Math.random() * jobs.length)];
    let location = locations[Math.floor(Math.random() * locations.length)];
    let wifeName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    let number_kids = numChildren[Math.floor(Math.random() * numChildren.length)];
    console.log(`You will be a ${job_title} in ${location}, and married to ${wifeName} with ${number_kids} kids.`)
}

tellFortune(numChildren, partnerNames, locations, jobs);