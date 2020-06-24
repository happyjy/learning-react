import React, { useState } from 'react';
/*
  코드 5-01 useState 훅 사용하기
  ⭐️ * 컴포넌트 상탯값 관리
  ⭐️ * onChange 속성값으로 입력되는 함수는 렌더링이 될 때 마다 생성되므로 성능이 걱정됨으로 'useCallback' 훅 제공
  * 아래 예제 참고 
    - 코드 5-24 useCallback 훅이 필요한 예
    - 코드 5-25 useCallback 훅 사용하기
*/
export default () => {
	const [ name, setName ] = useState('');
	return (
		<div>
			<h1> 설명 </h1>
			<p>⭐️ * 컴포넌트 상탯값 관리</p>
			<p>⭐️ * onChange 속성값으로 입력되는 함수는 렌더링이 될 때 마다 생성되므로 성능이 걱정됨으로 'useCallback' 훅제공</p>

			<p> * 아래 예제 참고 </p>
			<p> -- 코드 5-24 useCallback 훅이 필요한 예</p>
			<p> -- 코드 5-25 useCallback 훅 사용하기</p>

			<hr />
			<h1> 예제 </h1>
			<p>{`# useState 테스트 - 나의 이름은 ${name}`}</p>
			<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
		</div>
	);
};
