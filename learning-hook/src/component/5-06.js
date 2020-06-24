import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*
  ⭐️ 코드 5-6 useEffect 훅에서 API 호출하기
  * ⭐️ usdEffect 훅의 두번째 매개변수로 배열을 입력하면, 배열의 값이 변경되는 경우에만 함수가 호출
  * ⭐️ 여기서는 userId 값이 변경되는 경우에만 API 통신을 하도록 설정
*/
function Profile({ userId }) {
	const [ user, setUser ] = useState(null);

	useEffect(
		() => {
			axios('https://api.github.com/users/happyjy').then((Response) => {
				console.log(Response);
				setUser(Response.data);
			});
		},
		[ userId ]
	);

	return (
		<div>
			<div>
				<h1> 설명 </h1>
				<p>⭐️ 코드 5-6 useEffect 훅에서 API 호출하기</p>
				<p> * ⭐️ usdEffect 훅의 두번째 매개변수로 배열을 입력하면, 배열의 값이 변경되는 경우에만 함수가 호출</p>
				<p> * ⭐️ 여기서는 userId 값이 변경되는 경우에만 API 통신을 하도록 설정</p>
			</div>
			<hr />
			<div>
				<h1> 예제 </h1>
				<div>{!user && <p>사용자 정보를 가져오는 중 ...</p>}</div>
				<div>
					{user && (
						<p>
							{user.name}/ {user.id}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Profile;
