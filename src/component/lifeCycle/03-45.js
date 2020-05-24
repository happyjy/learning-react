import React from 'react';
import axios from 'axios';

/*
  # 코드 3-45 constructor 메서드에서 API 요청을 보내는 코드
    * 코드 3-32 constructor 메서드에서 API 호출하는 잘못된 예 참고 
    * constructor메서드에서 API호출 후 setState를 호출하면 데이터가 저장되지 않을 수 있으므로 주의
    * 프로미스 사용 
      * 하지만 constructor에서 API호출하고 componentDidMount 메서드에서 setState를 하는 방법은 프로미스를 사용하면 된다.
    * 코드가 다소 복잡해지는 단점이 있다. 
    * 응답 속도에 민감한 애플리케이션이 아니라면 componentDidMount 메서드에서 API를 호출하자

 */

class MyComponent extends React.Component {
	state = {
		persons: []
	};

  requestData(){
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
  }

	constructor(props) {
    super(props);
    this.dataPromise = this.requestData();
  }
  
  componentDidMount(){
    this.dataPromise.then( res => {
      const persons = res.data;
			this.setState({ persons });
    })
  }

	render() {
		const { persons } = this.state;
		return <ul>{persons && persons.map((persons) => <li key={persons.id}> {persons.name} </li>)}</ul>;
	}
}

export default MyComponent;

