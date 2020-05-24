import React from "react";

/*
    코드 4-46 children 속성값을 이용해서 작성한 레이아웃 컴포넌트
    * 여기서 children은 함수가 아니라 리액트 요소이다.
    * Layout 컴포넌트를 사용하는 곳에서 childrend 속성 값으로 입력될 리액트 요소를 정의한다.
    
    * 결론
      - 렌더 속성값을 사용하지는 않았지만 코드를 재사용할 수 있는 매우 간단하고 중요한 방법이다. 
      이전에 구현했던 withOnlyLogin(코드04-33), withDiv(코드04-36)등의 고차 컴포넌트도 이 방식으로 변환할 수 있다.
 */
function Layout({ children }) {
  return (
    <div>
      <div>여기는 Header입니다.</div>
      {children}
      <div>여기는 Footer입니다.</div>
    </div>
  );
}

function MyComponent() {
  return (
    <Layout>
      <div>MyComponent</div>
    </Layout>
  );
}

export default MyComponent;
