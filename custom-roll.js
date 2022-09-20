const prompt = require('prompt-sync')({sigint: true});

console.log(Math.ceil(Math.random()*prompt("How many sides? ")))