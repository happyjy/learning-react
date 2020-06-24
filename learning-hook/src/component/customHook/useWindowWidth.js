import { useState, useEffect } from 'react';

// # 5-12 import 하는 곳에서 useWindowWidth 이름으로 사용할 수 있다.
export default function() {
	// width 설정 할때 useState에 초기 값 여부에 따라서 render 될때
	// const [width, setWidth] = useState(""); // POINT1
	const [ width, setWidth ] = useState(window.innerWidth); // POINT1
	// POINT1
	useEffect(() => {
		const onResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', onResize);
		console.log('### 5-12 > render...');
		return () => {
			console.log('### 5-12 > unmount...');
			window.removeEventListener('resize', onResize);
		};
	}, []);
	return width;
}
