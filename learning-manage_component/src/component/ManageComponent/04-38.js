import React, { Component } from "react";
import getDisplayName from "recompose/getDisplayName";
/*
  코드 4-38 고차 컴포넌트에서 displayName 설정하기
  * 리액트 개발자 툴에서 디버깅을 편하게 하기 위해 displayName값을 설정하면 좋다.
  * recompose패키지에서 제공하는 getDisplayName 함수를 이용하면 쉽게 적용할 수 있다.

  * 추가 설명
    * 기능을 잘게 쪼개서 너무 많은 수의 고차 컴포넌트를 사용하면 렌더링 성능에 좋지 않다. 
    * 리엑트 개발자 툴에서 디버깅할 때에도 불편하다 그래서 고차 컴포넌트는 필요한 만큼만 사용하는게 좋다.

  * recomponse 설치 
    * https://www.npmjs.com/package/recompose
    * npm i recompose
    
  *  react dev tool 
    * 공식 문서: https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation
    * 크롭 개발자 확장툴 설치 : https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related

*/
function withSomething(InputComponent) {
  class OutputComponent extends InputComponent {
    state = {
      OutputComponent: true,
      OutputComponentExtends: "InputComponent",
    };
    render() {
      debugger;
      this.MyComponentFunction(); //상속한 InputComponent에 있는 함수를 호출
      return <InputComponent {...this.props} {...this.state} />;
    }
  }
  //POINT: displayName 설정하는 부분
  OutputComponent.displayName = `withSomething(${getDisplayName(
    InputComponent,
  )}`;

  return OutputComponent;
}

class MyComponent extends Component {
  debugger;
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
        <p>코드 4-38 고차 컴포넌트에서 displayName 설정하기</p>
        <p>
          * 리액트 개발자 툴에서 디버깅을 편하게 하기 위해 displayName값을
          설정하면 좋다.
        </p>
        <p>
          * recompose패키지에서 제공하는 getDisplayName 함수를 이용하면 쉽게
          적용할 수 있다.
        </p>

        <p>* 추가 설명</p>
        <p>
          {" "}
          - 기능을 잘게 쪼개서 너무 많은 수의 고차 컴포넌트를 사용하면 렌더링
          성능에 좋지 않다.{" "}
        </p>
        <p>
          {" "}
          - 리엑트 개발자 툴에서 디버깅할 때에도 불편하다 그래서 고차 컴포넌트는
          필요한 만큼만 사용하는게 좋다.
        </p>

        <p>* recomponse 설치 </p>
        <p> - https://www.npmjs.com/package/recompose</p>
        <p> - npm i recompose</p>

        <p>* react dev tool </p>
        <p>
          {" "}
          - 공식 문서:
          https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation
        </p>
        <p>
          {" "}
          - 크롭 개발자 확장툴 설치 :
          https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related
        </p>
        <div
          style={{
            backgroundImage: "url(04-38.png)",
            backgroundColor: "#cccccc",
          }}
        ></div>
      </div>
    );
  }
}

// function Wrapper() {
// 	const obj = {
// 		isLogin: true,
// 		// isLogin: false,
// 		name: 'jyoon',
// 		age: '30'
// 	};

// 	return function() {
// 		return withSomething(MyComponent);
// 	};
// }

// export default Wrapper;
export default withSomething(MyComponent);
