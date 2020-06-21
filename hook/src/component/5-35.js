import React from "react";
/*
  # 코드 5-35 훅으로 변환한 componentDidUpdate 메서드
*/

class Profile extends React.Component {
  state = { name: this.props.name };
  componentDidUpdate(prevProps) {
    const { userId, name } = this.props;
    if (prevProps.userId !== userId) {
      this.setState({ name });
    }
  }
  render() {
    return (
      <div>
        <div>
          <h1> 설명 </h1>
        </div>
        <hr></hr>
        <div>
          <h1> 예제 </h1>
        </div>
      </div>
    );
  }
}

export default Profile;
