import React from 'react';
import ReactDOM from 'react-dom';

/*
  # 코드 3-41 render 메서드가 반환할 수 있는 값
    * html에 정의된 거의 모든 태그
    * 문자열, 숫자
    * 배열 (key를 가지고 있어야한다.)
    * 리액트 프래그먼트(Fragment) -  key를 부여하지 않아도 됨
    * null, boolean (아무것도 render 안함)
    * 리액트 포털(portal) - 컴포넌트의 현재 위치와는 상관없이 특정 돔요소에 렌더링할 수 있다.
    
  # 코드 3-42 렌더 함수에서 조건부 렌더링을 하는 코드 
    * 렌더함수가 boolean을 반환할 수 있다는 것을 활용할수 있다. 
    
  # 코드 3-43 리액트 포털을 사용한 코드
    * 특징
      * 리액트 포털을 이용해서 특정 돔요소에 리액트 요소를 렌더링 할 수 있다.
      * Modal 컴포넌트가 사용된 위치와 상관없이 렌더링할 위치를 선택할 수 있다.
    * 주의사항
      * 렌더함수내부에서 setState를 사용하지 않는다 
      * 렌더함수의 반환값은 속성값과 상탯값만으로 결정되어야 한다.
      * 부수 효과를 발생시키면 안된다. 
        * 서버통신, 브라우저의 쿠키에서 저장하기 등 
        * 필요하다면 다른 생명 주기 메서드에서 하면된다.
  https://reactjs.org/docs/react-dom.html
 */
function Modal({title, desc}) {
  debugger;
  const domNode = document.getElementById('root');
  return ReactDOM.createPortal(
    <div>
      <p>{title}</p>
      <p>{desc}</p>
    </div>,
    domNode,
  )
}

class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<Modal title="제목이다" desc="설명이다"/>
        <div id="modal" style={{border: "1px solid black", margin: "20px"}}></div>
			</div>
		);
	}
}

export default MyComponent;
