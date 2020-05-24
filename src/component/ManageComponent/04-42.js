import React, { Component } from "react";

/*
    코드 4-42 children을 사용하지 않은 렌더 속성값

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
    //POINT
    const { render } = this.props; //MountEvent 컴포넌트 child jsx
    console.log(
      "### MountEvent > render: this.props.render 확인해보자: ",
      this.props,
    ); // this.props -> {name: "MyComponent", render: ƒ}
    return render();
  }
}

function MyComponent() {
  return (
    <MountEvent
      name="MyComponent"
      render={() => (
        <div>
          MountEvent 컴포넌트에 render이름의 props로 넘긴 것 입니다. MounEvent
          컴포넌트 chile function입니다.
        </div>
      )}
    ></MountEvent>
  );
}

export default MyComponent;
