import React from "react";

// const ErrorComponent = () => <div>{props.ignore}</div>;
export default class LifecycleForBeginer extends React.Component {
  //STUDY2: constructor
  constructor(props) {
    console.log("constructor");

    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  //STUDY7: getDerivedStateFromProps
  //  - props를 state로 복사할 수 있는 lifeCycle 단계
  //  - seedGeenrator button을 클릭하면 counter component로 props로 값이 넘어오고
  //    counter component state와 비교해서 state를 설정
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    console.log({ props, state });
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  /**
   * STUDY3: componentDidMount
   * # component constructor 다음 trigger
   * # dom 에 붙을때 trigger
   */
  componentDidMount() {
    console.log("Component Did Mount");
    console.log("-----------------------");
  }

  /**
   * STUDY6: shouldComponentUpdate
   *  - render trigger여부를 결정
   *  - return default는 true
   *  - state, props가 update됐음에도 불구하고 component를 render하지 않아도 될때 유용
   *  - render method는 expensive to compute 그래서 좋은 performance를 얻을 수 있다.
   *  - 주의 해야할점
   *   : [ ]작성대기
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("should Component Update - DO NOT RENDER");
      return false;
    }
    console.log("should Component Update - RENDER");
    console.log({ nextProps, nextState });
    console.log({
      props_ignoreProp: this.props.ignoreProp,
      nextProps_ignoreProps: nextProps.ignoreProp,
    });
    console.log("-----------------------");
    return true;
  }

  /**
   * STUDY8: getSnapshotBeforeUpdate
   *  - state에 저장되지 않은 data를 return 하면 rerender되고 나서
   *    componentDidUpdate 함수 세번째 arguments에서 사용할 수 있다.
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snap Show Before Update");
    return "abc";
  }

  //STUDY1: render
  render() {
    console.log("render");

    if (this.props.showErrorComponent && this.state.error) {
      return <div>We have encountered an error! {this.state.error}</div>;
    }

    return (
      <div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
        {/* {this.props.showErrorComponent} ? <ErrorComponent /> : '' */}
      </div>
    );
  }

  //STUDY4: componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log({ prevProps, prevState, snapshot });
    console.log("------------------------");
  }

  /**
   * STUDY5: componentWillUnmount
   *  - dom에서 component제거 될때
   */
  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("------------------------");
  }

  /**
   * STUDY9: componentDidCatch
   *  - 이 함수 여부에 따라서 오류에 따라 화면을 다 날릴지 오류나기 전 컴포넌트까지 보여줄지 결정된다.
   */
  componentDidCatch(error, info) {
    console.log("Component Did Catach", { error, info });
    this.setState({ error, info });
  }
}
