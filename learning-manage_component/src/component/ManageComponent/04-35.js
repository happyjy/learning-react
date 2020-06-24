import React, { Component } from "react";
/*
  코드 4-35 디버깅에 사용되는 고차 컴포넌트
  * 이벤트 발생시 해당 컴포넌트가 언마운트 후 다시 마운트 되는 상황이라면 리액트 개발자 툴은 매우 불편하다 
  * 그래서 아래는 상탯값, 속성값이 컴포넌트가 render될때 확인하는 고차 컴포넌트를 구현해봤다.
  * POINT: super.render()는 입력된 컴포넌트의 render 메서드를 호출한다. 결과적으로 withDebug 고차 컴포넌트는 입력된 컴포넌트 위에 속성값과 상탯값을 항상 보여준다.
*/
function withDebug(InputComponent) {
  return class OutputComponent extends InputComponent {
    render() {
      debugger;
      return (
        <React.Fragment>
          <p>코드 4-35 디버깅에 사용되는 고차 컴포넌트</p>
          <p>
            * 이벤트 발생시 해당 컴포넌트가 언마운트 후 다시 마운트 되는
            상황이라면 리액트 개발자 툴은 매우 불편하다{" "}
          </p>
          <p>
            * 그래서 아래는 상탯값, 속성값이 컴포넌트가 render될때 확인하는 고차
            컴포넌트를 구현해봤다.
          </p>
          <p>
            * POINT: super.render()는 입력된 컴포넌트의 render 메서드를
            호출한다. 결과적으로 withDebug 고차 컴포넌트는 입력된 컴포넌트 위에
            속성값과 상탯값을 항상 보여준다.
          </p>
          <hr></hr>
          <h1>
            OutputComponent 클래스 입니다.(OutputComponent클래스를 상속받은)
          </h1>
          {/* POINT */}
          <div>
            <p>
              아래 props, state value는 상속받은 "MyComponent" 클래스 속성이다.
            </p>
            <p>props value: {JSON.stringify(this.props)}</p>
            <p>state value: {JSON.stringify(this.state)}</p>
          </div>
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
        <h1>
          MyComponent class component 입니다.(OutputComponent 클래스에 상속된)
        </h1>
      </div>
    );
  }
}

export default withDebug(MyComponent);
