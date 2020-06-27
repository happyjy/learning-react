# 파일별 실전 리엑트 프로그래밍 챕터
* learning-hook
  - 5장 진화된 함수형 컴포넌트: 리액트 훅 

* learning-lifecycle
  - 3.3 생명주기 메서드 

* learning-manage_component
  - 4.3 컴포넌트의 공통 기능 관리하기 

* learning-manage-performance
  - 4.4 렌더링 속도를 올리기 위한 성능 최적화 방법

* learning-redux
  - [노마드코더](https://nomadcoders.co/redux-for-beginners/lobby)


# 3장 중요하지만 헷갈리는 리액트 개념 이해하기

# 3.3 생명 주기 메서드

## LIFE CYCLE 기본

- [참고 youtube강의](https://youtu.be/7iHepe36m0c)
- [실습 gitHub 주소](https://github.com/happyjy/learning-reactLifeCycle)
- component > LifecycleForBeginner.js에 내용이 있음

- lifeCycle별로 실제 프로젝트에서 어제 사용되면 좋은지 노하우가 있다.
- [실습 gitHub 주소](https://github.com/happyjy/learning-reactLifeCycle)
  - component 폴더 > 코드 숫자 별로 파일이 있음.

## 3.3.1 constructor 메서드

- [x] 코드 3-27 constructor 메서드의 기본구조
- [x] 코드 3-28 초기 속성값으로부터 상탯값을 만드는 코드
- [x] 코드 3-29 constructor 메서드 없이 속성값을 이용하는 코드
- [x] 코드 3-30 속성값에 항상 의존적인 상탯값을 함수로 대처한 코드
- [x] 코드 3-31 constructor 메서드에서 setState 메서드를 호출하는 잘못된 예
- [x] 코드 3-32 constructor 메서드에서 API를 호출하는 잘못된 예

## 3.3.2 getDerivedStateFromProps 메서드

- [x] 코드 3-33 getDerivedStateFromProps 메서드에서 이전 속성값 이용하기
- [x] 코드 3-35 getDerivedStateFromProps를 이용한 메모이제이션
- [x] 코드 3-36 로다시 패키지를 이용한 메모이제이션 예
- [x] 코드 3-37 속성값 변경시 상탯값을 초기화하는 코드
- [x] 코드 3-38 key 속성값을 이용한 코드
- [x] 코드 3-39 상탯갑슬 부모 컴포넌트에서 관리하는 코드
- [x] 코드 3-40 상탯값이 전후 속성값에 의존적인 경우 사용

## 3.3.3 render 메서드

- [x] 코드 3-41 render 메서드가 반환할 수 있는 값
- [x] 코드 3-42 렌더함수에서 조건부 렌더링을 하는 코드
- [x] 코드 3-43 리액트 포털을 사용한 코드

## 3.3.4 componentDidMount 메서드

- [x] 코드 3-44 componentDidMount 메서드에서 돔 요소에 접근하는 코드
- [x] 코드 3-45 constructor 메서드에서 API 요청을 보내는 코드

## 3.3.5 shouldComponentUpdate 메서드

- [x] 코드 3-46 shouldComponentUpdate 메서드의 기본 구조

## 3.3.6 getSnapshotBeforeUpdate 메서드

- [x] 코드 3-47 돔 요소의 높잇값이 변경됐는지 검사하는 코드

## 3.3.7 componentDidUpdate 메서드

- [x] 코드 3-48 스크롤이 가능해지면 알려주는 코드
- [x] 코드 3-49 componentDidUpdate 메서드에서 API를 호출하는 코드
- [x] 코드 3-50 componentDidMount 메서드에서도 API를 호출하도록 변경하기

## 3.3.8 componentWillUnmount 메서드

- [x] 코드 3-51 componentWillUnmount 메서드에서 이벤트 처리 해제하기

## 3.3.9 getDerivedStateFromError, componentDidCatch 메서드

- [ ] 코드 3-52 ErrorBoundary 컴포넌트
- [ ] 코드 3-53 ErrorBoundary 컴포넌트를사용한 코드
- [ ] 코드 3-54 이벤트 처리 메서드에서 예외가 발생하는 경우

# 4.3 컴포넌트의 공통 기능 관리하기

## 4.3.1 고차 컴포넌트를 이용한 공통 기능 관리

- [x] 코드 4-31 마운트 시 서버로 이벤트를 보내는 고차 컴포넌트
- [x] 코드 4-32 마운트 여부를 알려주는 고차 컴포넌트
- [x] 코드 4-33 로그인 여부에 따라 다르게 보여 주는 고차 컴포넌트
- [x] 코드 4-34 클래스 상속을 이용한 고차 컴포넌트
- [x] 코드 4-35 디버깅에 사용되는 고차 컴포넌트
- [x] 코드 4-36 div요소로 감싸 주는 고차 컴포넌트
- [x] 코드 4-37 여러 개의 고차 컴포넌트를 동시에 사용하기
- [x] 코드 4-38 고차 컴포넌트에서 displayName 설정하기
- [x] 코드 4-39 고차 컴포넌트에서 정적 메서드 전달하기
- [x] 코드 4-40 withRouter 고차 컴포넌트
- [x] 고차 컴포넌트 단점(04-40(withRouterExample).js 참고)

## 4.3.2 렌더 속성값을 이용한 공통 기능 관리

- [x] 코드 4-41 마운트 시 서버로 이벤트를 보내는 렌더 속성값
- [x] 코드 4-42 children을 사용하지 않은 렌더 속성값
- [x] 코드 4-43 데이터 처리 로직을 렌더 속성값으로 구현하기
- [x] 코드 4-44 마우스의 위치 정보를 알려 주는 렌더 속성값
- [x] 코드 4-45 렌더 속성값 함수의 매개변수를 속성값으로 전달하는 방법
- [x] 코드 4-46 children 속성값을 이용해서 작성한 레이아웃 컴포넌트

# 4.4 렌더링 속도를 올리기 위한 성능최적화 방법

## 4.4.1 생탯값을 불변 객체로 관리하기

- [x] 코드 4-48 상탯값을 불변 객체로 관리하기
- [x] 코드 4-49 상탯값을 불변 객체로 관리하는 코드
- [x] 코드 4-50 상탯값을 불변 객체로 관리하는 코드와 그렇지 않은 코드의 실행결과
- [x] 리액트 컴포넌트의 렌더링과정
- [x] 코드 4-51 특정 상탯값의 변경 전과 변경 후

## 4.4.2 렌더 함수에서 새로운 객체 만들지 않기

- [x] 코드 4-54 렌더 함수에서 새로운 객체를 만들어서 자식 컴포넌트의 속성값으로 전달하기

## 4.4.3 메모이제이션(memoization) 이용하기

- [x] 코드 4-55 메모이제이션 사용예
- [x] 코드 4-56 메모이제이션의 잘못된 사용예

## 4.4.4 성능 최적화를 위한 도구들 이용하기

# 진화된 함수형 컴포넌트: 리액트 훅

## 5.1 리액트 훅 기초 익히기

### 5.1.1 리액트 훅이란?

1. 로직을 재사용하는 기존 방식의 한계
2. 클래스 형 컴포넌트의 한계
3. 훅의 장점

### 5.1.2 함수형 컴포넌트에 상탯값 추가하기: useState

- [x] 코드 5-1 useState 훅 사용하기

1. 클래스형 컴포넌트와 비교하기

- [x] 코드 5-2 클래스형 컴포넌트에서 상태값 관리하기

2. 여러 개의 useState 훅 사용하기

- [x] 코드 5-3 여러 개의 useState 훅사용하기

3. useState 훅 하나로 여러 상탯값 관리하기

- [x] 코드 5-4 하나의 useState 훅으로 여러 상탯값 관리하기

### 5.1.3 함수형 컴포넌트에서 생명 주기 함수 이용하기: useEffect

- [x] 코드 5-5 useEffect 훅의 사용예

1. API를 후출하는 기능: 함수형 컴포넌트로 작성하기

- [x] 코드 5-6 useEffect 훅에서 API 호출하기

2. API를 호출하는 기능: 클래스형 컴포넌트로 작성하기

- [x] 코드 5-7 클래스형 컴포넌트에서 API 호출하기

3. 이벤트 처리 함수를 등록하고 해제하는 기능: 함수형 컴포넌트로 작성하기

- [x] 코드 5-8 useEffect 훅을 이용해서 이벤트 여러 함수를 등록하고 해제하기

4. 이벤트 처리 함수의 등록하고 해제하는 기능: 클래스형 컴포넌트로 작성하기

- [x] 코드 5-9 이벤트 처리 함수의 등록과 해제를 클래스형 컴포넌트로 작성하기

5. 두 가지 기능을 합치기: 함수형 컴포넌트에서 작성하기

- [x] 코드 5-10 훅을 사용하면 로직별로 코드를 모을 수 있다.

6. 클래스형 컴포넌트에서는 로직이 분산된다.

- [x] 코드 5-11 클래스형 컴포넌트에서는 로직이 분산된다.

### 5.1.4 훅 직접 만들기

1. useWindowWidth 커스텀 훅

- [x] 코드 5-12 useWindowWidth 커스텀 훅

2. useWindowWidth 훅 사용하기

- [x] 코드 5-13 useWindowWidth 훅 사용하기

3. useHasMounted 커스텀 훅

- [x] 코드 5-14 useHasMounted 커스텀 훅
- [x] 코드 5-15 withHasMounted 고차 컴포넌트

### 5.1.5 훅 사용 시 지켜야 할 규칙

- 아래 규칙을 지켜야 리액트가 각 훅의 상태를 제대로 기억할 수 있다.
- 훅은 함수형 컴포넌트를 위한 기능(규칙2) -> 클래스형 컴포넌트의 메서드, 일반 함수에서 사용할 수 없다.

  - 규칙 1: 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 한다.
  - 규칙 2: 훅은 함수형 컴포넌트 또는 커스텀 훅 안에서만 호출되어야 한다.

* [x] 코드 5-16 훅 사용 시 규칙을 위한반 경우

1. 훅의 호출 순서가 같아야 하는이유

- [x] 코드 5-17 여러 개의 훅 사용하기

2. 리액트가 내부적으로 훅을 처리하는 방식

- [x] 코드 5-18 의사코드로 표현한 리액트의 내부 코드

## 5.2. 리액트 내장 훅 살펴보기

### 5.2.1 Consumer 컴포넌트 없이 콘텍스트 사용하기: useContext

- [x] 코드 5-19 훅을 사용하지 않고 콘텍스트 API를 사용하기
- [x] 코드 5-20 useContext 훅 사용하기

### 5.2.2 함수형 컴포넌트에서 돔 요소 접근하기: useRef

- [x] 코드 5-21 useRef 훅 사용하기

1. 함수형 컴포넌트에서 렌더링과 무관한 값 저장하기

- [x] 코드 5-22 useRef 훅을 이용해서 이전 상탯값 저장하기

### 5.2.3 메모이제이션 훅: useMemo, useCallback

1. useMemo

- [x] 코드 5-23 useMemo 훅의 사용 예

2. useCallback

- [x] 코드 5-24 useCallback 훅이 필요한 예

- [x] 코드 5-25 useCallback 훅 사용하기

### 5.2.4 컴포넌트의 상탯값을 리덕스처럼 관리하기: useReducer

- [x] 코드 5-26 useReducer 훅의 사용 예

1. 트리의 깊은 곳으로 이벤트 처리 함수 전달하기

- [x] 코드 5-27 useReducer 훅과 콘텍스트 API를 이용해서 이벤트 처리 함수를 전달하기

### 5.2.5 부모 컴포넌트에서 접근 가능한 함수 구현하기: useImperativeHandle

1. useImperativeHandle 훅으로 외부로 공개할 함수 정의하기

- [x] 코드 5-28 부모 컴포넌트에서 접근 가능한 함수를 구현하기

2. useImperativeHandle 훅으로 정의한 함수를 외부에서 호출하기

- [x] 코드 5-29 부모 컴포넌트에서 자식 컴포넌트 함수 호출하기

### 5.2.6 기타 리액트 내장 훅: useLayoutEffect, useDebugValue

1. useLayoutEffect
2. useDebugValue

- [x] 코드 5-30 useDebugValue 훅을 사용하는 코드

## 5.3. 클래스형 컴포넌트와 훅

### 5.3.1 constructor 메서드

- [x] 코드 5-31 훅으로 변환할 constructor 메서드
- [x] 코드 5-32 constructor 메서드를 훅으로 구현하기
- [x] 코드 5-33 useOnFirstRender 커스텀 훅

### 5.3.2 componentDidUpdate 메서드

- [x] 코드 5-34 usePrevious 커스텀 훅
- [x] 코드 5-35 훅으로 변환할 componentDidUpdate 메서드
- [x] 코드 5-36 componentDidUpdate 메서드를 훅으로 변환하기
- [x] 코드 5-37 useOnUpdate 커스텀 훅

### 5.3.3 getDerivedStateFromProps 메서드

- [x] 코드 5-38 훅으로 변경할 getDerivedStateFromProps 정적 메서드
- [x] 코드 5-39 getDerivedStateFromProps 정적 메서드를 훅으로 변경하기

### 5.3.4 forceUpdate 메서드

- [x] 코드 5-40 useReducer 훅을 이용해서 forceUpdate 메서드를 구현하기

## 5.4. 기존 클래스형 컴포넌트를 고려한 커스텀 훅 작성법

### 5.4.1 커스텀 훅의 반환값이 없는 경우

- [x] 코드 5-41 디바운스 기능을 제공하는 useDebounce 훅의 구현 및 사용

1. 클래스형 컴포넌트에서 useDebounce 훅 이용하기

- [x] 코드 5-42 useDebounce 훅의 래퍼 컴포넌트
- [x] 코드 5-43 클래스형 컴포넌트에서 Debounce 컴포넌트를 사용하기

### 5.4.2 커스텀 훅의 반환값이 있는 경우

1. 마운트 상태를 관리하는 useHasMounted 훅

- [x] 코드 5-44 useHasMounted 훅의 기능을 제공하기 위해 구현한 고차 컴포넌트와 렌더 속성값

2. 클래스형 컴포넌트에서 useHasMounted 훅 이용하기

- [x] 코드 5-45 클래스형 컴포넌트에서 withHasMounted 고차 컴포넌트 사용하기
