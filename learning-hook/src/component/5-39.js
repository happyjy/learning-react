import React, { useState, useEffect } from "react";
/*
  # 코드 5-39 getDerivedStateFromProps 정적 메서드를 훅으로 변경하기
    * speed 속성값이 변경되면 렌더링 과정에서 바로 상탯값을 변경
    * 리액트는 렌더 함수에서 상탯값을 변경하면 변경된 상탯값으로 렌더 함수를 다시 호출 한다.
    * getDerivedStateFromProps 정적 메서드를 사용한 방법 보다는 조금비효율 적인 측면이 있지만 돔을 변경하기 전에 발생하는 연산이므로 성능에 크게 영향을 주지 않는다.
    * 주의
      - 렌더 함수가 무한대로 호출될 수 있다.
      - 코드5-39에서 작성한 prevSpeed를 useState훅으로 관리하지 않고 이전에 작성한 usePreviou 커스터 훅으로 관리했다면 렌더함수가 무한대로 호출된다.
*/

function SpeedIndicator({ speed }) {
  //POINT1
  const [isFaster, setIsFaster] = useState(false);
  const [prevSpeed, setPrevSpeed] = useState(0);
  if (speed !== prevSpeed) {
    setIsFaster(speed > prevSpeed);
    setPrevSpeed(speed);
  }
  return <p>gettin faster?: {isFaster ? "yes" : "no"}</p>;
}

export default SpeedIndicator;
