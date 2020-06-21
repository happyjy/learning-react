import React, { useMemo, useState } from "react";
// import { runExpensiveJob } from "./util";
/*
  코드 5-23 useMemo 훅의 사용 예

  * 계산량이 많은 함수의 반환값을 재활용하는 용도로 사용

  * useMemo 훅의 첫번째 매개변수로 함수를 입력
  * useMemo 훅은 이 함수가 반환한 값을 기억
  
  * useMemo 훅의 두번째 매개변수로 입력된 배열의 값이 변경되지 않으면 이전에 반환된 값을 재사용
  * 만약 배열의 값이 변경됐으면 첫번째 배개 변수로 입력된 함수를 실행하고 그 반환값을 기억.

*/

export default function () {
  // const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);
  const [value1, setValue1] = useState("");
  // const value = useMemo(() => value1, value1);
  // console.log("### useMemo return Value: ", value);

  const onChangeInput = (e) => {
    setValue1(e.target.value);
    console.log(value1);
  };

  return (
    <div>
      <div>
        <h1> 설명 </h1>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        <input type="input" value={value1} onChange={onChangeInput}></input>
        {/* <p>{`value is ${value}`}</p> */}
      </div>
    </div>
  );
}
