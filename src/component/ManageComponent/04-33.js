import React from "react";
/*
  코드 4-33 로그인 여부에 따라 다르게 보여 주는 고차 컴포넌트
  * 고차 컴포넌트 내부에서 속성값 일부를 사용하고 입력된 컴포넌트로 나머지 속성값만 내려 주는게 가능하다.

*/
function withOnlyLogin(InputComponent) {
  //#POINT B
  return function ({ isLogin, ...rest }) {
    debugger;
    if (isLogin) {
      return <InputComponent {...rest} />;
    } else {
      return <p>권한이 없습니다.</p>;
    }
  };
}

function MyComponent(props) {
  debugger;
  //#POINT C
  console.log("### MyComponent: ", props);
  const { name, age } = props;
  return (
    <div>
      <div>
        <p>코드 4-33 로그인 여부에 따라 다르게 보여 주는 고차 컴포넌트</p>
        <p>
          * 고차 컴포넌트 내부에서 속성값 일부를 사용하고 입력된 컴포넌트로
          나머지 속성값만 내려 주는게 가능하다.
        </p>
      </div>
      <hr></hr>
      <p>로그인 됐습니다.</p>
      {!!name && <label>name: {name}</label>}/
      {!!age && <label>age: {age}</label>}
    </div>
  );
}

// export default withOnlyLogin(MyComponent, 'MyComponent');

export default function (obj) {
  debugger;
  //임시
  obj = {
    isLogin: true,
    // isLogin: false,
    name: "jyoon",
    age: "30",
  };
  //#POINT A
  return withOnlyLogin(MyComponent)(obj);
}
