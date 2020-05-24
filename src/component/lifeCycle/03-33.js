import React from 'react';

class MyComponent extends React.Component {
	/*
    
    study1 - getDerivedStateFronProps 메서드
      * 코드 33~39까지 설명 되어 있다.
      * 정적 메서드이기 때문에 함수 내부에서 this객체에 접근할 수 없다. 
      * 오로지 속성값과(props), 상탯값(state)을 기반으로 새로운 상탯값을 만든다.
       
    # 사용되는곳 
      * 시간에 따라 변하는 속성값으로 부터 상탯값을 계산하기 위해 추가
      * 보통 애니메이션과 관련된 속성값으로부터 상탯값을 계산할 때 유용
        - 특정 요소의 Y축 위치가 속성값일 때 스크롤 여부를 상탯값으로 저장한느 용도로 사용
        - 매개 변수에 현재 속성값은 있어도 이전 속성값은 없다.  
          따라서 상탯값에 이전에 속성값을 저장해야한다.
    # 매개변수에 이전 속성값을 넣지 않은 이유.
      * 리액트 팀에서 이전 속성값을 넣을 경우, 최초에 호출될 때는 이전 속성값이 없기 때문에 항상 null을 검사하는 코드가 필요
      * 앞으로 모든 생명 주기 메서드의 매개변수에서 이전 속성값을 제거할 예정
      * 이전 속성값이 필요 없어지면 더 이상 메모리에 담고 있지 않아도 되기 때문에 메모리 절약할 수 있다.
       
    # 잘못하용하는 경우 3가지 
      * 속성값 변화에 따라 API를 호출해야 하는 케이스
        - 코드 3-34
        - API호출 후처리시 this로 다른 메서드에 접근하는 경우가 많은데  
          "getDerivedStateFromProps" 함수는 정적메서드라 this에 접근하지 못한다.
        - "componentDidUpdate"에서 주로 API호출을 한다.
      * 속성값을 입력으로 하는 메모이제이션(memoization)을 상탯값으로 관리하는 경우
        - 코드 3-35, 36
        - 불필요한 계산량을 줄이기 위한 기술
      * 속성값이 변경될 때 상탯값을 초기화하는 경우.
        - 코드 3-37, 38, 39
  */

	state = {
		prevSpeed: this.props.speed //1) Point! 이전 speed 속성값을 저장하기 위한 용도
	};

	static getDerivedStateFromProps(props, state) {
		debugger;
		if (props.speed !== state.prevSpeed) {
			//2)속성값이 변경된 경우에 필요한 처리, 변경된 속성값을 상탯값으로 저장
			return {
				prevSpeed: props.speed
			};
		}
		return null; //3) 상탯값을 변경할필요 없다면 null 반환
	}

	constructor(props) {
		console.log('constructor');
		super(props);
	}

	render() {
		const { prevSpeed } = this.state;
		return <div>{prevSpeed}</div>;
	}
}

export default MyComponent;
