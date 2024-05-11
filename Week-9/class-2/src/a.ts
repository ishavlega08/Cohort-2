// Arrays
type NumberArr = number[];

function maxValue(arr: NumberArr) {
    let max = 0;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

maxValue([1, 2, 3])

// types
type User2 = {
    firstName: string;
    lastName: string;
    age: number
}

// unions
type GreetArg = number | string

function greet(id: GreetArg){

}

greet(1);
greet("1");

// intersections
type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TechLead = Employee & Manager;

const t: TechLead = {
    name: "Ishav",
    startDate: new Date(),
    department: "Software Developer",
}

// interfaces
// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     email?: string;
// };

// function isLegal(user: User) {
//     if(user.age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function greet(user: User) {
//     console.log(`Hi there ${user.firstName}`);
    
// }

// isLegal({
//     firstName: "Ishav",
//     lastName: "Singh",
//     age: 21
// })

// greet({
//     firstName: "Ishav",
//     lastName: "Singh",
//     age: 21
// })

// let x: number = 1;
// console.log(x);

// function greet(firstName: string) {
//     console.log("Hello " + firstName);
// }

// greet("ishav")

// function sum(a: number, b: number): number {
//     return a + b;
// }

// const value = sum(3, 2);
// console.log(value);

// function isLegal(age: number): boolean {
//     if(age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const value = isLegal(9);
// console.log(value);

// function runAfter1S(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// runAfter1S(function() {
//     console.log("hi there");
// })