import React from 'react';
import axios from 'axios';
/*
  코드 5-7 useEffect 훅에서 API 호출하기
  * 코드 5-6을  클래스형 컴포넌트로 작성 
  * 첫번째 렌더링 후에는 componentDidMount메서드가 호출, 
    두번째 렌더링 후부터는 componentDidUpdate 메서드가 호출 되므로 API와 통신하는 코드를 양쪽에서 작성해야한다.
  * 단 componentDidUpdate 메서드에서는 userId가 변경된 경우에만 API를 호출 
  * 이 처럼 클래스형 컴포넌트에서는 중복된 코드가 여러 생명주기 메서드에 흩어져 있는 경우가 많다.
*/
class Profile extends React.Component {
	state = {
		user: null
	};
	componentDidMount() {
		const { userId } = this.props || { userId: 'happyjy' };
		axios('https://api.github.com/users/happyjy').then((Response) => {
			console.log(Response);
			this.setState({ user: Response.data });
		});
	}
	componentDidUpdate(prevProps) {
		const { userId } = this.props || { userId: 'happyjy' };
		if (userId !== prevProps.userId) {
			axios('https://api.github.com/users/happyjy').then((Response) => {
				console.log(Response);
				this.setState({ user: Response.data });
			});
		}
	}
	render() {
		const { user } = this.state;
		return (
			<div>
				<div>
					<h1> 설명 </h1>
					<p> 코드 5-7 useEffect 훅에서 API 호출하기</p>
					<p> * 코드 5-6을 클래스형 컴포넌트로 작성 </p>
					<p> * 첫번째 렌더링 후에는 componentDidMount메서드가 호출, </p>
					<p> 두번째 렌더링 후부터는 componentDidUpdate 메서드가 호출 되므로 API와 통신하는 코드를 양쪽에서 작성해야한다.</p>
					<p> * 단 componentDidUpdate 메서드에서는 userId가 변경된 경우에만 API를 호출 </p>
					<p> * 이 처럼 클래스형 컴포넌트에서는 중복된 코드가 여러 생명주기 메서드에 흩어져 있는 경우가 많다.</p>
				</div>
				<hr />
				<div>
					<h1> 예제 </h1>
					<div>{!user && <p>사용자 정보를 가져오는 중 ...</p>}</div>
					<div>
						{user && (
							<p>
								{user.name}/ {user.id}
							</p>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
