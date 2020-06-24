import React, { Component } from "react";
/*
  코드 4-36 div요소로 감싸 주는 고차 컴포넌트
  * OutputComponent클래스 render함수에서 렌더링 된 결과를 조작 할 수 있을을 알게 됐다.
    * 이말은 즉 고차 컴포넌트로 할 수 있는 일이 무궁무진하다는 말이다.
  * render메서드만 이용했지만 입력된 컴포넌트 내부의 모든메서드(MyCompoent class)를 호출 할 수 있다. 
  * 하지만! 생명주기함수는 호출하지 말자! 이유는 생명주기 메서드는 항상 약속된 시점에 호출되어야 버그가 생기지 않는다.
*/
function withDiv(InputComponent) {
  return class OutputComponent extends InputComponent {
    state = {
      OutputComponent: true,
      OutputComponentExtends: "InputComponent",
    };
    render() {
      //POINT
      const rendered = super.render();
      console.log("### Outputcomponent > render: ", rendered);
      debugger;
      if (rendered && rendered.type !== "div") {
        // React.createElement("div", null, rendered);
        return (
          <div>
            <p>코드 4-36 div요소로 감싸 주는 고차 컴포넌트</p>
            <p>
              * OutputComponent클래스 render함수에서 렌더링 된 결과를 조작 할 수
              있을을 알게 됐다.
            </p>
            <p>
              * 이말은 즉 고차 컴포넌트로 할 수 있는 일이 무궁무진하다는 말이다.
            </p>
            <p>
              * render메서드만 이용했지만 입력된 컴포넌트 내부의
              모든메서드(MyCompoent class)를 호출 할 수 있다.{" "}
            </p>
            <p>
              * POINT!!! 하지만! 생명주기함수는 호출하지 말자! 이유는 생명주기
              메서드는 항상 약속된 시점에 호출되어야 버그가 생기지 않는다.
            </p>
            {React.createElement("div", null, rendered)}
          </div>
        );
      }
      return rendered;
    }
  };
}

class MyComponent extends Component {
  debugger;
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

    return <h1>MyComponent class component 입니다.</h1>;
  }
}

// export default Wrapper;
export default withDiv(MyComponent);
