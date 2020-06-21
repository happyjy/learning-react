import React, { useState } from 'react';
import usePrevious from './customHook/usePrevious';
/*
  # 코드 5-34 usePrevious 커스텀 훅
    * 이전 상탯값이나 이전 속성값이 필요할때 유용한 커스텀 훅
    * useEffect 훅은 최초 렌더링 후에도 호출되므로 이를 피하기 위해서 useRef 훅을 이용
  
    * componentDidUpdate 메서드는 매개변수로 이전 상탯값과 이전 속성값을 전달
    * 이는 리액트가 클래스형 컴포넌트의 인스턴스에 이전 값을 저장해서 제공해주기 때문
    * 함수형 컴포넌트는 인스턴스가 없기 때문에 이전 값이 필요하다면 useRef 훅으로 직접 관리해야 한다.
    * 이전 상탯값이나 이전 속성값이 필요할때 유용한 커스텀 훅
    
    * ⭐️ usePrevious 설명(import로 뺌)
    * 코드 5-22 참고 
    POINT 1. 매개변수로 현재 값을 받는다. 
    POINT 2. 이전 값을 기억하기 위해 useRef 훅을 이용
    POINT 3. 렌더링 후 현재 값을 이전 값으로 만든다.
    POINT 4. 이전 값을 반환
  
  # 예제 테스트 방법
    * input에 입력 해보자 
    
  # ⭐️ input에 입력시 수행 순서 
    * debugger 순서로 callstack순서를 확인해보자(step 1,2,3 확인) 
    * ⭐️ useState의 setxxx function이후 가 일어나면 
      setxxx functino이 있는 function 전체 다시 수행된다. 
      그리고 
      useEffect가 있다면 useEffect가 비동기로 수행된다.
*/

//POINT1
// function usePrevious(value) {
//   debugger; //step3
//   console.log("### usePrevious: ");

//   //POINT2
//   const valueRef = useRef();
//   //POINT3
//   useEffect(() => {
//     valueRef.current = value;
//   }, [value]);
//   //POINT4
//   return valueRef.current || "";
// }

export default function() {
	debugger; //step2
	const [ value, setValue ] = useState('');
	const previousValue = usePrevious(value);

	const handleChange = (e) => {
		debugger; //step1
		console.log('### handleChange: ');
		// console.log(e.target.value);
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		console.log('### handleSubmit: ');
		e.preventDefault();
	};
	return (
		<div>
			<div>
				<h1> 설명 </h1>
			</div>
			<hr />
			<div>
				<h1> 예제 </h1>
				<div>
					<label>{`this is previousValue: ${previousValue}`}</label>
					<br />
					<label>{`this is currentValue: ${value}`}</label>
				</div>
				<div>
					<form onSubmit={handleSubmit}>
						<input type='text' value={value} onChange={handleChange} />
						<br />
						<button type='submit'>enter</button>
					</form>
				</div>
			</div>
		</div>
	);
}
