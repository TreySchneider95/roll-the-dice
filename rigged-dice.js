const prompt = require('prompt-sync')({sigint: true});
let statObj = {1:0,2:0,3:0,4:0,5:0,6:0}
let rigNum = Number(prompt("Enter number to have rigged: "))
for(x of Array(100000000)){
    let die = Math.ceil(Math.random()*7)
    if(die === 7){
        statObj[Number(rigNum)] += 1
    }else{
        statObj[Number(die)] += 1
    }
}
console.log(statObj)