import React, { useContext } from 'react';
/*
  코드 5-20 useContext 훅 사용하기

  * ⭐️ useContext를 사용하면 코드5-19 POINT3 영역(useContext를 통해서 return 영역이 아닌 function영역에서 conext에 접근가능!)도 콘텍스트 데이터에 접근할 수 있다.

*/

const UserContetxt = React.createContext();
const user = { name: 'jyoon', age: 23 };

//POINT1
function ParentComponent() {
	return (
		<UserContetxt.Provider value={user}>
			<ChildComponent />
		</UserContetxt.Provider>
	);
}

//POINT2
function ChildComponent() {
	//POINT3
	const user = useContext(UserContetxt);
	console.log('### useContext를 통해서 return 영역이 아닌 function영역에서 conext에 접근가능!');
	return (
		<div>
			<UserContetxt.Consumer>
				{(user) => (
					<div>
						<div>
							<h1> 설명 </h1>
							<p> 코드 5-20 useContext 훅 사용하기</p>
							<p>
								* ⭐️ useContext를 사용하면 코드5-19 POINT3 영역(useContext를 통해서 return 영역이 아닌 function영역에서
								conext에 접근가능!)도 콘텍스트 데이터에 접근할 수 있다.
							</p>
						</div>
						<hr />
						<div>
							<h1> 예제 </h1>
							<p>{`name is ${user.name}`}</p>
							<p>{`age is ${user.age}`}</p>
						</div>
					</div>
				)}
			</UserContetxt.Consumer>
		</div>
	);
}

export default ParentComponent;
