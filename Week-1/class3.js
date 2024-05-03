// function findSum(n){
//     let ans = 0;
//     for(let i=0; i<n; i++){
//         ans += i
//     }
//     return ans;
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// // busy waiting
// function syncSleep(){
//     let a = 1;
//     for(let i=0; i<10000000000; i++){
//         a++;
//     }
// }

// // sync function
// // syncSleep()

// // async function
// setTimeout(findSumTill100, 1000)
// console.log("Hello world");

// const fs = require("fs");
// // filesystem module

// fs.readFile("a.txt", "utf-8", function (err, data){
//     console.log(data);
// })

// console.log("hi there");

// let a = 0;
// // takes very long, longer than the file read
// for(let i=0; i<1000000000; i++){
//     a++;
// }

// console.log("hi there 2");


// Promises
// promises are syntactical sugar that make the callback code slightly more readable
// const fs = require('fs');
// const { setTimeout } = require('timers/promises');

// // my own asynchronous function
// function ishavsReadFile() {
//     return new Promise(function(resolve) {
//         fs.readFile("a.txt", "utf-8", function(err, data) {
//             resolve(data);
//         });
//     })
// }

// callback function to call
// function onDone(data){
//     console.log(data)
// }

// // var a = ishavsReadFile();
// // a.then(onDone);

// // => pending, resolved
// var d = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("foo");
//     }, 1000)
// });

// function callback() {
//     console.log(d);
// }

// console.log(d);
// d.then(callback)

// Async await
function ishavsAsyncFunction() {
    let p = new Promise(function(resolve) {
        // do some async login here
        setTimeout(function() {
            resolve("hi there!")
        }, 3000)
    });
    return p;
}

async function main() {
    // no callbacks, no .then syntax
    let value = await ishavsAsyncFunction()
    console.log("hi there1");
    console.log(value);
}

main();
console.log("after main");