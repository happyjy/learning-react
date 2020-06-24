import React from 'react';
/*
  # 코드 3-37 속성값 변경시 상탯값을 초기화하는 코드 
  * PriceEdit
      ㄴ PriceInput
  * 상품이 변경되어 PriceInput 컴포넌트 price가 변경 될때 같은 가격이면 초기화가 되지 않는다.
  
  * 내가 추가한 코드 설명
    - product.name을 추가 했다. 
      - 이유: price가 같아서 getDerivedStateFromProps 함수에서 state가 update가 되지 않았다는 것을 보여주기 위해서 추가 했다.
      - AppLifeCyle에서 change 함수에 price를 2900이 아닌수로 변경후에 Change Price 버튼을 클릭하면 사과로 변경되는걸 확인할 수 있다.

  * 확인해야할내용1
    - price변경으로 'getDerivedStateFromProps' 에서 state변경으로 PriceInput component 업데이트

  # 코드 3-38 Key 속성값을 이용한 코드 
  * 확인해야할내용2
    - ProductEdit 컴포넌트에 PriceInput컴포넌트에 key를 추가했을때 다른 key가 넘어 오면  
      PriceInput 컴포넌트 인스턴스는 다시 생성된다. 
    - 즉 getDrivedState를 통해서 render 여부를 확인하지 않아도 되다는 이야기다.

*/
class PriceInput extends React.Component {
	state = {
    id: 0,
		name: '',
		price: 0,
		prevPrice: 0
	};

	static getDerivedStateFromProps(props, state) {
		debugger;
		if (props.price !== state.prevPrice) {
			return {
        id: props.id,
				name: props.name,
				price: props.price,
				prevPrice: props.price
			};
		}
		return null;
	}

	onChange = (event) => {
		const price = Number(event.target.value);
		if (!Number.isNaN(price)) {
			this.setState({ price });
		}
	};

	render() {
		const { name, price } = this.state;
		debugger;
		return (
			<div>
				<input onChange={this.onChange} value={price} />
				<div>{name}</div>
			</div>
		);
	}
}

class ProductEdit extends React.Component {
	render() {
		const { product } = this.props;
		return <PriceInput key={product.id} price={product.price} name={product.name} />;
		// return <PriceInput price={product.price} name={product.name} />;
	}
}

class MyComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			product: {
				id: 1,
				name: '바나나',
				price: 2900
			}
		};

		this.speedUp = () => this.setState({ speed: this.state.speed + 1 });
		this.speedDown = () => this.setState({ speed: this.state.speed - 1 });

		this.changePrice = () => {
			this.setState((state, props) => {
				state.product.id = 2;    // #확인해야할내용2: id를 변경하면 PriceInput인스턴스가 새로 생기면서 rerender -> getDerivedStateFromProps 필요 없음
				state.product.price = 2900; // #확인해야할내용1: 2900이 아닌수로 하면 ProductEdit 컴포넌트 getDerivedStateFromProps 함수 if 조건문에 통과해서 state설정으로 rerender
				state.product.name = '사과';
				return state;
			});
    }
	}

	render() {
		return (
			<div>
				<ProductEdit product={this.state.product} />
				<button onClick={this.changePrice}>Change Price</button>
			</div>
		);
	}
}

export default MyComponent;
