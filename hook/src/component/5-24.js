import React, { useState } from "react";
// import {saveToServer} from './api';
// import UserEdit fro './UserEdit';
/*
  코드 5-24 useCallback 훅이 필요한 예

  * useMemo 훅은 로다시 같은 라이브러리에서 제공해주는 메모이제이션과 비슷하다
  * useCallback은 리액트의 렌더링 성능을 위해 제공되는 훅
    - 컴포넌트가 렌더링될 때 마다 함수를 생성해서 자식 컴포넌트의 속성값으로 입력하는 경우가 많다. 
    - 리액트 팀에서는 최근의 브라우저에서 함수 생성이 성능에 미치는 영향은 작다고 주장
    - ⭐️ 그 보다는 속성값이 매번 변경되기 때문에 자식 컴포넌트에서 PureComponent나 React.memo를 사용해도 불필요한 렌더링이 발생한다는 문제점이 있다. 
    - 리액트 에서는 이 문제를 해결하기 위해 useCallback 훅을 제공
*/
function UserEdit({ setName, setAge }) {
  setTimeout(() => {
    setName("chageName");
    setAge(100);
  }, 2000);
  return <div>THIS IS USEREDIT COMPONENT</div>;
}

function saveToServer({ name, age }) {
  console.log("### saveToServer function: ", { name, age });
}

export default function () {
  const [name, setName] = useState("name");
  const [age, setAge] = useState(10);

  return (
    <div>
      <div>
        <h1> 설명 </h1>
        <p>
          {" "}
          * useMemo 훅은 로다시 같은 라이브러리에서 제공해주는 메모이제이션과
          비슷하다
        </p>
        <p> * useCallback은 리액트의 렌더링 성능을 위해 제공되는 훅</p>
        <p>
          {" "}
          - 컴포넌트가 렌더링될 때 마다 함수를 생성해서 자식 컴포넌트의
          속성값으로 입력하는 경우가 많다.{" "}
        </p>
        <p>
          {" "}
          - 리액트 팀에서는 최근의 브라우저에서 함수 생성이 성능에 미치는 영향은
          작다고 주장
        </p>
        <p>
          {" "}
          - ⭐️ 그 보다는 속성값이 매번 변경되기 때문에 자식 컴포넌트에서
          PureComponent나 React.memo를 사용해도 불필요한 렌더링이 발생한다는
          문제점이 있다.{" "}
        </p>
        <p> - 리액트 에서는 이 문제를 해결하기 위해 useCallback 훅을 제공</p>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        <p>{`name is ${name}`}</p>
        <p>{`age is ${age}`}</p>
        <UserEdit
          onSave={() => saveToServer(name, age)}
          setName={setName}
          setAge={setAge}
        ></UserEdit>
      </div>
    </div>
  );
}
