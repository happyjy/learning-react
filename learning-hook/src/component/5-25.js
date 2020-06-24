import React, { useState, useCallback } from 'react';
/*
  코드 5-25 useCallback 훅 사용하기

  * 5-24에서 onSave 속성값으로 전달했던 것과 같은 함수를 useCallback 훅의 첫번째 매개변수로 입력한다.
  * ⭐️ 두번째 매개변수로 전달한 배열의 값이 변경되지 않으면 이전에 생성한 함수가 재사용된다. 
  * ⭐️ 따라서 name과 age값이 변경되지 않으면 UserEdit 컴포넌트의 onSave 속성값으로 항상 같은 함수가 전달된다.
*/
function UserEdit({ setName, setAge }) {
	setTimeout(() => {
		setName('chageName');
		setAge(100);
	}, 2000);
	return <div>THIS IS USEREDIT COMPONENT</div>;
}

function saveToServer({ name, age }) {
	console.log('### saveToServer function: ', { name, age });
}

export default function() {
	const [ name, setName ] = useState('name');
	const [ age, setAge ] = useState(10);
	//POINT1
	const onSave = useCallback(() => saveToServer(name, age), [ name, age ]);

	return (
		<div>
			<div>
				<h1> 설명 </h1>
				<p> * 5-24에서 onSave 속성값으로 전달했던 것과 같은 함수를 useCallback 훅의 첫번째 매개변수로 입력한다.</p>
				<p> * ⭐️ 두번째 매개변수로 전달한 배열의 값이 변경되지 않으면 이전에 생성한 함수가 재사용⭐️ 된다. </p>
				<p> * 따라서 name과 age값이 변경되지 않으면 UserEdit 컴포넌트의 onSave 속성값으로 항상 같은 함수가 전달된다. </p>
			</div>
			<hr />
			<div>
				<h1> 예제 </h1>
				<p>{`name is ${name}`}</p>
				<p>{`age is ${age}`}</p>
				<UserEdit
					// onSave={() => saveToServer(name, age)}
					onSave={onSave}
					setName={setName}
					setAge={setAge}
				/>
			</div>
		</div>
	);
}
