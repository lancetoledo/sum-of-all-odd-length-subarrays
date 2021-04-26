// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let array = [2, 4, 5, 1, 3];

//  BRUTE FORCE SOLUTION
// Time complexity: O(n)**3
// function sumOddSubArr(arr) {
//   //Intialized variable to count the sum of subarrays
//   let sum = 0;
//   //Outer loop that gets the odd numbers relative to the arr.length
//   for (let odd = 1; odd <= arr.length; odd += 2) {
//     //Use the odd to
//     for (let i = 0; i + odd <= arr.length; i++) {
//       let subArr = arr.slice(i, i + odd);
//       console.log(subArr,i,odd)
//       for (let j = 0; j < subArr.length; j++) {
//         sum += subArr[j];
//       }
//     }
//   }
//   return sum;
// }

// console.log(sumOddSubArr(array));

// Efficient SOLUTION
// Time complexity: O(n)
function sumOddSubArr(arr) {
  let sum = 0;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let multiple = Math.round(((len - i) * (i + 1)) / 2);
    sum += arr[i] * multiple;
    console.log(multiple);
  }
  return sum;
}

console.log(sumOddSubArr(array));
