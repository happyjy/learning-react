import React, { Component } from "react";
/*
  코드 4-37 여러 개의 고차 컴포넌트를 동시에 사용하기
   withDebug(withDiv(MyComponent)); 이렇게 function을 계속 호출 하면 됩니다.
*/
function withDebug(InputComponent) {
  return class OutputComponent extends InputComponent {
    componentDidMount() {}
    state = {
      withDebug: true,
    };
    render() {
      debugger;
      console.log("### withDebug > render: ");
      return (
        <div style={{ border: "1px solid red", margin: "20px" }}>
          <h1>withDebug 클래스 입니다.</h1>
          {/* POINT */}
          <p>Props: {JSON.stringify(this.props)}</p>
          <p>state: {JSON.stringify(this.state)}</p>
          {super.render()}
        </div>
      );
    }
  };
}

function withDiv(InputComponent) {
  return class OutputComponent extends InputComponent {
    state = {
      withDiv: true,
      withDivExtends: "InputComponent",
    };
    render() {
      //POINT
      const rendered = super.render();
      console.log("### withDiv > render: ", rendered);
      debugger;
      // https://learn.co/lessons/react-create-element
      if (rendered && rendered.type !== "div") {
        const title = React.createElement("h1", null, "withDiv 클래스 입니다.");
        const divContainer = React.createElement("div", null, rendered);
        return React.createElement(
          "div",
          { style: { border: "1px solid blue", margin: "20px" } },
          [title, divContainer],
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
    console.log("### MyComponent > this.props: ", this.props);

    return (
      <h1 style={{ border: "1px solid black", margin: "20px" }}>
        MyComponent class component 입니다.
      </h1>
    );
  }
}

export default withDebug(withDiv(MyComponent));
