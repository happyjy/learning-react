import React, { useState, useEffect, useDebugValue } from "react";
/*
  # 코드 5-42 useDebounce 훅의 래퍼 컴포넌트
  
  * 클래스형 컴포넌트에서 useDebounce 훅 이용하는 코드이다. 
    - useDebounce 처럼 반환값이 없는 훅은 간단한 래퍼 컴포넌트를 통해서 클래스형 컴포넌트에서 사용할 수 있다.
  * 코드 5-43 에서 useDebounce를 사용하는 클래스형 컴포넌트를 확인할 수 있다. 
  * input을 입력시 1초 동안 입력하지 않으면 name update된다.
*/

function useDebounce({ callback, ms, args }) {
  useEffect(() => {
    const id = setTimeout(callback, ms);
    return () => clearTimeout(id);
  });
}

function Debounce({ children, ...props }) {
  useDebounce(props);
  return children;
}

class Profile extends React.Component {
  state = { name: "", nameTemp: "" };
  render() {
    const { name, nameTemp } = this.state;
    return (
      <div>
        <div>
          <h1> 설명 </h1>
          <p> # 코드 5-42 useDebounce 훅의 래퍼 컴포넌트</p>
          <p> * 클래스형 컴포넌트에서 useDebounce 훅 이용하는 코드이다. </p>
          <p>
            {" "}
            -- useDebounce 처럼 반환값이 없는 훅은 간단한 래퍼 컴포넌트를 통해서
            클래스형 컴포넌트에서 사용할 수 있다.
          </p>
          <p>* input을 입력시 1초 동안 입력하지 않으면 name update된다.</p>
        </div>
        <hr></hr>
        <div>
          {/* <h1> 예제 </h1>
          <Debounce
            callback={() => this.setState({ name: nameTemp })}
            ms={1000}
            args={[nameTemp]}
          >
            <div>
              <p>{name}</p>
              <input
                type="text"
                value={nameTemp}
                onChange={(e) =>
                  this.setState({ nameTemp: e.currentTarget.value })
                }
              ></input>
            </div>
          </Debounce> */}
        </div>
      </div>
    );
  }
}

export default Profile;
