import { useRef, useEffect } from 'react';

/*
  # 코드 5-37 useOnUpdate 커스텀 훅
    * 마운트가 됐을때 넘겨 받은 function을 수행해주는 훅
*/
export default function(func) {
	const isMountedRef = useRef(false);
	useEffect(() => {
		if (isMountedRef.current) {
			func();
		} else {
			isMountedRef.current = true;
		}
	});
}
