import React, { Component } from "react";

/*
  코드 4-44 마우스의 위치 정보를 알려 주는 렌더 속성값
  : 4-41~44예제들은 렌더 함수 내부에서는 렌더 속성값을 위한 함수를 정의하고, 
  그 함수는 약속된 매개변수와 함께 호출된다. 
 */
class MouseTracer extends Component {
  state = {
    x: null,
    y: null,
  };
  onMouseMove = (e) => {
    console.log("### onMouseMove: ", e.clientX, e.clientY);
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    const { children } = this.props;
    const { x, y } = this.state;
    return (
      <div>
        <p>코드 4-44 마우스의 위치 정보를 알려 주는 렌더 속성값</p>
        <p>
          : 4-41~44예제들은 렌더 함수 내부에서는 렌더 속성값을 위한 함수를
          정의하고, 그 함수는 약속된 매개변수와 함께 호출된다.{" "}
        </p>
        <div
          onMouseMove={this.onMouseMove}
          style={{ border: "1px solid black", margin: "10px", height: "300px" }}
        >
          검정색 테두리 안에서만 좌표가 변합니다.
          {children({ x, y })}
        </div>
      </div>
    );
  }
}

function MyComponent() {
  return (
    <MouseTracer>{({ x, y }) => <p>{`(x,y): ${x}, ${y}`}</p>}</MouseTracer>
  );
}

export default MyComponent;
