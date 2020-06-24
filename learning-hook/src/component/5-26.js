import React, { useReducer } from 'react';
/*
  코드 5-26 useReducer 훅의 사용 예
  * POINT1 
    - 리덕스의 리듀서와 같은 방식으로 작성한 리듀서 함수
  * POINT2 
    - useReducer 훅의 매개변수로 앞에서 작성한 리듀서와 초기 상탯값을 입력
    - useReducer 훅은 상탯값과 dispatch 함수를 차례대로 반환
  * POINT3 
    - 리덕스의 dispatch 함수와 같은 방식으로 사용
  
*/
//POINT1
const INITIAL_STATE = { name: 'empty', age: 100 };
//POINT1
function reducer(state, action) {
	switch (action.type) {
		case 'setName':
			return { ...state, name: action.name };
		case 'setAge':
			return { ...state, age: action.age };
		default:
			return state;
	}
}

export default function() {
	//POINT2
	const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);
	return (
		<div>
			<div>
				<h1> 설명 </h1>
			</div>
			<hr />
			<div>
				<h1> 예제 </h1>
				<p>{`name is ${state.name}`}</p>
				<p>{`age is ${state.age}`}</p>
				<input
					type='text'
					value={state.name}
					onChange={(e) => {
						//POINT3
						dispatch({ type: 'setName', name: e.currentTarget.value });
					}}
				/>
				<input
					type='number'
					value={state.age}
					onChange={(e) => {
						dispatch({ type: 'setAge', age: e.currentTarget.value });
					}}
				/>
			</div>
		</div>
	);
}
