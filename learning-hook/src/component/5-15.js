import React, { Component } from "react";
/*
  코드 5-15 withHasMounted 고차 컴포넌트
  * 5-14 hook으로 되어 있는 기능을 "고차 컴포넌트로 작성한 코드"
  * ⭐️ 타입 스크립트와 같은 정적 타입 언어를 사용하는 경우 
    - 고차 컴포넌트의 타입을 정의하는 작업 -> 손이 많이감.
    - 반면 훅은 일반 함수 -> 쉽게 타입 정의 가능
*/

function withHasMounted(InputComponent) {
  return class OutputComponent extends Component {
    state = {
      hasMounted: false,
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ hasMounted: true });
      }, 1000);
    }

    render() {
      const { hasMounted } = this.state;
      return (
        <InputComponent
          {...this.props}
          hasMounted={hasMounted}
        ></InputComponent>
      );
    }
  };
}

class Test extends Component {
  state = {};
  render() {
    console.log(this.props); //AppHook에서 넘겨준 value + withHasMounted에서 받은 props.
    const { hasMounted } = this.props;
    return (
      <div>
        <div>
          <h1> 설명 </h1>
          <p> 코드 5-15 withHasMounted 고차 컴포넌트</p>
          <p> * 5-14 hook으로 되어 있는 기능을 "고차 컴포넌트로 작성한 코드"</p>
          <p> * ⭐️ 타입 스크립트와 같은 정적 타입 언어를 사용하는 경우 </p>
          <p> - 고차 컴포넌트의 타입을 정의하는 작업 -> 손이 많이감.</p>
          <p> - 반면 훅은 일반 함수 -> 쉽게 타입 정의 가능 </p>
        </div>
        <hr></hr>
        <div>
          <h1> 예제 </h1>
          {!hasMounted && <div>마운트 되기 전입니다. 1초뒤 마운트 됩니다.</div>}
          {hasMounted && <div>1초뒤 마운트 됐다 !!!</div>}
        </div>
      </div>
    );
  }
}

export default withHasMounted(Test);
