import React from 'react';

/*
  # componentDidUpdate 메서드
    코드 3-48 스크롤이 가능해지면 알려주는 코드

    * 업데이트 단계에서 마지막으로 호출되는 생명주기메서드 
    * componentDidUpdate(prevProps, prevState, snapshot)
    * 가상 돔이 실제 돔에 반영된 후 호출 
      * 따라서 새로 반영된 돔의 상탯값을 가장 빠르게 가져올 수 있는 생명 주기 메서드 
 */

// 아래 예제 div요소의 공간이 부족해서 스크롤이 가능해지면 알림차으로 알려주는 코드
class MyComponent extends React.Component {
	state = {
		text: '',
		items: []
	};

	divRef = React.createRef();
	componentDidUpdate() {
		debugger;
		const div = this.divRef.current;
		const rect = div.getBoundingClientRect();
		if (div.scrollWidth > rect.width) {
			//div요소의 가로 길이보다 스크롤 영역의 가로길이가 더크면 스크롤이 가능
			alert('스크롤이 가능합니다.');
		}
	}

	onChange = (event) => {
		const text = event.target.value;
		// const { items } = this.state;

		this.setState({ text });

		// this.setState({ items: [ ...items, '아이템' ] });
	};

	render() {
		// const { text, items } = this.state;
		const { text } = this.state;
		return (
			<React.Fragment>
				<input onChange={this.onChange} value={text} />
				{/* 스크롤이 가능하도록 overflow 속성을 줌 */}
				<div
					ref={this.divRef}
					style={{
						width: 100,
						height: 100,
						overflow: 'scroll',
						border: '1px dotted black'
					}}
				>
					{text}
					{/* {items &&
						items.map((item) => {
							return <span>{item}</span>;
						})} */}
				</div>
			</React.Fragment>
		);
	}
}

export default MyComponent;
