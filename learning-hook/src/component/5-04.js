import React, { useState } from "react";
/*
  코드 5-4 여러 개의 useState 훅사용하기
  * 두 상태 값을 하나의 객체로 관리 가능
  * ⭐️ setState메서드는 기존 상탯값과 입력된 값을 병합하지만 
  * ⭐️ useState 훅은 이전 상탯값을 지기 때문에 "...state"와 같은 코드가 필요.
  * ⭐️ 상탯값을 하나의 객체로 관리하는 경우를 위해 'useReducer' 훅이 제공
*/
export default () => {
  const [state, setState] = useState({ name: "", age: 0 });

  return (
    <div>
      <h1> 설명 </h1>
      <p>코드 5-4 여러 개의 useState 훅사용하기</p>
      <p> * 두 상태 값을 하나의 객체로 관리 가능</p>
      <p> * ⭐️ setState메서드는 기존 상탯값과 입력된 값을 병합하지만 </p>
      <p>
        {" "}
        * ⭐️ useState 훅은 이전 상탯값을 지기 때문에 "...state"와 같은 코드가
        필요.
      </p>
      <p>
        {" "}
        * ⭐️ 상탯값을 하나의 객체로 관리하는 경우를 위해 'useReducer' 훅이 제공
      </p>
      <hr></hr>
      <h1> 예제 </h1>
      <p>{`나의 이름은 ${state.name}, 나이는 ${state.age}`}</p>
      이름 입력:{" "}
      <input
        type="text"
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <br></br>
      나이 입력:{" "}
      <input
        type="text"
        value={state.age}
        onChange={(e) => setState({ ...state, age: e.target.value })}
      />
    </div>
  );
};
