// const a = 1;
// a = 2;
// console.log(a);

// let firstName = "ishav";
// let age = 21;
// let isMarried = true;

// // raw string and variables to created long string
// // console.log("This person name is " + firstName + " and their age is " + age);

// // if else
// if(isMarried){
//     console.log(firstName + " is married");
// } else{
//     console.log(firstName + " is not married");
// }

// loops
// let answer = 0;

// for(let i=0; i<=100; i++){
//     answer += i;
// }

// console.log(answer);

// problem set 1 
// 1
// let firstName = "Ishav";
// let lastName = "Lega";

// console.log("Hello " + firstName + " " + lastName);

// 2
// let firstName = "Ishav";
// let gender = "male";

// if(gender == "male"){
//     console.log("Hello Mr. " + firstName);
// }
// else if(gender == "female"){
//     console.log("Hello Ms. " + firstName);
// }  

// 3
// let answer = 0;

// for(let i=0; i<=1000; i++){
//     answer += i;
// }

// console.log(answer);

// arrays
// let person1 = "ishav";
// let person2 = "rahul";
// let person3 = "harkirat";

// const personArray = ["ishav", "rahul", "harkirat"];

// const ages = [21, 22, 23, 24, 25, 26, 28];

// for(let i=0; i<ages.length; i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i]);
//     }
// }

// const personArray = ["ishav", "priya", "raman"];
// const genderArray = ["male", "female", "male"];

// for(let i=0; i<personArray.length; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }

// objects
// const user1 = {
//     firstName: "ishav",
//     gender: "male"
// }

// // accessing objects
// console.log(user1["gender"]);

// array of objects
// const allUsers = [{
//     firstName: "ishav",
//     gender: "male"
// }, {
//     firstName: "raman",
//     gender: "male"
// }, {
//     firstName: "priya",
//     gender: "female"
// }]

// for(let i=0; i<allUsers.length; i++){
//     if(allUsers[i]["gender"] == "male"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

// problem set 2
// 1
// const numArray = [50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i=0; i<numArray.length; i++){
//     if(numArray[i]%2 == 0){
//         console.log(numArray[i]);
//     }
// }

// 2
// let maxNum = -1;
// for(let i=0; i<numArray.length; i++){
//     if(numArray[i] > maxNum){
//         maxNum = numArray[i];
//     }
// }

// console.log(maxNum);

// 3
// const allUsers = [{
//     firstName: "ishav",
//     gender: "male"   
// }, {
//     firstName: "rahul",
//     gender: "male"
// }, {
//     firstName: "sara",
//     gender: "female"
// }]

// for(let i=0; i<allUsers.length; i++){
//     if(allUsers[i]["gender"] == "male"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

// 4
// const numArray = [1, 2, 3, 4, 5];

// for(let i=numArray.length; i>=0; i--){
//     console.log(numArray[i]);
// }

// functions
// function sum(a, b) {
//     return a + b;
// }

// const value = sum(1, 2)
// console.log(value); 

// function callback
// function sum(num1, num2, fnToCall){
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data){
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// // passing a function as an argument
// const ans = sum(1, 2, displayResultPassive);
// // these are called callbacks

function calculateArithmetic(a, b, arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a, b)
    return ans;
}

function sum(a, b){
    return a + b;
}

const value = calculateArithmetic(1, 2, sum);
console.log(value);