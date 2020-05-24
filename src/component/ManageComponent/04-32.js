import React, { Component } from "react";
/*
  코드 4-32 마운트 여부를 알려주는 고차 컴포넌트
  * 서버 렌더링을 사용한느 프로젝트에서는화면 일부분이 클라이언트 측에서만 렌더링되기를 원하는 경우가 많이 발생한다. 
  * 마운트 이후에만 렌더링하면 클라이언트 측에서만 렌더링 되기 때문에 아래와 같은 코드가 자주 사용된다.

*/
function withHasMounted(InputComponent) {
  return class OutputComponent extends Component {
    state = {
      hasMounted: false,
    };
    componentDidMount() {
      this.setState({ hasMounted: true });
    }
    render() {
      debugger;
      const { hasMounted } = this.state;
      return <InputComponent {...this.props} hasMounted={hasMounted} />;
    }
  };
}

function MyComponent(props) {
  debugger;
  return (
    <div>
      <p>MyComponent 입니다.</p>
    </div>
  );
}

export default withHasMounted(MyComponent, "MyComponent");
// function Wrapper(props) {
// 	return withHasMounted(MyComponent(props), 'MyComponent');
// }

// export default function() {
// 	debugger;
// 	const obj = {
// 		a: 1
// 	};
// 	return (
// 		<Wrapper passObjToProps={obj} />
// 		// withHasMounted(MyComponent, 'MyComponent');
// 	);
// }
