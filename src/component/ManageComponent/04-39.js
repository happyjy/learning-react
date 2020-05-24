import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
/*
  코드 4-39 고차 컴포넌트에서 정적 메서드 전달하기
  * 컴포넌트가 정적 메서들르 갖고 있을때 출력되는 컴포넌트에 전달되지 않는다.
  * 이를 해결하기 위해서 hoist-non-react-statics 패키지를 많이 사용한다.
*/
function withSomething(InputComponent) {
  //POINT
  class OutputComponent extends InputComponent {
    state = {
      OutputComponent: true,
      OutputComponentExtends: "InputComponent",
    };
    render() {
      debugger;
      this.MyComponentFunction(); //상속한 InputComponent에 있는 함수를 호출
      this.MyComponentStaticFunction(); //상속한 InputComponent에 있는 함수를 호출
      return <InputComponent {...this.props} {...this.state} />;
    }
  }
  hoistNonReactStatic(OutputComponent, InputComponent);
  return OutputComponent;
}

class MyComponent extends Component {
  static defaultProps = {
    name: "World",
  };

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

  static MyComponentStaticFunction() {
    console.log("### this is MyComponentStaticFunction", this.state);
  }
  render() {
    console.log("### this.props: ", this.props);

    return (
      <div>
        <p>MyComponent class component 입니다.</p>
      </div>
    );
  }
}

export default withSomething(MyComponent);
