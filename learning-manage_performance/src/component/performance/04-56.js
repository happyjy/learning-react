import React from "react";
import memoize from "lodash/memoize";
/*
  코드 4-56 메모이제이션의 잘못된 사용예
    * memoize 함수는 기본적으로 입력된 값이 변경됐는지 확인하기 위해 단순 비교를 한다.
    * 그래서 함수에 입력되는 변수가 객체라면 "불변객체"로 관리해야한다.
    * 그렇지 않으면 아래 예제와 같이 배열이 변경됐음에도 정렬 결과가 이전과 같은 뜻밖의 버그를 만난다.
*/

function sort(arr) {
  debugger;
  let sortedArr = arr.sort();
  console.log("###1 sort functions");
  return sortedArr;
}

const sort2 = memoize(sort);
const inputArr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const output1 = sort2(inputArr1);
//POINT: output1 배열의 불변성이 깨졌다.
inputArr1.push("123123123");
const output2 = sort2(inputArr1);
console.log(output1 === output2); // true

//POINT: output1 배열의 불변성 유지
// const output2 = sort2([...inputArr1, 123123123]);
// console.log(output1 === output2); // false
debugger;

class MyComponent extends React.Component {
  render() {
    return <div> memoize </div>;
  }
}

export default MyComponent;
