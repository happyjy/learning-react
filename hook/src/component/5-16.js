import React, { useState } from "react";
/*
  코드 5-16 훅 사용 시 규칙을 위한반 경우
  * ⭐️ 1. 조건에 따라 호출하면 
    - 에러는 안나는데 순서가 보장 되지 않는다.
  * ⭐️ 2. for문 안에서는 아래와 같은 에러를 
    - React Hook "useState" may be executed more than once. Possibly because it is called in a loop. React Hooks must be called in the exact same order in every component render
  * ⭐️ 3. 일반 function 안에서 호출할 시 
    - React Hook "useState" is called in function "func" which is neither a React function component or a custom React Hook function
*/
export default function () {
  const [value, setValue] = useState(0);
  if (value === 0) {
    const [v1, setV1] = useState(0);
  } else {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);
  }

  // for (let i = 0; i < value; i++) {
  //   const [num, setNum] = useState(0);
  // }

  // function func() {
  //   const [num, setNum] = useState(0);
  // }

  return (
    <div>
      <p> 코드 5-16 훅 사용 시 규칙을 위한반 경우</p>
      <p> ⭐️ * 1. 조건에 따라 호출하면 </p>
      <p> - 에러는 안나는데 순서가 보장 되지 않는다.</p>
      <p> ⭐️ * 2. for문 안에서는 아래와 같은 에러를 </p>
      <p>
        - React Hook "useState" may be executed more than once. Possibly because
        it is called in a loop. React Hooks must be called in the exact same
        order in every component render
      </p>
      <p> ⭐️ * 3. 일반 function 안에서 호출할 시 </p>
      <p>
        - React Hook "useState" is called in function "func" which is neither a
        React function component or a custom React Hook function
      </p>
    </div>
  );
}
