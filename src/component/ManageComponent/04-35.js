import React, { Component } from "react";
/*
  코드 4-35 디버깅에 사용되는 고차 컴포넌트
  * 이벤트 발생시 해당 컴포넌트가 언마운트 후 다시 ㅏ운트 되는 상황이라면 리액트 개발자 툴은 매우 불편하다 
  * 그래서 아래는 상탯값, 속성값이 컴포넌트가 render될때 확인하는 고차 컴포넌트를 구현해봤다.
*/
function withDebug(InputComponent) {
  return class OutputComponent extends InputComponent {
    componentDidMount() {}
    state = {
      OutputComponent: true,
    };
    render() {
      debugger;
      return (
        <React.Fragment>
          <h1>OutputComponent 클래스 입니다.</h1>
          {/* POINT */}
          <p>Props: {JSON.stringify(this.props)}</p>
          <p>state: {JSON.stringify(this.state)}</p>
          {super.render()}
        </React.Fragment>
      );
    }
  };
}

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyComponent: true,
      MyComponentExtends: "coponent",
    };
  }
  MyComponentFunction() {
    console.log("### this is MycomponentFunction", this.state);
  }

  render() {
    console.log("### this.props: ", this.props);

    return (
      <div>
        <h1>MyComponent class component 입니다.</h1>
      </div>
    );
  }
}

export default withDebug(MyComponent);
