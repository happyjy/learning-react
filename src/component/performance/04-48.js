import React, { Component } from "react";
/*
  코드 4-31 마운트 시 서버로 이벤트를 보내는 고차 컴포넌트
  * 코드 4-41에서 렌더 속성값을 이용한 코드가 있다. 비교해보자
  * withMountEvent는 함수는 고차 컴포넌트
  * 고차 컴포넌트는 클래스 컴포넌트로 이루어져 componentDidMount 함수에 MyComponent가 render됐을때 
    서버에 저장하는 로직을 넣어주면 어떤 화면, 컴포넌트가 많이 노출됐는지 알 수 있다.
*/
function withMountEvent(InputComponent, componentName) {
  return class OutputComponent extends Component {
    componentDidMount() {
      console.log("### 컴포넌트 이름 저장한는 함수 호출:", componentName);
    }
    render() {
      return <InputComponent {...this.props} />;
    }
  };
}

function MyComponent() {
  return (
    <div>
      <p>MyComponent 입니다.</p>
      <p>이 컴포넌트는 고차 컴포넌트에 의해서 렌더 됐습니다.</p>
      <p>
        코차 컴포넌트 componentDidMount 함수에 콘솔 코드가 있으면 그곳에 현재
        컴포넌트 이름을 받고 있어 저장하는 로직을 추가 해주면 되겠습니다.
      </p>
    </div>
  );
}

export default withMountEvent(MyComponent, "MyComponent");
