const prompt = require('prompt-sync')({sigint: true});

let rig = Math.floor(Math.random()*2)
let rigNum = Number(prompt("Enter number to have rigged: "))
if(rig){
    console.log(`rigged ${rigNum}`)
}else{
    console.log(Math.ceil(Math.random()*6))
}