// imports and exports
// const express = require("express");
// import express from "express"; // to intall this = command => npm install express @types/express

export const a = 1;

// Generics
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
 
interface User {
    name: string;
}

let element = getFirstElement<User>([{name: "ishav"}]);
let element2 = getFirstElement([1, 2]);
let element3 = getFirstElement([true, false]);

// enums
enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

function doSomething(keyPressed: Direction) {
    // do something
    if(Direction.Up) {

    }
    // and so on
}

// doSomething(Direction.Up);
// doSomething(Direction.Down);
// console.log(Direction.Up);
// console.log(Direction.Down);

// enum in express
// const app = express();

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get("/", (req, res) => {
//     if(!req.query.UserId) {
//         res.status(ResponseStatus.Error).json({});
//     }
//     // and so on
//     res.status(ResponseStatus.Success).json({});
// })