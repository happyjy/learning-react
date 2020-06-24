import React, { useState, useEffect } from 'react';
/*
  ⭐️ 코드 5-5 useEffect 훅의 사용예
  * 생명주기 함수 역할을 함
  * ⭐️ 클래스형 컴포넌트의 각 생명 주기 메서드에 일대일로 대응하는 훅이 있는 것은 아니다 
  * 리액트 팀에서는 기존의 생명 주기 메서드에 문제가 있다고 판다. 
    - ⭐️ 한가지 문제는 서로 연관성이 없는 여러 기능이 하나의 생명주기 메서드에 섞이게 된 다는 점
    - useEffect 훅을 이용하면 비슷한 기능을 한 곳으로 모을 수 있어 가독성 좋아진다.
  
  * 예제 설명 
    - API를 호출하는 기능과 이벤트 처리 함수를 등록하고 해제하는 기능를 각각 훅으로 구현
    - 두 기능을 하나로 합쳤을 때 함수형 컴포넌트와 클래스형 컴포넌트에서 어떤 모습이 되는지 예제 코드 5-5, 5-6에서 비교 

  * ⭐️ useEffect에 있는 코드는 클래스형 컴포넌트에서 어떻게 구현할까? 
    - 클래스형 컴포넌트의 componentDidMount, componentDidUpdate 양쪽 메서드에 추가하면 가은 기능을 하게 된다.
  * ⭐️ 버튼을 누르면? 
    - 다시 렌더링 되고, 렌더링이 끝나면 useEffect 훅에 입력된 함수가 호출
*/
export default () => {
	const [ count, setCount ] = useState(0);
	//POINT
	useEffect(() => {
		document.getElementById('count').innerHTML = `업데이트 횟수: ${count}`;
	});

	return (
		<div>
			<div>
				<h1> 설명 </h1>
				<p> 코드 5-5 useEffect 훅의 사용예</p>
				<p> * 생명주기 함수 역할을 함</p>
				<p> * ⭐️ 클래스형 컴포넌트의 각 생명 주기 메서드에 일대일로 대응하는 훅이 있는 것은 아니다 </p>
				<p> * 리액트 팀에서는 기존의 생명 주기 메서드에 문제가 있다고 판다. </p>
				<p> - ⭐️ 한가지 문제는 서로 연관성이 없는 여러 기능이 하나의 생명주기 메서드에 섞이게 된 다는 점</p>
				<p> - useEffect 훅을 이용하면 비슷한 기능을 한 곳으로 모을 수 있어 가독성 좋아진다.</p>
				<p> </p>
				<p> * 예제 설명 </p>
				<p> - API를 호출하는 기능과 이벤트 처리 함수를 등록하고 해제하는 기능를 각각 훅으로 구현</p>
				<p> - 두 기능을 하나로 합쳤을 때 함수형 컴포넌트와 클래스형 컴포넌트에서 어떤 모습이 되는지 예제 코드 5-5, 5-6에서 비교 </p>
				<p />
				<p> * ⭐️ useEffect에 있는 코드는 클래스형 컴포넌트에서 어떻게 구현할까? </p>
				<p> - 클래스형 컴포넌트의 componentDidMount, componentDidUpdate 양쪽 메서드에 추가하면 가은 기능을 하게 된다.</p>
				<p> * ⭐️ 버튼을 누르면? </p>
				<p> - 다시 렌더링 되고, 렌더링이 끝나면 useEffect 훅에 입력된 함수가 호출</p>
			</div>
			<hr />
			<div>
				<h1> 예제 </h1>
				<div>
					<label id='count' />
				</div>
				<button onClick={() => setCount(count + 1)}>increase</button>
			</div>
		</div>
	);
};
