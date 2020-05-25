import React, { Component } from "react";
/*
  코드 4-48 상탯값을 불변 객체로 관리하기
  코드 4-49 상탯값을 불변객체로 관리하는 코드 
  코드 4-50 상탯값을 불변 객체로 관리하는 코드와 그렇지 않은 코드의 실행결과
  # 리액트 컴포넌트의 렌더링과정
  
  # 리액트 렌더링에 대해서 
    * 리액트가 실행될 때 가장 많은 CPU 자원을 사용한다. 
    * UI 라이브러리이기 때문에 프로그램이 실행되는 동안에 화면을 계속 그린다. 
    * 렌더 함수를 실행할때 대부분의 연산이 일어난다. 
    * 데이터는 컴포넌트의 속성값과 상탯값을 말한다.
      * 속성값이나 상탯값이 변경되면 리액트가 자동으로 렌더 함수를 이용해서 화면을 다시 그린다.   
      
  # 불변객체 여부에 따른 (코드 4-49,50) 실행결과와 성능 관계
    * 컴포넌트의 속성값, 상탯값이 변경되면 리액트는 그 컴포넌트를 다시 그릴 준비한다.
    * shouldComponentUpdate생명주기 메서드가 호출
    * 이 메서드는 참, 거짓 반환 이 boolean 값에 따라 render를 할지 말지 결정한다.
      * 만약한다면 '이후 입력된 속성값, 상탯값을 기반으로 가상 돔을 업데이트하고, 실제 돔과 다른 부분만 실제 돔에 반영'
    * shouldComponentUpdate 생명주기 베서드는 별도로 구현하지 않으면 참을 반환 
      * 즉 속성값, 상탯값이 변경되지 않아도 부모 컴포넌트가 렝더링 될 때마다 자식 컴포넌트도 렌더링한다.
      * shoouldComponentdupdate 메서드가 항상 참을 반환해도 속성값이, 상탯값이 변경되지 않으면 실제 돔도 변경되지 않기 때문에 크게 문제 되지 않는다.
      * 하지만 렌더링 성능이 중요한 상황에서는 shoouldComponentUpdate 메서드를 직접 구현해서 가상돔의 계산도 생략할 수 있다.        
*/
function withMountEvent(InputComponent, componentName) {
  return class OutputComponent extends Component {
    componentDidMount() {
      console.log("### 컴포넌트 이름 저장한는 함수 호출:", componentName);
    }
    render() {
      return <InputComponent {...this.props} />;
    }
  };
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { title: "eat kimchi", priority: "low" },
        { title: "gotoSleep", priority: "high" },
      ],
    };

    // 코드 4-48 상탯값을 불변 객체로 관리하기
    this.onClick1 = () => {
      const { todos } = this.state;
      todos.push({ title: "fix bug", priority: "high" });
      this.setState({ todos });
    };

    //코드 4-49 상탯값을 불변객체로 관리하는 코드
    // ...todos 자체가 this.state.todos 값의 memory reference를 끊어 버린다.(shallow copy)
    this.onClick2 = () => {
      const { todos } = this.state;
      const newTodos = [...todos, { title: "fix bug", priority: "high" }];
      this.setState({ todos: newTodos });
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick1}>click1</button>
        <button onClick={this.onClick2}>click2ㄴ</button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.todos === nextState.todos);
    console.log(nextProps.todos, nextState.todos);
    console.log("------------------------");
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log({ prevProps, prevState, snapshot });
    // 코드 4-50 상탯값을 불변 객체로 관리하는 코드와 그렇지 않은 코드의 실행결과
    console.log(prevState.todos === this.state.todos); //<= 확인해보자
    // 코드 4-49 실행결과: prevState.todos === this.state.todos
    // 코드 4-50 실행결과: prevState.todos !== this.state.todos
    console.log("------------------------");
  }
}

export default withMountEvent(MyComponent, "MyComponent");
