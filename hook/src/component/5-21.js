import React, { useRef } from 'react';
/*
  코드 5-21 useRef 훅 사용하기
  
  * 돔요소 접근 방법 
    - 클래스형 컴포넌트: createRef 함수 사용
    - 함수형 코포넌트:  useRef 훅 사용
*/

export default function() {
	const inputEl = useRef(null);
	// const inputEl = useRef("최기화");
	const onClick = () => {
		console.log('### inputEl value: ', inputEl);
		if (inputEl.current) {
			inputEl.current.focus();
		}
	};
	return (
		<div>
			<div>
				<h1> 설명 </h1>
				<p> * 돔요소 접근 방법 </p>
				<p> - 클래스형 컴포넌트: createRef 함수 사용</p>
				<p> - ⭐️ 함수형 코포넌트: useRef 훅 사용</p>
			</div>
			<hr />
			<div>
				<h1> 예제 </h1>
				<div> 버튼 클릭하면 input box에 focus가 갑니다.</div>
				<input ref={inputEl} type='text' />
				<button onClick={onClick}>Focus the text</button>
			</div>
		</div>
	);
}
