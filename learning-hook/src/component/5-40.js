import React, { useReducer } from 'react';
/*
  # 코드 5-40 useReducer 훅을 이용해서 forceUpdate 메서드를 구현하기
    * forceUpdate 메서드의 사용은 지양해야 하지만 필요한 경우 훅으로 구현할 수 있다.

    POINT1. forceUpdate 함수를 호출하면 상탯값이 항상 변경되므로 클래스형 컴포넌트의 forceUpdate 메서드 처럼 동작한다.
*/

function MyComponent() {
	//POINT1
	const [ _, forceUpdate ] = useReducer((s) => s + 1, 0);
	function onClick() {
		forceUpdate();
	}
}

export default function() {
	return (
		<div>
			<div>
				<h1> 설명 </h1>
				<p> # 코드 5-40 useReducer 훅을 이용해서 forceUpdate 메서드를 구현하기</p>
				<p> * forceUpdate 메서드의 사용은 지양해야 하지만 필요한 경우 훅으로 구현할 수 있다.</p>
				<p />
				<p>
					POINT1.
					<p>const [_, forceUpdate] = useReducer((s) => s + 1, 0);</p>
					forceUpdate 함수를 호출하면 상탯값이 항상 변경되므로 클래스형 컴포넌트의 forceUpdate 메서드 처럼 동작한다.
				</p>
			</div>
		</div>
	);
}
