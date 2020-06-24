import React from "react";
/*
  # 코드 3-44 componentDidMount 메서드에서 돔 요소에 접근하는 코드
    * def
      - componentDidMount 메서드는 render 메서드의 첫번째 반환값이 실제 돔에 반영 된 직후 호출 된댜ㅏ. 
    * 활용 
      - render 메서드에서 반환한 리액트 요소가 돔에 반영 되어야 알 수 잇는 값을 얻을 수 있다. 
      - 예) CSS코드에서 width:100%로 표현된 요소는 돔에 바녕된 후에 필셀 단위의 가로 길이를 알 수 있다. 
*/

// width: 100% 스타일이 적용된 요소의 가로길이가 400 필셀 이상인지 여부에 따라 다른 배경색을 보여주는 코드
class MyComponent extends React.Component {
  state = {
    boxWidth: 0,
  };

  //# createRef
  // : 리액트 요소와 연결된 돔 요소에 접급할 때 사용
  divRef = React.createRef();

  componentDidMount() {
    debugger;
    // render이후 divRef 지정한 dom의 요소를 boxWidth에 지정한 뒤 다시 render한다.
    // div backgroundColor가 blue -> red로 변한다.
    console.log("### this.divRef: ", this.divRef);
    const rect = this.divRef.current.getBoundingClientRect();
    this.setState({ boxWidth: rect.width });
  }
  render() {
    const { boxWidth } = this.state;
    const backgroundColor = boxWidth < 400 ? "red" : "blue";
    return (
      <div
        ref={this.divRef}
        style={{ width: "100%", height: "100px", backgroundColor }}
      ></div>
    );
  }
}

export default MyComponent;
