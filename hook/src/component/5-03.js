import React, { useState } from 'react';
/*
  ⭐️ 코드 5-3 여러 개의 useState 훅사용하기
  * 필요한 만큼 useState 훅을 호출 할 수 있다. 
*/
export default () => {
	const [ name, setName ] = useState('');
	const [ age, setAge ] = useState(0);
	return (
		<div>
			<h1> 설명 </h1>
			<p>코드 5-3 여러 개의 useState 훅사용하기</p>
			<p>* 필요한 만큼 useState 훅을 호출 할 수 있다. </p>
			<hr />
			<h1> 예제 </h1>
			<p>{`나의 이름은 ${name}, 나이는 ${age}`}</p>
			이름 입력: <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
			<br />
			나이 입력: <input type='text' value={age} onChange={(e) => setAge(e.target.value)} />
		</div>
	);
};
