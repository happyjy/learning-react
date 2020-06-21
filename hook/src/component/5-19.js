import React from 'react';
/*
  코드 5-19 훅을 사용하지 않고 콘텍스트 API를 사용하기

  * ⭐️ "useContext" 훅을 이용하면 "Consumer 컴포넌트"를 사용하지 않고도 부모 컴포넌트로부터 전달된 코텍스트 데이터를 사용할 수 있다.
  
  * 아래 예제 설명 !
    > 훅을 사용하지 않고 기존 방식으로 콘텍스트 API를 사용한 코드
    - POINT1. 부모 컴포넌트에서 Provider 컴포넌트를 통해서 데이터를 전달
    - POINT2. 자식 컴포넌트에서는 Consumer 컴포넌트를 통해서 데이터를 사용
      - 한계!
        => 이 방식은 Consumer 컴포넌트 안족에서만 콘텍스트 데이터에 접근할 수 있다.
    - POINT3. ⭐️ 기존에는 POINT3 영역에서 콘텍스트 데이터를 사용하기 위해 콘텍스트 데이터를 전달해 주는 고차 컴포넌트를 사용
  
  * 코드 5-20에서 다룰 것!
    - ⭐️ 'useContext' 훅을 사용해 POINT3영역에서도 콘텍스트 데이터에 접근 할 수 있다.
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
	return (
		<div>
			<UserContetxt.Consumer>
				{(user) => (
					<div>
						<div>
							<h1> 설명 </h1>

							<p>코드 5-19 훅을 사용하지 않고 콘텍스트 API를 사용하기</p>
							<p />
							<p />
							<p>* useContext 훅을 이용하면 Consumer 컴포넌트를 사용하지 않고도 부모 컴포넌트로부터 전달된 코텍스트 데이터를 사용할 수 있다.</p>
							<p />
							<p>* 아래 예제 설명 !</p>
							<p> > 훅을 사용하지 않고 기존 방식으로 콘텍스트 API를 사용한 코드</p>
							<p> - POINT1. 부모 컴포넌트에서 Provider 컴포넌트를 통해서 데이터를 전달</p>
							<p> - POINT2. 자식 컴포넌트에서는 Consumer 컴포넌트를 통해서 데이터를 사용</p>
							<p> - 한계!</p>
							<p> => 이 방식은 Consumer 컴포넌트 안족에서만 콘텍스트 데이터에 접근할 수 있다.</p>
							<p> - POINT3. 기존에는 POINT3 영역에서 콘텍스트 데이터를 사용하기 위해 콘텍스트 데이터를 전달해 주는 고차 컴포넌트를 사용했었다.</p>
							<p />
							<p>* 코드 5-20에서 다룰 것!</p>
							<p> - ⭐️ 'useContext' 훅을 사용해 POINT3영역에서도 콘텍스트 데이터에 접근 할 수 있다.</p>
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
