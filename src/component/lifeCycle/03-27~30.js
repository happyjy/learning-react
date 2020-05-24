import React from 'react';
class Movie extends React.Component {
	/*
    sutdy1-2 초기 속성값 설정시 특정 속성값에 의존적일때 별도의 함수를 만들자.
  */
	getCurrentMovie() {
		const { age } = this.props;
		return age < 10 ? '뽀로로' : '어벤저스';
	}

	constructor(props) {
		console.log('constructor');
		super(props);
		/*
      study1 초기 속성값으로 상탯값을 만든다.
        - 상태값을 직접 할당하는 것은 constructor 메서드에서만 허용  
        - 다른 생명 주기 메서드에서 상탯값을 변경할때는 "setState" 메서드 사용해야 한다.
     */
		this.state = {
			// currentMovie: props.age < 10 ? '뽀로로' : '어벤저스'
			currentMovie: this.getCurrentMovie()
		};
	}

	/*
    study1-1 클래스 필드 사용
      - stage3(표준이될 거의활실)한 클래스 필드 사용시 constructor 사용 하지 않고 아래와 같이 가능
  */
	state = {
		currentMovie: this.props.age < 10 ? '뽀로로' : '어벤저스'
	};

	render() {
    return (<div>{this.state.currentMovie}</div>);
    
  }
}

class MyComponent extends React.Component{
  render() {
    return <Movie age={9}/>
  } 
}

export default MyComponent