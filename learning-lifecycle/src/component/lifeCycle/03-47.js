import React from 'react';

/*
    # getSnapshotBeforeUpdate
    코드 3-47 돔 요소의 높잇값이 변경됐는지 검사하는 코드
    
      * 메서드 구조 
        * getSanpShotBeforeUpdate(prevProps, prevState) => snapshot
      * 렌더링 결과가 실제 돔에 반영되기 직전에 호출
      * 호출되는 시점에 이전 돔 요소의 상탯값을 가져오기 좋다.
      
      *  업데이트단계 생명주기 
        - static getDerivedStateFromProps()
        - shouldComponentUpdate()
        - render()
        - getSnapshotBeforeUpdate()
        - componentDidUpdate()

      * [!] 위 업데이트 단계 생명주기를 참고해서 확인해보면 
        getSnapshotBeforeUpdate 메서드와 componentDidUpdate 메서드 사이에서 가상돔이 실제 돔에 반영된다. 
        * 따라서 componentDidUpdate 메서드가 호출될 때는 실제 돔이 새로운 상태로 변견된 상태다.
      * getSnapshotBeforeUpdate 메서드가 반환한 값은 componentDidUpdate 메서드의 세번째 인자로 들어간다.
        * [!] 따라서 getSnapshotBeforeUpdate 메서드에서 이전 돔의상탯값을 반환하면, 
          componentDiUpdate 메서드에서는 돔의 이전 상탯값과 이후 상탯값을 모두 알기 때문에
          돔의 상탯값 변화를 알 수 있다.
 */
class MyComponent extends React.Component {
	state = {
		items: []
	};

	divRef = React.createRef();
	getSnapshotBeforeUpdate(prevProps, prevState) {
		const { items } = this.state;
		if (prevState.items.length < items.length) {
			const rect = this.divRef.current.getBoundingClientRect();
			return rect.height;
		}
		return null;
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot !== null) {
			const rect = this.divRef.current.getBoundingClientRect();
			if (rect.height !== snapshot) {
				alert('새로운 줄이 추가되었습니다.');
			}
		}
	}

	onClick = () => {
		const { items } = this.state;
		this.setState({ items: [ ...items, '아이템' ] });
	};
	render() {
		const { items } = this.state;
		return (
			<React.Fragment>
				<button onClick={this.onClick}>추가하기</button>
				<div ref={this.divRef} style={{ width: '100%' }}>
					{items.map((item) => <div style={{ height: 50 }}> {item}</div>)}
				</div>
			</React.Fragment>
		);
	}
}

export default MyComponent;
