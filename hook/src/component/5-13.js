import React, { useState } from 'react';
import useWindowWidth from './customHook/useWindowWidth';
// import useWindowWidth from './5-12';
/*
  코드 5-13 useWindowWidth 훅 사용하기
  * 창너비 조절시 다시 렌더링되어 화면에 나타난다.
  * ⭐️ 커스텀 훅은 리액트의 내장 훅과 같은 방식으로 사용될 수 있다. 
  * 커스텀 훅과 내장 훅을 함께 사용하는 것도 가능
  
  * ⭐️ 예로 부터 useWindowWidth 훅에 사용으로 미루어 커스텀 훅의 장점
    - 공통된 동작을 따로 빼서 다른 컴포넌트에도 똑같이 적용할 수 있겠다. 
  * ⭐️ componentDidMount 시점부터 적용하기기 위해서는 어떻게 해야할까? 

  * hook 사용 예
    - https://daveceddia.com/useeffect-hook-examples/
      : Not Quite Lifecycles
      : Prevent useEffect From Running Every Render
      : Only Run on Mount and Unmount
      : Focus On Mount
      : Fetch Data With useEffect
      : Re-fetch When Data Changes
      : A Hundred And One Uses
      : Try Out useEffect

*/

export default function() {
	const width = useWindowWidth();
	const [ name, setName ] = useState('');
	return (
		<div>
			<div>
				<h1> 설명 </h1>
				<p> * 창너비 조절시 다시 렌더링되어 화면에 나타난다.</p>
				<p> * ⭐️ 커스텀 훅은 리액트의 내장 훅과 같은 방식으로 사용될 수 있다. </p>
				<p> * 커스텀 훅과 내장 훅을 함께 사용하는 것도 가능</p>
				<p> </p>
				<p> * ⭐️ 예로 부터 useWindowWidth 훅에 사용으로 미루어 커스텀 훅의 장점</p>
				<p> - 공통된 동작을 따로 빼서 다른 컴포넌트에도 똑같이 적용할 수 있겠다. </p>
				<p> * ⭐️ componentDidMount 시점부터 적용하기기 위해서는 어떻게 해야할까? </p>
				<p> * hook 사용 예</p>
				<p> - https://daveceddia.com/useeffect-hook-examples/</p>
				<p> : Not Quite Lifecycles</p>
				<p> : Prevent useEffect From Running Every Render</p>
				<p> : Only Run on Mount and Unmount</p>
				<p> : Focus On Mount</p>
				<p> : Fetch Data With useEffect</p>
				<p> : Re-fetch When Data Changes</p>
				<p> : A Hundred And One Uses</p>
				<p> : Try Out useEffect</p>
			</div>
			<hr />
			<div>
				<h1> 예제 </h1>
				<p>{`name is ${name}`}</p>
				<p>{`winddow width is ${width}`}</p>
				{width < 600 && <div>width가 600보다 작아요</div>}
				{width >= 600 && <div>width가 600보다 크거나 같아요</div>}
				<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
			</div>
		</div>
	);
}
