// Callbacks
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

function sumOfSomething(a, b, callbackFn) {
  let num1 = callbackFn(a);
  let num2 = callbackFn(b);

  return num1 + num2;
}

// functional arguments
// let ans = sumOfSomething(1, 2, quad);
// console.log(ans);

// Async functions
// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// async functions
// function putCopyrightToFile(cb) {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     data = data + " copyright 2024 ishav";
//     fs.writeFile("a.txt", function () {
//       cb();
//     });
//   });
// }

// putCopyrightToFile(function () {
//   console.log("copyright has been put");
// });

// promises
// function myOwnSetTimeout(duration) {
//   let p = new Promise(function (resolve) {
//     // after 1 second, call resolve
//     setTimeout(resolve);
//   });
//   return p;
// }

// myOwnSetTimeout(1000).then(function () {
//   console.log("log the first thing");
// });

// promisify this async function
// returned undefined
function myOwnSetTimeout(callback, duration) {
  setTimeout(function () {
    callback();
  }, duration);
}

// calling async function that has a callback
// myOwnSetTimeout(function () {
//   console.log("after first function");
// }, 1000);

// returning a promise
function promisifedMyOwnSetTimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
  return p;
}

// calling promise function
const ans = promisifedMyOwnSetTimeout(1000);
// console.log(ans);
// ans.then(function () {
//   console.log("Timeout is done ");
// });

// async await syntax
function ishavsAsyncFunction() {
  const p = new Promise(function (resolve) {
    resolve("hi there");
  });
  return p;
}

// async await function
async function main() {
  const value = await ishavsAsyncFunction();
  console.log(value);
}

main();
