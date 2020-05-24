import React from 'react';

/*
  # componentDidUpdate 메서드
    코드 3-50 componentDidMount 메서드에서도 API를 호출하도록 변경하기

    * componentDidUpdate 메서드는 초기화 단계에서는 호출되지 않는다. 
    따라서 코드 3-49에서 친구목록을 가져오는 API는 다음과 같이 componentdidmount메서드에서도 호출할 필요가 있다.

    * 다음과같은 패턴이 자주 사용되지만, 
    단지 componentDidUpate 메서드가 첫 렌더링 후에 호출되지 않는다는 이유로 코드가 복잡해진다. 
    비슷한 로직을 양족 모두에 작성하기 때문에 코드 중복이 발생하고, 한ㅉ고에 코드를 작성하는 것을 깜빡해서 버그가 생기기도한다. 
    이 문제는 리액트 16.8에 추가된 훅을 이용하면 쉽게 해결할 수 있다.
    5장에서 소개된다.

 */

//실제 동작하지 않는 코드
class MyComponent extends React.Component {
	componentDidMount() {
		const { user } = this.props;
		this.setFriends(user);
	}
	componentDidUpdate(prevProps) {
		const { user } = this.props;
		this.setFriends(user);
	}
	setFriends(user) {
		this.requestFriends(user).then((friends) => this.setState({ friends }));
	}
	requestFriends() {}
}

export default MyComponent;
