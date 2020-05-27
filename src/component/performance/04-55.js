import React, { Component } from "react";
/*
  코드 4-51 특정 상탯값의 변경 전과 변경 후

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

    this.onClick1 = () => {
      const { todos } = this.state;
      todos[0].priority = "hhh";
      this.setState({ todos });
    };

    //코드 4-49 상탯값을 불변객체로 관리하는 코드
    // ...todos 자체가 this.state.todos 값의 memory reference를 끊어 버린다.(shallow copy)
    this.onClick2 = () => {
      const { todos } = this.state;
      const newTodos = todos.map((v) => {
        v.priority = "iii";
      });
      this.setState({ todos: newTodos });
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick1}>click1</button>
        <button onClick={this.onClick2}>click2</button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.todos === nextState.todos);
    //코드 4-49 상탯값을 불변객체로 관리하는 코드
    console.log(nextProps.todos, nextState.todos);
    console.log("------------------------");
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log({ prevProps, prevState, snapshot });
    console.log(prevState.todos === this.state.todos); //<= 확인해보자
    // 코드 4-49 실행결과: prevState.todos === this.state.todos
    // 코드 4-50 실행결과: prevState.todos !== this.state.todos
    console.log("------------------------");
  }
}

export default withMountEvent(MyComponent, "MyComponent");
