import React, { useRef } from 'react';
import Profile from './5-28';
/*
  # 코드 5-29 부모 컴포넌트에서 자식 컴포넌트 함수 호출하기
    * ⭐️ Profile 컴포넌트의 속성 값으로 ref 객체를 전달한다.
    * useRef함수 return value
      - useImperativeHandle 함수 두번째 변수 함수의 return value(함수가 등록된 dictionary object)
    * add Age 클릭시 ChildComponent의 age가 5씩 증가 합니다.
*/
function Parent() {
	const profileRef = useRef();
	const onClick = () => {
		if (profileRef.current) {
			console.log('### useRef객체: ', profileRef);
			console.log('### useRef객체 current 속성 name length: ', profileRef.current.getNameLength());
			profileRef.current.addAge(5);
		}
	};
	return (
		<div>
			<Profile ref={profileRef} />
			<hr />
			<hr />
			<h1> Parent Component </h1>
			<div>
				<h2> 설명 </h2>
				<p> # 코드 5-29 부모 컴포넌트에서 자식 컴포넌트 함수 호출하기</p>
				<p> * useRef함수 return value</p>
				<p> - - useImperativeHandle 함수 두번째 변수 함수의 return value(함수가 등록된 dictionary object)</p>
				<p>* add Age 클릭시 ChildComponent의 age가 5씩 증가 합니다.</p>
			</div>
			<hr />
			<div>
				<h2> 예제 </h2>
				<button onClick={onClick}> add Age </button>
			</div>
		</div>
	);
}

export default Parent;
