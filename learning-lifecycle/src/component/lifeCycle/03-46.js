import React from 'react';

/*
  # 코드 3-46 shouldComponentUpdate 메서드의 기본 구조
    * def
      - 성능 최적화를 위해 존재
      - return type은 boolean이며 이 값에 따라 dom 업데이트 여부가 결정된다.
    * 설명
      - shouldComponentUpdate 메서드에서 참 반환시 
        -> render 메서드가 호출
        -> 가상 돔 수준에서 변견된 내용이 있는지 비교
        즉, 한 번의 변수 비교를 통해 불필요한 연산을 줄이는 효과가 있다.
      - 별도로 구현하지 않으면 항상 참을 반환
        - 이때는 실제 돔이 변경되지 않는 상황에서도 항상 가상 돔 비교를 한다.
      - 성능 이슈가 발생했을때 shouldComponentUpdate 메서드를 작성해도 늦지 않다.
 */


// 바나나, 사과 price가 다를때만 동작
class PriceInput extends React.Component {
	state = {
		name: '',
		price: 0,
		prevPrice: 0
  };
  
	static getDerivedStateFromProps(props, state) {
		debugger;
		// if (props.price !== state.prevPrice) {
    return {
      name: props.name,
      price: props.price,
      prevPrice: props.price
    };
		// }
		// return null;
  }
  
  shouldComponentUpdate(nextProps, nextState){
    debugger;
    const { price } = this.state;
    return price !== nextState.price;
  }

	onChange = event => {
		const price = Number(event.target.value);
		if (!Number.isNaN(price)) {
			this.setState({ price });
		}
  };
  
	render() {
		const { name, price } = this.state;
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
	}
}

class MyComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			product: {
				id: 1,
				name: '바나나',
				price: 29001
			}
		};

		this.speedUp = () => this.setState({ speed: this.state.speed + 1 });
		this.speedDown = () => this.setState({ speed: this.state.speed - 1 });

		this.changePrice = () => {
      this.setState((state, props) => {
				state.product.id = 2;    // #확인해야할내용1: id를 변경하면 PriceInput인스턴스가 새로 생기면서 rerender -> getDerivedStateFromProps 필요 없음
				state.product.price = 2900; // #확인해야할내용2: 2900이 아닌수로 하면 ProductEdit 컴포넌트 getDerivedStateFromProps 함수 if 조건문에 통과해서 state설정으로 rerender
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

