import React, { useState, useEffect } from "react";
/*
  코드 5-09 이벤트 처리 함수의 등록과 해제를 클래스형 컴포넌트로 작성하기
  * 코드 5-08을 클래스형 컴포넌트로 작성
*/

class WidthPrinter extends React.Component {
  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }
  componentWillMount() {
    window.removeEventListener("resize", this.onResize);
  }
  onResize = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    return (
      <div>
        <div>
          <h1> 설명 </h1>
          <p>
            코드 5-09 이벤트 처리 함수의 등록과 해제를 클래스형 컴포넌트로
            작성하기
          </p>
          <p>* 코드 5-08을 클래스형 컴포넌트로 작성</p>
        </div>

        <div>
          <h1> 예제 </h1>
          {`width is ${width}`}
        </div>
      </div>
    );
  }
}

export default WidthPrinter;
