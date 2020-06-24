import React, { useState, useEffect } from 'react';
/*
  코드 5-17 여러 개의 훅 사용하기
  * ⭐️ 아래 예제로 "훅의 호출 순서가 같아야 하는 이유"를 알아보자.

  *⭐️  useState훅에 전달한 정보는 상탯값의 기본값밖에 없다. 
    => ⭐️ 리액트가 age, name상탯값을 구분할 수 있는 유일한 정보는 훅이 사용된 순서
  * POINT3에서 age 상탯값이 23으로 변경됐다. 
  * 만약 POINT1에서 조건문에 의해 실행되지 않는 경우에는 POINT2의 name값이 23이 되기 때문에 문제가 된다.
  * 추측!
    - ⭐️ useState하면 생성되는 데이터 들이 stack 으로 관리 된다라고 추측
    - 5-18 리액트 내부코드 예제를 보면 배열로 관리 되고 있다.

*/
export default function() {
	const [ age, setAge ] = useState(0); //POINT1
	const [ name, setName ] = useState(''); //POINT2

	useEffect(() => {
		setAge(31); //POINT3
	}, []);

	return (
		<div>
			<h1>설명</h1>
			<p> 코드 5-17 여러 개의 훅 사용하기</p>
			<p> * ⭐️ 아래 예제로 "훅의 호출 순서가 같아야 하는 이유"를 알아보자.</p>
			<p />
			<p> * ⭐️ useState훅에 전달한 정보는 상탯값의 기본값밖에 없다. </p>
			<p> => ⭐️ 리액트가 age, name상탯값을 구분할 수 있는 유일한 정보는 훅이 사용된 순서</p>
			<p> * POINT3에서 age 상탯값이 23으로 변경됐다. </p>
			<p> * 만약 POINT1에서 조건문에 의해 실행되지 않는 경우에는 POINT2의 name값이 23이 되기 </p>
			<p>때문에 문제가 된다.</p>
			<p> * 추측!</p>
			<p> - ⭐️ useState하면 생성되는 데이터 들이 stack 으로 관리 된다라고 추측</p>
			<p> - 5-18 리액트 내부코드 예제를 보면 배열로 관리 되고 있다.</p>
			<h1>예제</h1>
			this is age: {age}, this is name: {name}
		</div>
	);
}
