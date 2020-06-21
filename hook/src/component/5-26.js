import React, { useReducer } from "react";
/*
  코드 5-26 useReducer 훅의 사용 예
  
*/
const INITIAL_STATE = { name: "empty", age: 100 };
function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      return { ...state, age: action.age };
    default:
      return state;
  }
}

export default function () {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <div>
        <h1> 설명 </h1>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        <p>{`name is ${state.name}`}</p>
        <p>{`age is ${state.age}`}</p>
        <input
          type="text"
          value={state.name}
          onChange={(e) => {
            dispatch({ type: "setName", name: e.currentTarget.value });
          }}
        />
        <input
          type="number"
          value={state.age}
          onChange={(e) => {
            dispatch({ type: "setAge", age: e.currentTarget.value });
          }}
        />
      </div>
    </div>
  );
}
