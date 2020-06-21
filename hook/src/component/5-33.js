import React, { useState, useEffect } from 'react';
import useOnFirstRender from './5-30_1';
// import useOnFirstRender from './5-33_1';
/*
  # 코드 5-33 useOnFirstRender 커스텀 훅
    * 코드 5-32 POINT2 부분을 커스텀 훅을 생성(자주 사용한다는 가정하에)
    * useOnFirstRender 커스텀 훅 사용 부분
 */

function callApi() {
	console.log('### Api function');
}

function Profile({ firstName, lastName }) {
	const [ name, setName ] = useState(`${firstName} ${lastName}`);
	useOnFirstRender(callApi);
	return (
		<div>
			<div>
				<h1> 설명 </h1>
				<p> # 코드 5-33 useOnFirstRender 커스텀 훅</p>
				<p> * 코드 5-32 POINT2 부분을 커스텀 훅을 생성(자주 사용한다는 가정하에)</p>
				<p> * useOnFirstRender 커스텀 훅 사용 부분</p>
			</div>
			<hr />
			<div>
				<h1> 예제 </h1>
				this is my fullName: {name}
			</div>
		</div>
	);
}

export default function() {
	return (
		<div>
			<Profile firstName='jaeYoon' lastName='Yoon' />
		</div>
	);
}
