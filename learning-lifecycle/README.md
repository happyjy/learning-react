
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