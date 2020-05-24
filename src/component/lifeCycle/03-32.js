import React from 'react';
import axios from 'axios';

export default class MyComponent extends React.Component {
	state = {
		persons: []
	};

	constructor(props) {
		console.log('constructor');
		super(props);
		/*
      study1 - constructor 메서드에서 API를 호출하는 잘못된 예
        * 컴포넌트가 마운트되기 전에 데이터가 도착하면 setState호출은 무시
        * 따라서 데이터를 가져오기 위해 호출 하는 API는 "componentDidMount"메서드 내부에서 호출하는게 적절
    */

		/**
     *  # 고민필요
     *    - render > constructor > axios GET Request 이후 
     *      setState이후 컴포넌트가 업데이트 되면서 rerender 된다. 
     *    - 위 책과 같은 설명은 일어나지 않는다...
     */
		axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
			debugger;
			const persons = res.data;
			this.setState({ persons });
		});
	}

	render() {
		debugger;
		const { persons } = this.state;
		return <ul>{persons && persons.map((persons) => <li key={persons.id}> {persons.name} </li>)}</ul>;
	}
}
