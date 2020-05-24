import React from 'react';

class AppLifeCycle extends React.Component {
	/*
    study1 - getDerivedStateFromProps 메서드가 필요한 경우
    * 이전 속성값과 이후 속성값 모두에 의존적인 상탯값이 필요한 경우
      
  */

	state = {
		prevSpeed: this.props.speed,
		isMovingFaster: false
	};

	static getDerivedStateFromProps(props, state) {
		debugger;
		if (props.speed !== state.prevSpeed) {
			return {
				prevSpeed: props.speed,
				isMovingFaster: state.prevSpeed < props.speed
			};
		}
		return null;
	}

	constructor(props) {
		console.log('constructor');
		super(props);
	}

	render() {
		debugger;
		const { prevSpeed, isMovingFaster } = this.state;
		return (
			<div>
				<div>속도 : {prevSpeed}</div>
				<div>이전보다 빨라요? : {isMovingFaster ? '빨라빨라' : '아니느려'} </div>
			</div>
		);
	}
}

class MyComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			speed: 0
		};

		this.speedUp = () => this.setState({ speed: this.state.speed + 1 });
		this.speedDown = () => this.setState({ speed: this.state.speed - 1 });
	}

	render() {
		return (
			<div>
				<button onClick={this.speedUp}>speedUp</button>
				<button onClick={this.speedDown}>speedDown</button>
				<AppLifeCycle speed={this.state.speed} />
			</div>
		);
	}
}

export default MyComponent;
