import React, { useState, useDebugValue } from "react";
/*
  # 코드 5-30 useDebugValue 훅을 사용하는 코드
    * 개발 편의를 위해 제공되는 훅
    * 커스텀 훅의 내부 상태를 관찰 할 수 있따. 
    * 다음 예제는 useToggle 커스텀 훅에서 디버깅을 위해 sueDebuggValue훅을 사용하는 코드
    * 리액트 개발자 도구에서 확인 할 수 있다.
*/

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  console.log({ value, setValue });
  const onToggle = () => setValue(!value);
  useDebugValue(value ? "on" : "off");
  return [value, onToggle];
}

export default useToggle;
