import React, { useState, useRef } from 'react';
/*
  # 코드 5-32 constructor 메서드를 훅으로 구현하기
    * 클래스 컴포넌트에서 constructor는 주로 속성값으로부터 초기 상탯값을 계산한느 용도로 사용
    * componentDidMount보다 좀 더 빠르게 작업을 처리하는 용도로 사용
    * 아래 예제는 constructor를 훅에서 작성하는 방법이다.

    * 코드 설명
      * POINT1. 
        - 속성값으로 부터 계산최 초기 상탯값은 useState의 인수로 사용
      * POINT2. 
        - 컴포넌트 최초 호출 시에만 callApi함수를 호출하기 위해서 useRef 훅을 이용(코드 5-22 참고)
        - 2번 로직이 자주 사용된다면 커스텀 훅을 만들어서 사용가능 (5.33예제 확인)
*/

function callApi() {
	console.log('### Api function');
}

function Profile({ firstName, lastName }) {
	//POINT1
	const [ name, setName ] = useState(`${firstName} ${lastName}`);

	//POINT2
	const isFirstRef = useRef(true);
	//POINT2
	if (isFirstRef.current) {
		isFirstRef.current = false;
		callApi();
	}

	return (
		<div>
			<div>
				<h1> 설명 </h1>
				<p># 코드 5-32 constructor 메서드를 훅으로 구현하기</p>
				<p>콘솔에 callApi를 했는지 확인해보세요 </p>
			</div>
			<hr />
			<div>
				<h1> 예제 </h1>
				this is my fullName: {name}
			</div>
		</div>
	);
}

// export default Profile;
export default function() {
	return (
		<div>
			<Profile firstName='jaeYoon' lastName='Yoon' />
		</div>
	);
}
