import { useEffect, useRef } from 'react';

/*
  # ⭐️ usePrevious 설명(import로 뺌)
    * 코드 5-22 참고 
    POINT 1. 매개변수로 현재 값을 받는다. 
    POINT 2. 이전 값을 기억하기 위해 useRef 훅을 이용
    POINT 3. 렌더링 후 현재 값을 이전 값으로 만든다.
    POINT 4. 이전 값을 반환 
 */
//POINT1
export default function(value) {
	debugger; //step3
	console.log('### usePrevious: ');

	//POINT2
	const valueRef = useRef();
	//POINT3
	useEffect(
		() => {
			valueRef.current = value;
		},
		[ value ]
	);
	//POINT4
	return valueRef.current || '';
}
