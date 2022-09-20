const prompt = require('prompt-sync')({sigint: true});


let rigNum = Number(prompt("Enter number to have rigged: "))
let die = console.log(Math.ceil(Math.random()*7))
if(die === 7){
    console.log(`rigged ${rigNum}`)
}else{
    console.log(die)
}