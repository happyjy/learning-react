import React, { useState, useEffect } from "react";
/*
  # 코드 5-41 디바운스 기능을 제공하는 useDebounce 훅의 구현 및 사용

  * 반환값이 없는 커스텀 훅을 클래스형 컴포넌트에서 사용하는 방법을 알아보자 

  * 아래 예제 설명
    - 디바운스 기능을 제공하는 커스텀 훅과 그것을 사용하는 코드 

  * 코드 설명
    - POINT1
      : ms 시간 동안 args가 변경되지 않으면 callback 함수를 호출하는 커스텀 훅
    - POINT2
      : 사용자가 입력하는 문자역을 nameTemp에 기록하다가 1초간 입력이 없으면 name에 저장
  * input을 입력시 1초 동안 입력하지 않으면 name update된다.
*/

//POINT1
function useDebounce({ callback, ms, args }) {
  useEffect(() => {
    const id = setTimeout(callback, ms);
    return () => clearTimeout(id);
  });
}

function Profile() {
  let [name, setName] = useState("");
  let [nameTemp, setNameTemp] = useState("");
  //POINT2
  useDebounce({
    callback: () => setName(nameTemp),
    ms: 1000,
    args: [nameTemp],
  });

  return (
    <div>
      <div>
        <h1> 설명 </h1>
        <p>
          {" "}
          # 코드 5-41 디바운스 기능을 제공하는 useDebounce 훅의 구현 및 사용
        </p>
        <p></p>
        <p>
          * 반환값이 없는 커스텀 훅을 클래스형 컴포넌트에서 사용하는 방법을
          알아보자{" "}
        </p>
        <p>* 아래 예제 설명</p>
        <p> -- 디바운스 기능을 제공하는 커스텀 훅과 그것을 사용하는 코드 </p>
        <p></p>
        <p>* 코드 설명</p>
        <p> -- POINT1</p>
        <p>
          {" "}
          : ms 시간 동안 args가 변경되지 않으면 callback 함수를 호출하는 커스텀
          훅
        </p>
        <p> -- POINT2</p>
        <p>
          {" "}
          : 사용자가 입력하는 문자역을 nameTemp에 기록하다가 1초간 입력이 없으면
          name에 저장
        </p>
        <p>* input을 입력시 1초 동안 입력하지 않으면 name update된다.</p>
      </div>
      <hr></hr>
      <div>
        <h1> 예제 </h1>
        <p>{name}</p>
        <input
          type="text"
          value={nameTemp}
          onChange={(e) => setNameTemp(e.currentTarget.value)}
        ></input>
      </div>
    </div>
  );
}
export default Profile;
