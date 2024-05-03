// map, filter, arrow fns

function sum(a, b) {
  return a + b;
}

// arrow fn
const sum2 = (a, b) => {
  return a + b;
};

// const ans = sum(1, 2);
// console.log(ans);

// given an array, give me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5];

// solution
// const newArray = [];

// for(let i=0; i<input.length;i ++){
//     newArray.push(input[i] * 2);
// }

// console.log(newArray);

// other solution => using map
const ans = input.map((i) => {
  return i * 2;
});
// console.log(ans);

// filtering
// what if I tell u, given an input array, give me back all the even values from it

// solution
// const newArray = []
// for(let i=0; i<input.length; i++){
//     if(input[i] % 2 == 0){
//         newArray.push(input[i]);
//     }
// }
// console.log(newArray);

// filter function
const filteringFn = input.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(filteringFn);