import React, { useState, useEffect } from "react";
import useHasMounted from "./customHook/useHasMounted";
/*
  코드 5-14 useHasMounted 커스텀 훅
  * 컴포넌트 마운트 여부를 알려주는 훅이다
  * ⭐️ useHasMounted 훅은 컴포넌트가 마운트 된 후에 참 반환
  * ⭐️ useEffect 훅의 두 번째 매개변수에 빈 배열을 넣었기 때문에 업데이트 하는 경우에는 setHasMounted 함수가 호출 되지 않는다.
  * 
  * ⭐️ useEffect 두번째 매개변수 '[]'의 의미 
    - 컴포넌트가 마운트 될때만 첫번째 매개변수 함수 호출
    - 컴포넌트가 언마운트 될때 첫번째 매개변수 함수 return 함수 호출
*/

// export function useHasMounted() {
//   const [hasMounted, setHasMounted] = useState(false);
//   useEffect(() => setHasMounted(true), []);
//   return hasMounted;
// }

export default function () {
  // const [hasMounted, setHasMounted] = useState(false);
  // useEffect(() => setHasMounted(true), []);
  const hasMounted = useHasMounted();
  return (
    <div>
      <div>
        <h1> 설명 </h1>
        <p> * 컴포넌트 마운트 여부를 알려주는 훅이다 </p>
        <p> * ⭐️ useHasMounted 훅은 컴포넌트가 마운트 된 후에 참 반환</p>
        <p>
          {" "}
          * ⭐️ useEffect 훅의 두 번째 매개변수에 빈 배열을 넣었기 때문에
          업데이트 하는 경우에는 setHasMounted 함수가 호출 되지 않는다.
        </p>
        <p> * ⭐️ useEffect 두번째 매개변수 '[]'의 의미 </p>
        <p> - 컴포넌트가 마운트 될때만 첫번째 매개변수 함수 호출</p>
        <p> - 컴포넌트가 언마운트 될때 첫번째 매개변수 함수 return 함수 호출</p>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        <p>{`this is hasMounted: ${hasMounted}`}</p>
      </div>
    </div>
  );
}
