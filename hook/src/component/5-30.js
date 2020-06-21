import React, { useState, useEffect, useDebugValue } from "react";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(true);

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? "Online" : "Offline");

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    // };
  });

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}

// import React, { useState, useDebugValue } from "react";
/*
  # 코드 5-30 useDebugValue 훅을 사용하는 코드
    * 개발 편의를 위해 제공되는 훅
    * 커스텀 훅의 내부 상태를 관찰 할 수 있따. 
    * 다음 예제는 useToggle 커스텀 훅에서 디버깅을 위해 sueDebuggValue훅을 사용하는 코드
    * 리액트 개발자 도구에서 확인 할 수 있다.
*/

// function useToggle(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   console.log({ value, setValue });
//   const onToggle = () => setValue(!value);
//   useDebugValue(value ? "on" : "off");
//   return [value, onToggle];
// }

// export default useToggle;

// import React from "react";
// import { useToggle } from "./5-30_1";
// /*
//   # 코드 5-30 useDebugValue 훅을 사용하는 코드
//     * 개발 편의를 위해 제공되는 훅
//     * 커스텀 훅의 내부 상태를 관찰 할 수 있따.
//     * 다음 예제는 useToggle 커스텀 훅에서 디버깅을 위해 sueDebuggValue훅을 사용하는 코드
//     * 리액트 개발자 도구에서 확인 할 수 있다.
// */

// const [value, onToggle] = useToggle(true);

// function thirty() {

//   return (
//     <div>
//       <p> useToggle 테스트 </p>
//       {/* this is a value: {value}
//       <button onClick={onToggle}>토글토글</button> */}
//     </div>
//   );
// }

// export default thirty;
