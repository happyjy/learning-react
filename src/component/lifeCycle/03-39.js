import React from 'react';
/*
  # 3-39 상탯갑슬 부모 컴포넌트에서 관리하는 코드 
  * 상태값을 부모 컴포넌트에서 관리한다. 

  * 설명
    1) PriceInput 컴포넌트가 갖고 있던 상탯값을 부모 컴포넌트(ProductEdit)가 관리한다. 
    2) 상태값을 변경하는 이벤트 처리 메서드도 부모 컴포넌트에서(ProductEdit) 정의한다.
    3) PriceInput 컴포넌트에서 상탯값과 이벤트 처리 메서드를 구현할 필요가 없기 때문에 함수형 컴포넌트로 정의할 수 있다. 
*/

class ProductEdit extends React.Component {
	// 설명1
	state = {
		currentPrice: this.props.product.price
	};

	// 설명2
	onChangePrice = (event) => {
		const currentPrice = Number(event.target.value);
		if (!Number.isNaN(currentPrice)) {
			this.setState({ currentPrice });
		}
	};

	render() {
		debugger;
		const { currentPrice } = this.state;
		return (
			<div>
				<PriceInput onChange={this.onChangePrice} price={currentPrice} />
				<div>{currentPrice}</div>
			</div>
		);
	}
}

// 설명3
function PriceInput({ price, onChange }) {
	return <input onChange={onChange} value={price} />;
}

class MyComponent extends React.Component {
	state = {
		product: {
			id: 1,
			name: '바나나',
			price: 2900
		}
	};

	render() {
		debugger;
		return <ProductEdit product={this.state.product} />;
	}
}

export default MyComponent;
