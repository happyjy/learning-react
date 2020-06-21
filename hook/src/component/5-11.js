import React from "react";
import axios from "axios";
/*
  코드 5-11 클래스형 컴포넌트에서는 로직이 분산된다.
  * 코드 5-07, 09 클래스 컴포넌트로 생성한 API호출, windowWidth 코드를 합쳐보자!
  * 각각의 로직이 생명주기 함수별로 되어 있어 로직이 분산됐다.
*/

class Profile extends React.Component {
  state = {
    user: null,
    width: window.innerWidth,
  };
  componentDidMount() {
    const { userId } = this.props || { userId: "happyjy" };
    axios("https://api.github.com/users/happyjy").then((Response) => {
      console.log(Response);
      this.setState({ user: Response.data });
    });

    window.addEventListener("resize", this.onResize);
  }
  componentDidUpdate(prevProps) {
    const { userId } = this.props || { userId: "happyjy" };
    if (userId !== prevProps.userId) {
      axios("https://api.github.com/users/happyjy").then((Response) => {
        console.log(Response);
        this.setState({ user: Response.data });
      });
    }
  }
  componentWillMount() {
    window.removeEventListener("resize", this.onResize);
  }
  onResize = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { user, width } = this.state;
    return (
      <div>
        <div>
          <h1> 설명 </h1>
          <p> 코드 5-11 훅을 사용하면 로직별로 코드를 모을 수 있다.</p>
          <p>
            {" "}
            * 코드 5-07, 09 클래스 컴포넌트로 생성한 API호출, windowWidth 코드를
            합쳐보자!
          </p>
          <p> * 각각의 로직이 생명주기 함수별로 되어 있어 로직이 분산됐다.</p>
        </div>
        <hr></hr>
        <div>
          <h1> 예제 </h1>
          <div>{!user && <p>사용자 정보를 가져오는 중 ...</p>}</div>
          <div>
            {user && (
              <p>
                {user.name}/ {user.id}
              </p>
            )}
          </div>
          <div>{`width is ${width}`}</div>
        </div>
      </div>
    );
  }
}

export default Profile;
