import React from 'react';

/*
  # componentWillUnmount메서드 
    * 코드 3-51 componentWillUnmount 메서드에서 이벤트 처리 해제하기
      * 소멸단계에서 호출되는 유일한 생명주기 메서드 
      * 끝나지 않은 네트워크 요청 취소, 타이머 해제, 구독(subscription)해제등 작업 처리하기 좋다 
      * 컴포넌트에서 componentDidMount메서드가 호출되면 componentWillUnmount메서드도 호출되는 것이 보장
        * 따라서 componentDidMount메서드에서 구독하고 componentWillUnmount메서드에서 구독을 해제하는 코드가 자주 사용된다.
        * 예) 특정 돔요소에 addEventListener 함수를 이용하여 이벤트 처리 함수를 등록하고
              removeEventListeneer함수를 이요하여 등록을 해제 할 수 있다.
 */
//동작하지 않음
class MyComponent extends React.Component {
	componentDidMount() {
		const domNode = document.getElementById('someNode');
		domNode.addEventListener('click', this.onClick);
		domNode.addEventListener('change', this.onChange);
		domNode.addEventListener('dragstart', this.onDragStart);
	}

	componentWillUnmount() {
		const domNode = document.getElementById('someNode');
		domNode.removeEventListener('click', this.onClick);
		domNode.removeEventListener('change', this.onChange);
		domNode.removeEventListener('dragstart', this.onDragStart);
	}

	render() {
		return (
			<div>
				<div onChange={this.changePrice} onClick={this.onClick}>
					ondragstart={this.onDragStart}
				</div>
			</div>
		);
	}
}

export default MyComponent;
