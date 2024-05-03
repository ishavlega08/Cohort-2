// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log(sum);

// function square(n){
//     return n*n
// }

// function cube(n){
//    return n * n * n
// }

// function sumOfSquares(a, b){
//     const val1 = square(a)
//     const val2 = square(b)

//     return val1 + val2;
// }

// function sumOfCubes(a, b){
//     const val1 = cube(a)
//     const val2 = cube(b)

//     return val1 + val2;
// }

// console.log(sumOfSquares(2, 3));
// const ans = sumOfCubes(2, 2)
// console.log(ans);

// callback functions
// function squre(n){
//    return n * n
// }

// function cube(n){
//     return n * n * n
// }

// function sumOfSomething(a, b, callback){
//     const val1 = callback(a)
//     const val2 = callback(b)

//     return val1 + val2
// }

// const ans = sumOfSomething(2, 2, squre)
// console.log(ans);

// const ans = sumOfSomething(2, 2, cube)
// console.log(ans);

// anonymous functions
function sumOfSomething(a, b, callback){
    console.log(a);
    console.log(callback);

    const val1 = callback(a)
    const val2 = callback(b)

    return val1 + val2
}

const ans = sumOfSomething(2, 2, function (n){
    return n * n * n
})
console.log(ans);