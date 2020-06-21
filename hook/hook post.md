# 진화된 함수형 컴포넌트: 리액트 훅

## 1 리액트 훅 기초 익히기

### 1.1 리액트 훅이란?

1. 로직을 재사용하는 기존 방식의 한계
2. 클래스 형 컴포넌트의 한계
3. 훅의 장점

### 1.2 함수형 컴포넌트에 상탯값 추가하기: useState

- 코드 5-1 useState 훅 사용하기

1. 클래스형 컴포넌트와 비교하기

* 코드 5-2 클래스형 컴포넌트에서 상태값 관리하기

2. 여러 개의 useState 훅 사용하기

- 코드 5-3 여러 개의 useState 훅사용하기

3. useState 훅 하나로 여러 상탯값 관리하기

- 코드 5-4 하나의 useState 훅으로 여러 상탯값 관리하기

### 1.3 함수형 컴포넌트에서 생명 주기 함수 이용하기: useEffect

* useEffect 두번째 매개변수 모양에 따른 3가지 의미 
  1. ⭐️ useEffect 두번째 매개변수 '[]'의 의미 
    - 컴포넌트가 마운트 될때만(=componentDidMounted) 첫번째 매개변수 함수 호출
    - 컴포넌트가 언마운트 될때(=componentWillUnmount) 첫번째 매개변수 함수 return 함수 호출
  
  2. ⭐️ useEffect 두번째 매개변수 '[value]'의 의미 
    - 배열의 값이 변경되는 경우에만 함수가 호출
  
  3. ⭐️ useEffect 두번째 매개변수가 없을 때
    - 클래스 컴포넌트 "componentDidMount", "componentDidUpdate"두 함수에서 수행하는 것과같다.

- 코드 5-5 useEffect 훅의 사용예
  * ⭐️ useEffect에 있는 코드는 클래스형 컴포넌트에서 어떻게 구현할까? 
    - **클래스형 컴포넌트의 componentDidMount, componentDidUpdate 양쪽 메서드에 추가하면 가은 기능**을 하게 된다.
  * ⭐️ 버튼을 누르면? 
    - 다시 렌더링 되고, 렌더링이 끝나면 useEffect 훅에 입력된 함수가 호출

1. API를 후출하는 기능: 함수형 컴포넌트로 작성하기

- 코드 5-6 useEffect 훅에서 API 호출하기
  * **usdEffect 훅의 두번째 매개변수로 배열을 입력**하면, 배열의 값이 변경되는 경우에만 함수가 호출

2. API를 호출하는 기능: 클래스형 컴포넌트로 작성하기

- 코드 5-7 클래스형 컴포넌트에서 API 호출하기
  
3. 이벤트 처리 함수를 등록하고 해제하는 기능: 함수형 컴포넌트로 작성하기

- 코드 5-8 useEffect 훅을 이용해서 이벤트 여러 함수를 등록하고 해제하기
  * POINT2: useEffect 첫번째 매개변수
    - ⭐️ useEffect 첫번째 매개변수에 등록된 함수가 함수를 반환할 수 있다. 
    - ⭐️ 반환된 함수는 컴포넌트가 언마운트 되거나 첫번째 매개변수로 입력된 함수가 호출 되기 직전에 호출된다.        
  * POINT3: useEffect 두번째 매개변수 
    - ⭐️ 빈 배열을 넣으면 컴포넌트가 마운트 될 때만 첫번째 매개변수로 입력된 함수가 호출되고, 컴포넌트가 언마운트 퇼때만 반환된 함수가 호출
    - ⭐️ 클래스형 컴포넌트의 componentDidMount, componentWillUnmount 메서드에서만 실행되는 것과같은 효과가 있다.

4. 이벤트 처리 함수의 등록하고 해제하는 기능: 클래스형 컴포넌트로 작성하기

- 코드 5-9 이벤트 처리 함수의 등록과 해제를 클래스형 컴포넌트로 작성하기

5. 두 가지 기능을 합치기: 함수형 컴포넌트에서 작성하기

- 코드 5-10 훅을 사용하면 로직별로 코드를 모을 수 있다.
  * 코드 5-06, 08 API호출, windowWidth 코드를 합쳐보자!
  * ⭐️ 각각의 로직이 다른 useEffect에 있어 가독성이 좋다.

6. 클래스형 컴포넌트에서는 로직이 분산된다.

- 코드 5-11 클래스형 컴포넌트에서는 로직이 분산된다.

### 1.4 훅 직접 만들기
> 훅을 직접 만들어서 사용하면 고차 컴포넌트와 렌더 속성값 패턴 처럼 로직을 재사용할 수 있다. 

1. useWindowWidth 커스텀 훅

- 코드 5-12 useWindowWidth 커스텀 훅
  * POINT1
    - ⭐️ useState, useEffect훅을 이용해서 커스텀 훅을 만들었다. 
    - ⭐️ 이렇게 레고 블록처럼 기존 훅을 이용해서 새로운 훅을 만들 수 있다는 점이 훅의 매력이다.
  * POINT2
    - ⭐️ 창의 너비를 저장해서 제공하는 것이 useWindowWidth 훅의 역할

2. useWindowWidth 훅 사용하기

- 코드 5-13 useWindowWidth 훅 사용하기
  * ⭐️ 예로 부터 useWindowWidth 훅에 사용으로 미루어 커스텀 훅의 장점
    - 공통된 동작을 따로 빼서 다른 컴포넌트에도 똑같이 적용할 수 있겠다. 
  * ⭐️ componentDidMount 시점부터 적용하기기 위해서는 어떻게 해야할까? 

3. useHasMounted 커스텀 훅
> 다음 두 코드 컴포넌트 mount여부에 따라서 구현한 커스텀 훅, 고차 컴포넌트를 비교 했을때 두가지 비교사항이 있다.  
> * 코드 5-14 useHasMounted 커스텀 훅  
> * 코드 5-15 withHasMounted 고차 컴포넌트
> 1. 훅이 고차 컴포넌트보다 간결하게 코드 작성가능
> 2. 타입스크립트 같이 정적 타입 언어를 사용하는 경우 고차 컴포넌트의 타입을 정의하는 것이 여간 귀찮은 작업!, but 훅은 일반 함수이기 때문에 쉽게 타입을 정의할 수 있다.


- 코드 5-14 useHasMounted 커스텀 훅
  * 컴포넌트 마운트 여부를 알려주는 훅이다
  * ⭐️ useHasMounted 훅은 컴포넌트가 마운트 된 후에 참 반환
  * ⭐️⭐️ useEffect 훅의 두 번째 매개변수에 빈 배열을 넣었기 때문에 업데이트 하는 경우에는 setHasMounted 함수가 호출 되지 않는다.
  
  * ⭐️ useEffect 두번째 매개변수 '[]'의 의미 
    - 컴포넌트가 마운트 될때만(=componentDidMounted) 첫번째 매개변수 함수 호출
    - 컴포넌트가 언마운트 될때(=componentWillUnmount) 첫번째 매개변수 함수 return 함수 호출
  
  * ⭐️ useEffect 두번째 매개변수 '[value]'의 의미 
    - 배열의 값이 변경되는 경우에만 함수가 호출
  
  * ⭐️ useEffect 두번째 매개변수가 없을 때
    - 클래스 컴포넌트 "componentDidMount", "componentDidUpdate"두 함수에서 수행하는 것과같다.

- 코드 5-15 withHasMounted 고차 컴포넌트

### 1.5 훅 사용 시 지켜야 할 규칙

- 코드 5-16 훅 사용 시 규칙을 위한반 경우
  * ⭐️ 1. 조건에 따라 호출하면 
    - 에러는 안나는데 순서가 보장 되지 않는다.
  * ⭐️ 2. for문 안에서는 아래와 같은 에러를 
    - React Hook "useState" may be executed more than once. Possibly because it is called in a loop. React Hooks must be called in the exact same order in every component render
  * ⭐️ 3. 일반 function 안에서 호출할 시 
    - React Hook "useState" is called in function "func" which is neither a React function component or a custom React Hook function

1. 훅의 호출 순서가 같아야 하는이유

- 코드 5-17 여러 개의 훅 사용하기
  * ⭐️ useState훅에 전달한 정보는 상탯값의 기본값밖에 없다.  
    => ⭐️ 리액트가 age, name상탯값을 구분할 수 있는 유일한 정보는 훅이 사용된 순서
  * 추측!
    - ⭐️ useState하면 생성되는 데이터 들이 stack 으로 관리 된다라고 추측
    - 예제 5-18 리액트 내부코드 예제를 보면 배열로 관리 되고 있다.

2. 리액트가 내부적으로 훅을 처리하는 방식

- 코드 5-18 의사코드로 표현한 리액트의 내부 코드
  * POINT2
    - ⭐️ 각 훅 함수에서는 hooks 배열에 자신이 데이터를 추가

## 2. 리액트 내장 훅 살펴보기

### 2.1 Consumer 컴포넌트 없이 콘텍스트 사용하기: useContext

- 코드 5-19 훅을 사용하지 않고 콘텍스트 API를 사용하기
  * ⭐️ "useContext" 훅을 이용하면 "Consumer 컴포넌트"를 사용하지 않고도 부모 컴포넌트로부터 전달된 코텍스트 데이터를 사용할 수 있다.
  * POINT3. ⭐️ 기존에는 POINT3 영역에서 콘텍스트 데이터를 사용하기 위해 콘텍스트 데이터를 전달해 주는 고차 컴포넌트를 사용
  
  * 코드 5-20에서 다룰 것!
    - ⭐️ 'useContext' 훅을 사용해 POINT3영역에서도 콘텍스트 데이터에 접근 할 수 있다.

- 코드 5-20 useContext 훅 사용하기
  * ⭐️ useContext를 사용하면 코드5-19 POINT3 영역(useContext를 통해서 return 영역이 아닌 function영역에서 conext에 접근가능!)도 콘텍스트 데이터에 접근할 수 있다.

### 2.2 함수형 컴포넌트에서 돔 요소 접근하기: useRef

- 코드 5-21 훅 사용하기
  * 돔요소 접근 방법 
    - 클래스형 컴포넌트: createRef 함수 사용
    - 함수형 코포넌트: useRef 훅 사용

1. 함수형 컴포넌트에서 렌더링과 무관한 값 저장하기
  
- 코드 5-22 useRef 훅을 이용해서 이전 상탯값 저장하기
  * POINT4
    - age가 변경돼서 다시 렌더링 할때 POINT3의 prevAge는 age의 최신 상탯값으로 변경된다.
    - ⭐️ button클릭으로 age 변경 -> POINT3 코드 수행 -> "render완료 되면" useEffect(POINT2수행)으로 useRef로 설정한 prevAgeRef 업데이트

### 2.3 메모이제이션 훅: useMemo, useCallback

1. useMemo

- 코드 5-23 useMemo 훅의 사용 예
  * 계산량이 많은 함수의 반환값을 재활용하는 용도로 사용
  * useMemo 훅은 로다시 같은 라이브러리에서 제공해주는 메모이제이션과 비슷하다

  * useMemo 훅의 첫번째 매개변수로 함수를 입력
  * useMemo 훅은 이 함수가 반환한 값을 기억
  
  * useMemo 훅의 두번째 매개변수로 입력된 배열의 값이 변경되지 않으면 이전에 반환된 값을 재사용
  * 만약 배열의 값이 변경됐으면 첫번째 배개 변수로 입력된 함수를 실행하고 그 반환값을 기억.

2. useCallback

- 코드 5-24 useCallback 훅이 필요한 예
  * useCallback은 리액트의 렌더링 성능을 위해 제공되는 훅
    - ⭐️ 컴포넌트가 렌더링될 때 마다 함수를 생성해서 자식 컴포넌트의 속성값으로 입력하는 경우가 많다. 
    - 리액트 팀에서는 최근의 브라우저에서 함수 생성이 성능에 미치는 영향은 작다고 주장
    - ⭐️ 그 보다는 속성값이 매번 변경되기 때문에 자식 컴포넌트에서 PureComponent나 React.memo를 사용해도 불필요한 렌더링이 발생한다는 문제점이 있다. 
    - ⭐️ 리액트 에서는 이 문제를 해결하기 위해 useCallback 훅을 제공

- 코드 5-25 useCallback 훅 사용하기
  * 5-24에서 onSave 속성값으로 전달했던 것과 같은 함수를 useCallback 훅의 첫번째 매개변수로 입력한다.
  * ⭐️ 두번째 매개변수로 전달한 배열의 값이 변경되지 않으면 이전에 생성한 함수가 재사용된다. 
  * ⭐️ 따라서 name과 age값이 변경되지 않으면 UserEdit 컴포넌트의 onSave 속성값으로 항상 같은 함수가 전달된다.

### 2.4 컴포넌트의 상탯값을 리덕스처럼 관리하기: useReducer

- 코드 5-26 useReducer 훅의 사용 예
  * POINT1 
    - 리덕스의 리듀서와 같은 방식으로 작성한 리듀서 함수
  * POINT2 
    - useReducer 훅의 매개변수로 앞에서 작성한 리듀서와 초기 상탯값을 입력
    - useReducer 훅은 상탯값과 dispatch 함수를 차례대로 반환
  * POINT3 
    - 리덕스의 dispatch 함수와 같은 방식으로 사용

1. 트리의 깊은 곳으로 이벤트 처리 함수 전달하기

- 코드 5-27 useReducer 훅과 콘텍스트 API를 이용해서 이벤트 처리 함수를 전달하기
  * 컴포넌트 구조 

    ```
    Profile  
      ㄴ SomeComponent  
        ㄴ Greeting
    ```

  * Profile에서 reducer dispatch함수를 createContext를 통해서 바로 'Greeting' component로 전달  
      (props를 통해서 SomeComponent 보내지 않고 )

  * contextAPI를 사용해서 Profile 컴포넌트에서 SomeComponent를 건너뛰고 Greeting 컴포넌트로 데이터 바로 전달
    - 사용한 contextAPI ProfileDispatch, ProfileState

### 2.5 부모 컴포넌트에서 접근 가능한 함수 구현하기: useImperativeHandle

1. useImperativeHandle 훅으로 외부로 공개할 함수 정의하기

- 코드 5-28 부모 컴포넌트에서 접근 가능한 함수를 구현하기
  * 코드 5-29 부모 컴포넌트에서 호출될 자식 컴포넌트
  * 부모 컴포넌트에서 접근 가능한 함수를 구현 방법
    - useImperativeHandle 훅에 두개 매개변수 지정
      - 첫번째 매개변수  
        : type - ref 객체  
        : useImperativeHandle 선언한 컴포넌트를 사용할 컴포넌트에서 useRef 훅으로 설정(5-29 참고)한 ref
      - 두번째 매개변수  
        : type - function  
        : seImperativeHandle 선언한 컴포넌트를 사용할 컴포넌트에서 호출할 함수

2. useImperativeHandle 훅으로 정의한 함수를 외부에서 호출하기

- 코드 5-29 부모 컴포넌트에서 자식 컴포넌트 함수 호출하기
  * ⭐️ **Profile 컴포넌트의 속성 값으로 ref 객체를 전달한다.**
  * useRef함수 return value
    - useImperativeHandle 함수 두번째 변수 함수의 return value(함수가 등록된 dictionary object)
  * add Age 클릭시 ChildComponent의 age가 5씩 증가 합니다.

### 2.6 기타 리액트 내장 훅: useLayoutEffect, useDebugValue

1. useLayoutEffect
2. useDebugValue

- 코드 5-30 useDebugValue 훅을 사용하는 코드
  * 개발 편의를 위해 제공되는 훅
  * 커스텀 훅의 내부 상태를 관찰 할 수 있따. 
  * 다음 예제는 useToggle 커스텀 훅에서 디버깅을 위해 sueDebuggValue훅을 사용하는 코드
  * 리액트 개발자 도구에서 확인 할 수 있다.

## 3. 클래스형 컴포넌트와 훅

### 3.1 constructor 메서드

- 코드 5-31 훅으로 변환할 constructor 메서드
  * 클래스 컴포넌트에서 constructor는 주로 **속성값으로부터 초기 상탯값을 계산하는 용도로 사용**
  * **componentDidMount보다 좀 더 빠르게 작업을 처리하는 용도**로 사용
  * 아래 예제는 훅으로 바꿀 클래스 컴포넌트 constructor예제

- 코드 5-32 constructor 메서드를 훅으로 구현하기
  * POINT1. 
    - 속성값으로 부터 계산최 **초기 상탯값은 useState의 인수로 사용**
  * POINT2. 
    - 컴포넌트 최초 호출 시에만 callApi함수를 호출하기 위해서 useRef 훅을 이용(코드 5-22 참고)
    - 2번 로직이 자주 사용된다면 커스텀 훅을 만들어서 사용가능 (5.33예제 확인)

- 코드 5-33 useOnFirstRender 커스텀 훅

  ```js
    import { useRef } from 'react';

    export default function useOnFirstRender(func) {
      const isFirstRef = useRef(true);
      if (isFirstRef.current) {
        isFirstRef.current = false;
        func && func();
      }
    }
  ```

### 3.2 componentDidUpdate 메서드

- 코드 5-34 usePrevious 커스텀 훅
  ```js
  import { useEffect, useRef } from 'react';
  //POINT1
  export default function(value) {
    //POINT2
    const valueRef = useRef();
    //POINT3
    useEffect(
      () => {
        valueRef.current = value;
      },
      [ value ]
    );
    //POINT4
    return valueRef.current || '';
  }

  ```
  * ⭐️ usePrevious 설명
    * 코드 5-22 참고 
    * POINT 1. 매개변수로 현재 값을 받는다. 
    * POINT 2. 이전 값을 기억하기 위해 useRef 훅을 이용
    * POINT 3. 렌더링 후 현재 값을 이전 값으로 만든다.
    * POINT 4. 이전 값을 반환 

  # ⭐️ input에 입력시 수행 순서 
    * debugger 순서로 callstack순서를 확인해보자(step 1,2,3 확인) 
    * ⭐️ useState의 setxxx function이후 가 일어나면  
      setxxx functino이 있는 function 전체 다시 수행된다.  
      그리고  
      useEffect가 있다면 useEffect가 비동기로 수행된다.  

- 코드 5-35 훅으로 변환할 componentDidUpdate 메서드
  ```js
    import React from 'react';

    class Profile extends React.Component {
      state = { name: this.props.name };
      componentDidUpdate(prevProps) {
        const { userId, name } = this.props;
        if (prevProps.userId !== userId) {
          this.setState({ name });
        }
      }
      render() {
        return (
          <div>
            ...
          </div>
        );
      }
    }

    export default Profile;
  ```
- 코드 5-36 componentDidUpdate 메서드를 훅으로 변환하기
  > userIdd가 변경된 경우 name 상탯값을 새로운 사용자 이름으로 변경
    * POINT1. userPrevious 훅을 이용해서 이전 userId를 저장
    * POINT2. 마운트 여부를 useRef훅으로 관리
    * POINT3. userIdd가 변경된 경우 name 상탯값을 새로운 사용자 이름으로 변경

  ```js
    import React, { useState, useEffect, useRef } from 'react';
    import usePrevious from './customHook/usePrevious';

    //props = {id name, age, date}
    export default function({ id, name, age, date }) {
      const [ userName, setUserName ] = useState(name);
      const [ userId, setUserId ] = useState(id);
      //POINT1
      const prevUserId = usePrevious(userId);
      //POINT2
      const isMountedRef = useRef(false);

      useEffect(() => {
        if (isMountedRef.current) {
          //POINT3
          if (prevUserId !== userId) {
            setUserName(userName);
          }
        } else {
          isMountedRef.current = true;
        }
      });

      const onClick = () => {
        setUserName('otherJyoon');
        setUserId('okwoyjy');
      };

      return (
        <div>
          <div>
            <h1> 예제 </h1>
            {(backtic)this is current userName: ${userName}(backtic)}
            <br />
            <button onClick={onClick}>버튼으로 componentDidupdate 테스트 </button>
          </div>
        </div>
      );
    }
  ```

- 코드 5-37 useOnUpdate 커스텀 훅
  ```js
    import { useRef, useEffect } from 'react';

    export default function(func) {
      const isMountedRef = useRef(false);
      useEffect(() => {
        if (isMountedRef.current) {
          func();
        } else {
          isMountedRef.current = true;
        }
      });
    }
  ```
  * 마운트가 됐을때 넘겨 받은 function을 수행해주는 훅


### 3.3 getDerivedStateFromProps 메서드

- 코드 5-38 훅으로 변경할 getDerivedStateFromProps 정적 메서드
  ```js
    import React from 'react';

    class SpeedIndicator extends React.Component {
      state = { isFaster: false, prevSpeed: 0 };
      static getDerivedStateFromProps(props, state) {
        debugger;
        if (props.speed !== state.prevSpeed) {
          return {
            isFaster: props.speed > state.prevSpeed,
            prevSpeed: props.speed
          };
        }
        return null;
      }

      render() {
        const { isFaster, prevSpeed } = this.state;
        const { speed } = this.props;
        return (
          <div>
            <p>current spped: {speed}</p>
            <p>getting faster?: {isFaster ? 'yes' : 'no'}</p>
          </div>
        );
      }
    }

    class car extends React.Component {
      state = {
        speed: 0,
        enterSpeed: 0
      };

      handleChange = (e) => {
        console.log('### handleChange: ');
        this.setState({ speed: e.target.value });
      };

      handleSubmit = (e) => {
        console.log('### handleSubmit: ');
        const { speed } = this.state;
        debugger;
        this.setState({ enterSpeed: speed });
        e.preventDefault();
      };

      render() {
        const { speed, enterSpeed } = this.state;
        return (
          <div>
            이건차다 스피드 입력해봐
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type='text' value={speed} onChange={this.handleChange.bind(this)} />
              <br />
              <button type='submit'>enter</button>
            </form>
            <br />
            <SpeedIndicator speed={enterSpeed} />
          </div>
        );
      }
    }

    export default car;
  ```

- 코드 5-39 getDerivedStateFromProps 정적 메서드를 훅으로 변경하기
  ```js
    import React, { useState, useEffect } from "react";
  
    function SpeedIndicator({ speed }) {
      //POINT1
      const [isFaster, setIsFaster] = useState(false);
      const [prevSpeed, setPrevSpeed] = useState(0);
      if (speed !== prevSpeed) {
        setIsFaster(speed > prevSpeed);
        setPrevSpeed(speed);
      }
      return <p>gettin faster?: {isFaster ? "yes" : "no"}</p>;
    }

    export default SpeedIndicator;
  ```
  * speed 속성값이 변경되면 렌더링 과정에서 바로 상탯값을 변경
  * 리액트는 렌더 함수에서 상탯값을 변경하면 변경된 상탯값으로 렌더 함수를 다시 호출 한다.
  * getDerivedStateFromProps 정적 메서드를 사용한 방법 보다는 조금비효율 적인 측면이 있지만 돔을 변경하기 전에 발생하는 연산이므로 성능에 크게 영향을 주지 않는다.
  * 주의
    - 렌더 함수가 무한대로 호출될 수 있다.
    - 코드5-39에서 작성한 prevSpeed를 useState훅으로 관리하지 않고 이전에 작성한 usePreviou 커스터 훅으로 관리했다면 렌더함수가 무한대로 호출된다.

### 3.4 forceUpdate 메서드

- 코드 5-40 useReducer 훅을 이용해서 forceUpdate 메서드를 구현하기

  ```js
    import React, { useReducer } from 'react';

    function MyComponent() {
      //POINT1
      const [ _, forceUpdate ] = useReducer((s) => s + 1, 0);
      function onClick() {
        forceUpdate();
      }
    }
  ```

## 4. 기존 클래스형 컴포넌트를 고려한 커스텀 훅 작성법

### 4.1 커스텀 훅의 반환값이 없는 경우

- 코드 5-41 디바운스 기능을 제공하는 useDebounce 훅의 구현 및 사용
  
  ```js
    import React, { useState, useEffect } from "react";

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

  ```
  * 반환값이 없는 커스텀 훅을 클래스형 컴포넌트에서 사용하는 방법을 알아보자 

  * 아래 예제 설명
    - 디바운스 기능을 제공하는 커스텀 훅과 그것을 사용하는 코드 

  * 코드 설명
    - POINT1
      : ms 시간 동안 args가 변경되지 않으면 callback 함수를 호출하는 커스텀 훅
    - POINT2
      : 사용자가 입력하는 문자역을 nameTemp에 기록하다가 1초간 입력이 없으면 name에 저장
  * input을 입력시 1초 동안 입력하지 않으면 name update된다.

1. 클래스형 컴포넌트에서 useDebounce 훅 이용하기

- 코드 5-42 useDebounce 훅의 래퍼 컴포넌트

```js
  import React, { useEffect } from 'react';

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
    state = { name: '', nameTemp: '' };
    render() {
      const { name, nameTemp } = this.state;
      return (
        <div>
          <div>
            <h1> 예제 </h1>
            <Debounce callback={() => this.setState({ name: nameTemp })} ms={1000} args={[ nameTemp ]}>
              <div>
                <p>{name}</p>
                <input
                  type='text'
                  value={nameTemp}
                  onChange={(e) => this.setState({ nameTemp: e.currentTarget.value })}
                />
              </div>
            </Debounce>
          </div>
        </div>
      );
    }
  }

  export default Profile;
```

  * 클래스형 컴포넌트에서 useDebounce 훅 이용하는 코드이다. 
    - useDebounce 처럼 반환값이 없는 훅은 간단한 래퍼 컴포넌트를 통해서 클래스형 컴포넌트에서 사용할 수 있다.
  * 코드 5-43 에서 useDebounce를 사용하는 클래스형 컴포넌트를 확인할 수 있다. 
  * input을 입력시 1초 동안 입력하지 않으면 name update된다.

- 코드 5-43 클래스형 컴포넌트에서 Debounce 컴포넌트를 사용하기
  ```js
    import React, { useEffect } from "react";

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
              <Debounce
                callback={() => this.setState({ name: nameTemp })}
                ms={1000}
                args={[nameTemp]}>
                <div>
                  <p>this is name: {name}</p>
                  <input
                    type="text"
                    value={nameTemp}
                    onChange={(e) =>
                      this.setState({ nameTemp: e.currentTarget.value })
                    }
                  ></input>
                </div>
              </Debounce>
            </div>
          </div>
        );
      }
    }

    export default Profile;

  ```
  * 클래스형 컴포넌트에서 useDebounce 훅 이용하는 코드이다. 
    - useDebounce 처럼 반환값이 없는 훅은 간단한 래퍼 컴포넌트를 통해서 클래스형 컴포넌트에서 사용할 수 있다.
  * input을 입력시 1초 동안 입력하지 않으면 name update된다.


### 4.2 커스텀 훅의 반환값이 있는 경우

1. 마운트 상태를 관리하는 useHasMounted 훅
  
  * 마운트 상태를 관리하는 useHasMounted
  * 코드 5-14 useHasMounted처럼 반환값이 잇는 훅은 고차 컴포넌트 또는 렌더 속성값으로 반환값을 전달할 수 있다. 
  * 다음은 'useHasMounted훅의 기능을 제공'하기 위해 구현한 '고차 컴포넌트'와 '렌더 속성'이다.

- 코드 5-44 useHasMounted 훅의 기능을 제공하기 위해 구현한 고차 컴포넌트와 렌더 속성값

  * 고차 컴포넌트 예
  
  ```js
    import React from 'react';
    import useHasMounted from './customHook/useHasMounted';
 
    function withHasMounted(Component) {
      return function(props) {
        const hasMounted = useHasMounted();
        return <Component {...props} hasMounted={hasMounted} />;
      };
    }

    class MyComponent extends React.Component {
      render() {
        debugger; //2
        const { hasMounted } = this.props;
        return (
          <div>
            <p> # 클래스 컴포넌트에서 useHasMounted 훅 사용 테스트 입니다.</p>
            <p>* 마운트가 됐나요? </p>
            <p>{hasMounted ? 'yes' : 'no'}</p>
          </div>
        );
      }
    }

    export default withHasMounted(MyComponent);
  ```

  * 렌더 속성값 예
  
  ```js
    import React from 'react';
    import useHasMounted from './customHook/useHasMounted';

    function HasMounted({ children }) {
      const hasMounted = useHasMounted();
      return children(hasMounted);
    }

    class MyComponent extends React.Component {
      render() {
        debugger; //2
        const { hasMounted } = this.props;
        return (
          <div>
            <p> # 클래스 컴포넌트에서 useHasMounted 훅 사용 테스트 입니다.</p>
            <p>* 마운트가 됐나요? </p>
            <p>{hasMounted ? 'yes' : 'no'}</p>
          </div>
        );
      }
    }

    export default function() {
      return <HasMounted>{(data) => <MyComponent hasMounted={data} />}</HasMounted>;
    }

  ```



2. 클래스형 컴포넌트에서 useHasMounted 훅 이용하기

- 코드 5-45 클래스형 컴포넌트에서 withHasMounted 고차 컴포넌트 사용하기
  * 코드 5-44의 고차 컴포넌트 예, 렌더 속성값 예 참고 



# 추가 레퍼런스 
* hook 사용 예
  - https://daveceddia.com/useeffect-hook-examples/
    : Not Quite Lifecycles
    : Prevent useEffect From Running Every Render
    : Only Run on Mount and Unmount
    : Focus On Mount
    : Fetch Data With useEffect
    : Re-fetch When Data Changes
    : A Hundred And One Uses
    : Try Out useEffect