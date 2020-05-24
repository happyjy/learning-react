import React from 'react';

export default class MyComponent extends React.Component {
	constructor(props) {
		console.log('constructor');
		super(props);
		/*
      study1 - constructor메서드에는 setState 메서드를 호출하지 말자.
        * render 메서드에서 초깃값이 0이 출력
     */
		this.state = {
			count: 0
		};
    this.setState({ count: 10 });
	}

	render() {
		const { count } = this.state;
		return <div>{count}</div>;
	}
}
