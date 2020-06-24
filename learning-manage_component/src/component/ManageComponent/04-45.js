import React from "react";

/*
    코드 4-45 "렌더 속성값 함수의 매개변수를" 속성값으로 전달하는 방법
    * 여기서 렌더 속성값 함수의 매개변수는 -> "hasMounted" 이다
    * POINT
      - MountInfo 컴포넌트로부터 전달된 마운트 정보를 생명주기 메서드에서 사용
    * POINT2
      - MyCompoenentWrapper를 외부로 노출 
      - 마운트 정보를 MyComponent 컴포넌트의 속성값으로 전달해준다.

    * 결론
      - 렌더 속성값 함수의 매개변수를 속성값으로 전달해주는 MycomponentWrapper 컴포넌트 덕분에 MyComponent 컴포넌트는 hasMouned 속성값을 사용할 수 있게 됐다.
 */
class MountInfo extends React.Component {
  state = {
    hasMounted: false,
    age: 31,
  };
  componentDidMount() {
    //5
    console.log("### MountInfo > componentDidMount");
    this.setState({
      hasMounted: true,
    });
  }
  render() {
    //6
    //3
    console.log(
      "### MountInfo > render: this.props, this.state: ",
      this.props,
      this.state,
    );
    const { children } = this.props;
    const { hasMounted, age } = this.state;
    return (
      <div>
        <p>
          코드 4-45 "렌더 속성값 함수의 매개변수를" 속성값으로 전달하는 방법
        </p>
        <p>* 여기서 렌더 속성값 함수의 매개변수는 -> "hasMounted" 이다</p>
        <p>* POINT</p>
        <p>
          - MountInfo 컴포넌트로부터 전달된 마운트 정보를 생명주기 메서드에서
          사용
        </p>
        <p>* POINT2</p>
        <p> - MyCompoenentWrapper를 외부로 노출 </p>
        <p> - 마운트 정보를 MyComponent 컴포넌트의 속성값으로 전달해준다.</p>
        <p>* 결론</p>
        <p>
          - 렌더 속성값 함수의 매개변수를 속성값으로 전달해주는
          MycomponentWrapper 컴포넌트 덕분에 MyComponent 컴포넌트는 hasMouned
          속성값을 사용할 수 있게 됐다.
        </p>
        <hr></hr>
        {children({ hasMounted, age })}
      </div>
    );
  }
}

class MyComponent extends React.Component {
  componentDidUpdate() {
    //8
    console.log("### MyComponent > componentDidUpdate");
    //POINT
    const { hasMounted } = this.props;
    console.log(`lifecycle function can access hasMouned(${hasMounted})`);
  }

  render() {
    //4
    //7
    console.log("### MyComponent > render");
    const { hasMounted } = this.props;
    return <p>{`hasMounted: ${hasMounted}`}</p>;
  }
}

export default function MyComponentWrapper(props) {
  //1
  debugger;
  console.log("### MyCompoenentWrapper");
  return (
    <MountInfo>
      {({ hasMounted, age }) => (
        // POINT:
        <MyComponent {...props} hasMounted={hasMounted} age={age}></MyComponent>
      )}
    </MountInfo>
  );
  // return (function () {
  //   //2
  //   console.log("### MyCompoenentWrapper > return");
  //   return (
  //     <MountInfo>
  //       {({ hasMounted }) => (
  //         // POINT:
  //         <MyComponent {...props} {...hasMounted}></MyComponent>
  //       )}
  //     </MountInfo>
  //   );
  // })();
}
