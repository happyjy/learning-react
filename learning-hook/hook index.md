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

- 코드 5-5 useEffect 훅의 사용예

1. API를 후출하는 기능: 함수형 컴포넌트로 작성하기

- 코드 5-6 useEffect 훅에서 API 호출하기

2. API를 호출하는 기능: 클래스형 컴포넌트로 작성하기

- 코드 5-7 클래스형 컴포넌트에서 API 호출하기
  
3. 이벤트 처리 함수를 등록하고 해제하는 기능: 함수형 컴포넌트로 작성하기

- 코드 5-8 useEffect 훅을 이용해서 이벤트 여러 함수를 등록하고 해제하기

4. 이벤트 처리 함수의 등록하고 해제하는 기능: 클래스형 컴포넌트로 작성하기

- 코드 5-9 이벤트 처리 함수의 등록과 해제를 클래스형 컴포넌트로 작성하기

5. 두 가지 기능을 합치기: 함수형 컴포넌트에서 작성하기

- 코드 5-10 훅을 사용하면 로직별로 코드를 모을 수 있다.

6. 클래스형 컴포넌트에서는 로직이 분산된다.

- 코드 5-11 클래스형 컴포넌트에서는 로직이 분산된다.

### 1.4 훅 직접 만들기

1. useWindowWidth 커스텀 훅

- 코드 5-12 useWindowWidth 커스텀 훅

2. useWindowWidth 훅 사용하기

- 코드 5-13 useWindowWidth 훅 사용하기

3. useHasMounted 커스텀 훅

- 코드 5-14 useHasMounted 커스텀 훅
- 코드 5-15 withHasMounted 고차 컴포넌트

### 1.5 훅 사용 시 지켜야 할 규칙

- 코드 5-16 훅 사용 시 규칙을 위한반 경우

1. 훅의 호출 순서가 같아야 하는이유

- 코드 5-17 여러 개의 훅 사용하기

2. 리액트가 내부적으로 훅을 처리하는 방식

- 코드 5-18 의사코드로 표현한 리액트의 내부 코드

## 2. 리액트 내장 훅 살펴보기

### 2.1 Consumer 컴포넌트 없이 콘텍스트 사용하기: useContext

- 코드 5-19 훅을 사용하지 않고 콘텍스트 API를 사용하기
- 코드 5-20 useContext 훅 사용하기

### 2.2 함수형 컴포넌트에서 돔 요소 접근하기: useRef

- 코드 5-21 useRef 훅 사용하기

1. 함수형 컴포넌트에서 렌더링과 무관한 값 저장하기

- 코드 5-22 useRef 훅을 이용해서 이전 상탯값 저장하기

### 2.3 메모이제이션 훅: useMemo, useCallback

1. useMemo

- 코드 5-23 useMemo 훅의 사용 예

2. useCallback

- 코드 5-24 useCallback 훅이 필요한 예

- 코드 5-25 useCallback 훅 사용하기

### 2.4 컴포넌트의 상탯값을 리덕스처럼 관리하기: useReducer

- 코드 5-26 useReducer 훅의 사용 예

1. 트리의 깊은 곳으로 이벤트 처리 함수 전달하기

- 코드 5-27 useReducer 훅과 콘텍스트 API를 이용해서 이벤트 처리 함수를 전달하기

### 2.5 부모 컴포넌트에서 접근 가능한 함수 구현하기: useImperativeHandle

1. useImperativeHandle 훅으로 외부로 공개할 함수 정의하기

- 코드 5-28 부모 컴포넌트에서 접근 가능한 함수를 구현하기

2. useImperativeHandle 훅으로 정의한 함수를 외부에서 호출하기

- 코드 5-29 부모 컴포넌트에서 자식 컴포넌트 함수 호출하기

### 2.6 기타 리액트 내장 훅: useLayoutEffect, useDebugValue

1. useLayoutEffect
2. useDebugValue

- 코드 5-30 useDebugValue 훅을 사용하는 코드

## 3. 클래스형 컴포넌트와 훅

### 3.1 constructor 메서드

- 코드 5-31 훅으로 변환할 constructor 메서드
- 코드 5-32 constructor 메서드를 훅으로 구현하기
- 코드 5-33 useOnFirstRender 커스텀 훅

### 3.2 componentDidUpdate 메서드

- 코드 5-34 usePrevious 커스텀 훅
- 코드 5-35 훅으로 변환할 componentDidUpdate 메서드
- 코드 5-36 componentDidUpdate 메서드를 훅으로 변환하기
- 코드 5-37 useOnUpdate 커스텀 훅

### 3.3 getDerivedStateFromProps 메서드

- 코드 5-38 훅으로 변경할 getDerivedStateFromProps 정적 메서드
- 코드 5-39 getDerivedStateFromProps 정적 메서드를 훅으로 변경하기

### 3.4 forceUpdate 메서드

- 코드 5-40 useReducer 훅을 이용해서 forceUpdate 메서드를 구현하기

## 4. 기존 클래스형 컴포넌트를 고려한 커스텀 훅 작성법

### 4.1 커스텀 훅의 반환값이 없는 경우

- 코드 5-41 디바운스 기능을 제공하는 useDebounce 훅의 구현 및 사용

1. 클래스형 컴포넌트에서 useDebounce 훅 이용하기

- 코드 5-42 useDebounce 훅의 래퍼 컴포넌트
- 코드 5-43 클래스형 컴포넌트에서 Debounce 컴포넌트를 사용하기

### 4.2 커스텀 훅의 반환값이 있는 경우

1. 마운트 상태를 관리하는 useHasMounted 훅

- 코드 5-44 useHasMounted 훅의 기능을 제공하기 위해 구현한 고차 컴포넌트와 렌더 속성값

2. 클래스형 컴포넌트에서 useHasMounted 훅 이용하기

- 코드 5-45 클래스형 컴포넌트에서 withHasMounted 고차 컴포넌트 사용하기
