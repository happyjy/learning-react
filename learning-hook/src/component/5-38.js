import React from 'react';
/*
  # 코드 5-38 훅으로 변경할 getDerivedStateFromProps 정적 메서드
*/
class SpeedIndicator extends React.Component {
	state = { isFaster: false, prevSpeed: 0 };
	static getDerivedStateFromProps(props, state) {
		debugger;
		if (props.speed !== state.prevSpeed) {
			return {
				isFaster: props.speed > state.prevSpeed,
				prevSpeed: props.speed
			};
		}
		return null;
	}

	render() {
		const { isFaster, prevSpeed } = this.state;
		const { speed } = this.props;
		// debugger;
		return (
			<div>
				{/* <p>previous speed: {prevSpeed}</p> */}
				<p>current spped: {speed}</p>
				<p>getting faster?: {isFaster ? 'yes' : 'no'}</p>
			</div>
		);
	}
}

class car extends React.Component {
	state = {
		speed: 0,
		enterSpeed: 0
	};

	handleChange = (e) => {
		// debugger; //step1
		console.log('### handleChange: ');
		// console.log(e.target.value);
		this.setState({ speed: e.target.value });
	};

	handleSubmit = (e) => {
		console.log('### handleSubmit: ');
		const { speed } = this.state;
		debugger;
		this.setState({ enterSpeed: speed });
		e.preventDefault();
	};

	render() {
		const { speed, enterSpeed } = this.state;
		return (
			<div>
				이건차다 스피드 입력해봐
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type='text' value={speed} onChange={this.handleChange.bind(this)} />
					<br />
					<button type='submit'>enter</button>
				</form>
				<br />
				<SpeedIndicator speed={enterSpeed} />
			</div>
		);
	}
}

export default car;
