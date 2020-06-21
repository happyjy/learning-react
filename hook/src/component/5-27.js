import React, { useReducer } from "react";
/*
  코드 5-27 useReducer 훅과 콘텍스트 API를 이용해서 이벤트 처리 함수를 전달하기
  * createContext로 dispatch 함수를 넘기면서 
   state는 props로 넘긴것봐... createContext 중첨으로 써보자.

  * 컴포넌트 구조 
      Profile
        ㄴ SomeComponent
          ㄴ Greeting

  * Profile에서 reducer dispatch함수를 createContext를 통해서 바로 'Greeting' component로 전달
      (props를 통해서 SomeComponent 보내지 않고 )

  * contextAPI를 사용해서 Profile 컴포넌트에서 SomeComponent를 건너뛰고 Greeting 컴포넌트로 데이터 바로 전달
    - 사용한 contextAPI ProfileDispatch, ProfileState
      
*/

const INITIAL_STATE = { name: "empty", age: 100 };
function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      return { ...state, age: action.age };
    default:
      return state;
  }
}

const ProfileDispatch = React.createContext(null);
const ProfileState = React.createContext(null);

function Profile() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <h1> 예제 </h1>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileState.Provider value={state}>
        <ProfileDispatch.Provider value={dispatch}>
          <SomeComponent profileInfo={state} />
        </ProfileDispatch.Provider>
      </ProfileState.Provider>
    </div>
  );
}

function SomeComponent({ profileInfo }) {
  console.log("### someComponent: ", profileInfo);
  return (
    <div>
      "SOME COMPONENT"
      <Greeting profileInfo={profileInfo} />
    </div>
  );
}

function Greeting({ profileInfo }) {
  console.log("### Greeting component: ", profileInfo);

  return (
    <ProfileState.Consumer>
      {(state) => (
        <ProfileDispatch.Consumer>
          {(dispatch) => (
            <div>
              <p>"GREETING COMPONENT"</p>
              <input
                type="text"
                value={state.name}
                onChange={(e) => {
                  dispatch({ type: "setName", name: e.currentTarget.value });
                }}
              />
              <input
                type="number"
                value={state.age}
                onChange={(e) => {
                  dispatch({ type: "setAge", age: e.currentTarget.value });
                }}
              />
            </div>
          )}
        </ProfileDispatch.Consumer>
      )}
    </ProfileState.Consumer>
  );
}

export default Profile;
