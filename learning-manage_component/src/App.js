import React from 'react';
import LifecycleForBeginer from './component/lifeCycle/LifecycleForBeginer';

/**
 * STUDY 1-5: 자주 사용하는 lifeCycle
 */
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mount: true,
			ignoreProps: 0,
			seed: 40,
			showErrorComponent: true
		};

		//STUDY4-1
		//* render에 "{this.state.mount ? <Counter /> : null}"이 코드에 의해서
		//  Mount 될때 "componentDidUpdate" 수행
		//  unmount될때 "componentDidUpdate" 수행 x
		this.mountCounter = () => this.setState({ mount: true });
		this.unmountCounter = () => this.setState({ mount: false });

		//STUDY6-1: ignore 버튼 클릭시 ignoreProps 값이 변경되기 땨문에
		//"shouldComponentUpdate"가 동작하지 않는다.
		this.ignoreProp = () => this.setState({ ignoreProps: Math.random() });

		//STUDY7-1
		this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random() * 100) });

		//SUTDY8
		this.toggleError = () => this.setState({ showErrorComponent: !this.state.showErrorComponent });
	}

	render() {
		return (
			<div>
				<button onClick={this.mountCounter} disabled={this.state.mount}>
					Mount
				</button>
				<button onClick={this.unmountCounter} disabled={!this.state.mount}>
					unMount
				</button>
				<button onClick={this.ignoreProp}>Ignore Prop</button>
				<button onClick={this.seedGenerator}>Seed Generator</button>
				<button onClick={this.toggleError}>Toggle Error</button>
				{this.state.mount ? (
					<LifecycleForBeginer
						ignoreProp={this.state.ignoreProps}
						seed={this.state.seed}
						showErrorComponent={this.state.showErrorComponent}
					/>
				) : null}
			</div>
		);
	}
	// return (
	// 	<div>
	// 		<Counter />
	// 	</div>
	// );
}

export default App;
