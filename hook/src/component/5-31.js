import React from "react";
/*
  # 코드 5-31 훅으로 변환할 constructor 메서드
  * 클래스 컴포넌트에서 constructor는 주로 속성값으로부터 초기 상탯값을 계산한느 용도로 사용
  * componentDidMount보다 좀 더 빠르게 작업을 처리하는 용도로 사용
  * 아래 예제는 훅으로 바꿀 클래스 컴포넌트 constructor예제
*/

function callApi() {
  console.log("### callApi");
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `${props.firstName} ${props.lastName}`,
    };
    callApi();
  }
  render() {
    return (
      <div>
        <p># 코드 5-31 훅으로 변환할 constructor 메서드</p>
        <p>콘솔에 callApi를 했는지 확인해보세요 </p>
      </div>
    );
  }
}

export default Profile;
