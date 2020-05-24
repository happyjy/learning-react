import React from 'react';
import axios from 'axios';

/*
    # 코드 3-49 componentDidUpdate 메서드에서 API를 호출하는 코드
      * 속성값이나 상탯값이 변견된 경우 API를 호출 하는 용도로 사용되기도 한다. 

 */

//사용자가 변경되면 친구 목록을 가져오는 API를 호출한다.
//억지로 componentDidUpdate에 넣는 예제를 넣어서 오동작하지만 먼저 의미는 확인하고 넘어가자
export default class PersonList extends React.Component {
	state = {
		persons: []
	};

	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
			const persons = res.data;
			this.setState({ persons });
		});
	}

	handleChange = (event) => {
		console.log(event.target.value);
		this.setState({ name: event.target.value });
	};

	// handleSubmit = (event) => {
	// 	debugger;
	// 	event.preventDefault();
	// 	const user = {
	// 		name: this.state.name
	// 	};

	// 	// axios.post(`https://jsonplaceholder.typicode.com/users`, { user }).then((res) => {
	// 	// 	console.log(res);
	// 	// 	console.log(res.data);
	// 	// 	this.setState((state, props) => {
	// 	// 		state.user = res.data.user.name;
	// 	// 		state.id = res.data.id;
	// 	// 		return state;
	// 	// 	});
	// 	// });

	// 	const { persons } = this.state;
	// 	this.setState({ persons: [ ...persons, user ] });
	// 	// this.setState((state, props) => {
	// 	// 	state.user = user;
	// 	// 	state.id = psersons.length + 1;
	// 	// 	return state;
	// 	// });
	// };

	componentDidUpdate(prevProps) {
		const user = {
			name: this.state.name
		};
		const { persons, name } = this.state;
		if (persons.filter((person) => person === name).length === 0) {
			debugger;
			axios.post(`https://jsonplaceholder.typicode.com/users`, { user }).then((res) => {
				debugger;
				console.log(res);
				console.log(res.data);

				const { persons } = this.state;
				this.setState({ persons: [ ...persons, { id: persons.length + 1, name: res.data.user.name } ] });
				// this.setState((state, props) => {
				// 	state.user = res.data.user.name;
				// 	state.id = res.data.id;
				// 	return state;
				// });
			});
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Person Name:
						<input type='text' name='name' onChange={this.handleChange} />
					</label>
					<button type='submit'>Add</button>
				</form>
				<ul>{this.state.persons.map((person) => <li key={person.id}>{person.name}</li>)}</ul>;
			</div>
		);
	}
}
