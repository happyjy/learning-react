import React, { Component } from 'react';
/*
  코드 4-34 클래스 상속을 이용한 고차 컴포넌트
  * 입력된 컴포넌트로 만들어진 인스턴스의 속성값, 상탯값, 생명주기 메서드, 기타 멤버 변수/ 메서드에 접근할 수 있다.
*/
function withSomething(InputComponent) {
	//POINT
	return class OutputComponent extends InputComponent {
		state = {
			OutputComponent: true,
			OutputComponentExtends: 'InputComponent'
		};
		render() {
			debugger;
			this.MyComponentFunction(); //상속한 InputComponent에 있는 함수를 호출
			return <InputComponent {...this.props} {...this.state} />;
		}
	};
}

class MyComponent extends Component {
	debugger;
	constructor(props) {
		super(props);
		this.state = {
			MyComponent: true,
			MyComponentExtends: 'coponent'
		};
	}
	MyComponentFunction() {
		console.log('### this is MycomponentFunction', this.state);
	}

	render() {
		console.log('### this.props: ', this.props);

		return (
			<div>
				<p>MyComponent class component 입니다.</p>
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
