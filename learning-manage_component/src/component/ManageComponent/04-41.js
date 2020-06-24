import React, { Component } from "react";

/*
    코드 4-41 마운트 시 서버로 이벤트를 보내는 렌더 속성값
    * "렌더 속성값이란?"
      - 코드 재사용을 위해 함수 타입의 속성값을 이용하는 패턴
    * 코드 4-31 withMountEvent 고차 컴포넌트를 아래와 같이
      렌더 속성값을 사용하여 만들었다. 
 */
class MountEvent extends Component {
  componentDidMount() {
    const { name } = this.props;
    console.log(
      "### MountEvent > componentDidMount: 서버에 이벤트 보내는 로직 위치 this.props-> ",
      this.props,
    );
  }
  render() {
    //POINT: children
    const { children } = this.props; //MountEvent 컴포넌트 child jsx
    console.log(
      "### MountEvent > render: this.props.children 확인해보자: ",
      this.props,
    ); // this.props -> {name: "MyComponent", children: ƒ}
    return (
      <div>
        <p>코드 4-41 마운트 시 서버로 이벤트를 보내는 렌더 속성값</p>
        <p>* "렌더 속성값이란?"</p>
        <p>- 코드 재사용을 위해 함수 타입의 속성값을 이용하는 패턴</p>
        <p>
          * 코드 4-31 withMountEvent 고차 컴포넌트를 아래와 같이 렌더 속성값을
          사용하여 만들었다.{" "}
        </p>
        children()
      </div>
    );
  }
}

function MyComponent() {
  return (
    <MountEvent name="MyComponent">
      {() => "MounEvent 컴포넌트 chile function입니다."}
    </MountEvent>
  );
}

export default MyComponent;
