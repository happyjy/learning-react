import React, { PureComponent } from 'react';
/*
  코드 4-54 렌더 함수에서 새로운 객체를 만들어서 자식 컴포넌트의 속성값으로 전달하기
  - 상탯값을 불변 객체로 관리해도 렌더 함수에서 새로운 객체를 만들면 문제가 된다.
  - 렌더 함수에서 새로운 객체를 만들어서 자식 컴포넌트의 속성값으로 입력하면,
  속성값의 내용이 변경되지 않아도 자식 컴포넌트 입장에서는 속성값이 변경됐다고 인식한다.

  - 예제 코드는 렌더함수에서 새로운 객체를 만드어서 자식 컴포넌트의 속성값으로 전달하는 코드
    - Parent 클래스 컴포넌트에서 render 함수에서 fruitOptions, onChange 프로퍼티에 call by reference로 객체를 호출하는것이아니라 생성할 객체를 넣어 놓으면 button 클릭시 rendering 될때마다 객체가 새로 생겨서 SelectFruite 클래스가 다시 그려진다. (log로 확인가능)
*/
function Select({ options, selected, onChange }) {
	console.log('### Select Component', options, selected, onChange);
	return (
		<div>
			<select onChange={onChange}>
				{options &&
					options.map((option, idx) => {
						return (
							<option key={idx} value={option}>
								{option}
							</option>
						);
					})}
			</select>
		</div>
	);
}
class SelectFruit extends PureComponent {
	state = {
		fruitOptions: [ 'apple', 'banana', 'orange' ]
	};
	render() {
		const { selectedFruit, onChange, count } = this.props;
		console.log('### SelectFruit > count from Prent click button: ', count);
		return (
			<div>
				<Select
					options={[ 'apple', 'banana', 'orange' ]}
					// options={this.state.fruitOptions}
					selected={selectedFruit}
					onChange={onChange}
				/>
			</div>
		);
	}
}

class Parent extends PureComponent {
	state = {
		count: 0,
		selectedFruit: 'banana',
		fruitOptions: [ 'apple', 'banana', 'orange' ]
	};

	onClick = () => {
		const { count } = this.state;
		this.setState({ count: count + 1 });
	};

	onChange = (fruit) => {
		if (fruit !== this.state.selectedFruit) {
			this.setState({ selectedFruit: fruit });
		}
		console.log('### state.selectedFruite: ', this.state.selectedFruit);
	};

	render() {
		const { selectedFruit, count } = this.state;
		console.log('### Parent > render: ', { selectedFruit, count });
		return (
			<div>
				<p>{`count: ${count}`}</p>
				<button onClick={this.onClick}>increase count</button>
				<SelectFruit
					// count={count}
					selectedFruit={selectedFruit}
					// fruitOptions={this.state.fruitOptions}
					// fruitOptions={[ 'apple', 'banana', 'orange' ]}
					onChange={this.onChange}
					// onChange={(fruit) => {
					// 	debugger;
					// 	if (fruit !== selectedFruit) {
					// 		this.setState({ selectedFruit: fruit });
					// 	}
					// console.log("### state.selectedFruite: ", this.state.selectedFruit);
					// }}
				/>
			</div>
		);
	}
}

export default Parent;
