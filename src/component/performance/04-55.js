import React from "react";
import memoize from "lodash/memoize";
/*
  코드 4-55 메모이제이션 사용예
  # fibonacci에 memoization 적용예
    * https://www.sitepoint.com/implementing-memoization-in-javascript/

*/

function sort(arr) {
  debugger;
  let sortedArr = arr.sort();
  console.log("### sort functions");
  return sortedArr;
}

const sort2 = memoize(sort);
const inputArr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const output1 = sort2(inputArr1);
const output2 = sort2(inputArr1);
console.log(output1 === output2); // true
const inputArr2 = [10, 20, 30, 10, 200, 300, 1, 23, 4, 1, 23];
const output3 = sort2(inputArr2);
console.log(output1 !== output3); // true
debugger;

// # memoize code
// function memoize(func, resolver) {
//   if (
//     typeof func != "function" ||
//     (resolver != null && typeof resolver != "function")
//   ) {
//     throw new TypeError(FUNC_ERROR_TEXT);
//   }
//   var memoized = function () {
//     var args = arguments,
//       key = resolver ? resolver.apply(this, args) : args[0],
//       cache = memoized.cache;
//      //cache에서 확인
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     cache에 담기
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   };
//   memoized.cache = new (memoize.Cache || MapCache)();
//   return memoized;
// }

// Expose `MapCache`.
// memoize.Cache = MapCache;

// module.exports = memoize;

class MyComponent extends React.Component {
  render() {
    return <div> memoize </div>;
  }
}

export default MyComponent;
