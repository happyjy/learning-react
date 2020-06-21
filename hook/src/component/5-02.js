import React from 'react';
/*
  코드 5-02 클래스형 컴포넌트에서 상탯값 관리하기
  * POINT1 초기화: 클래스 멤버 변수로 초기 상탯값을 정의
  * POINT2 상탯값 클래스 인스턴스에서 가져옴
  * POINT2 상탯값 변경시 'this.setState' 호출

*/
export default class Profile extends React.Component {
	// POINT1 초기화: 클래스 멤버 변수로 초기 상탯값을 정의
	state = {
		name: ''
	};

	render() {
		// POINT2 상탯값 클래스 인스턴스에서 가져옴
		const { name } = this.state;
		return (
			<div>
				<h1> 설명 </h1>
				<p>* POINT1 초기화: 클래스 멤버 변수로 초기 상탯값을 정의</p>
				<p>* POINT2 상탯값 클래스 인스턴스에서 가져옴</p>
				<p>* POINT2 상탯값 변경시 'this.setState' 호출</p>
				<hr />
				<h1> 예제 </h1>
				<p>{`# 클래스 컴포넌트 - 나의 이름은 ${name}`}</p>
				<input
					type='text'
					value={name}
					//POINT2 상탯값 변경시 'this.setState' 호출
					onChange={(e) => this.setState({ naem: e.target.value })}
				/>
			</div>
		);
	}
}
