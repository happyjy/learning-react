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
      //POINT render를 props로 전달해서 render해줄수도 있다.
      render={() => (
        <div>
          <p>코드 4-42 children을 사용하지 않은 렌더 속성값</p>
          <p>
            MountEvent 컴포넌트에 render property명으로 props로 넘긴 것 입니다.
          </p>
        </div>
      )}
    ></MountEvent>
  );
}

export default MyComponent;
