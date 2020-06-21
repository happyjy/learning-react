import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*
  ⭐️ 코드 5-10 훅을 사용하면 로직별로 코드를 모을 수 있다.
  * 코드 5-06, 08 API호출, windowWidth 코드를 합쳐보자!
  * ⭐️ 각각의 로직이 다른 useEffect에 있어 가독성이 좋다.
*/

export default ({ userId = 'jyoon ' }) => {
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

	const [ width, setWidth ] = useState(window.innerWidth);
	useEffect(() => {
		const onResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', onResize); //POINT1:
		// POINT2:
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []); // POINT3:

	return (
		<div>
			<div>
				<h1> 설명 </h1>
				<p> ⭐️ 코드 5-10 훅을 사용하면 로직별로 코드를 모을 수 있다.</p>
				<p>* 코드 5-06, 08 API호출, windowWidth 코드를 합쳐보자!</p>
				<p>* ⭐️ 각각의 로직이 다른 useEffect에 있어 가독성이 좋다.</p>
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
				<div>{`width is ${width}`}</div>
			</div>
		</div>
	);
};
