import React from "react";
import useHasMounted from "./customHook/useHasMounted";
/*

  # 코드 5-44 useHasMounted 훅의 기능을 제공하기 위해 구현한 고차 컴포넌트와 렌더 속성값
    * 마운트 상태를 관리하는 useHasMounted
    * 코드 5-14 useHasMounted처럼 반환값이 잇는 훅은 고차 컴포넌트 또는 렌더 속성값으로 반환값을 전달할 수 있다. 
    * 다음은 'useHasMounted훅의 기능을 제공'하기 위해 구현한 '고차 컴포넌트'와 '렌더 속성'이다.
*/

function HasMounted({ children }) {
  const hasMounted = useHasMounted();
  return children(hasMounted);
}

function withHasMounted(Component) {
  return function (props) {
    const hasMounted = useHasMounted();
    return <Component {...props} hasMounted={hasMounted}></Component>;
  };
}

function MyComponent({ props }) {
  const { hasMounted } = props;
  return (
    <div>
      <p>마 이게 내 컴포넌트다!</p>
      <p>마 마운트 됐나? {hasMounted ? "네" : "아녀"}</p>
    </div>
  );
}

export default function () {
  return (
    <div>
      <div>
        <h1> 설명 </h1>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        {/* <withHasMounted>
          <MyComponent />
        </withHasMounted> */}
      </div>
    </div>
  );
}
