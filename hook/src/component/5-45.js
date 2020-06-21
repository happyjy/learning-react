import React from "react";
import useHasMounted from "./customHook/useHasMounted";
/*
  # 코드 5-45 클래스형 컴포넌트에서 withHasMounted 고차 컴포넌트 사용하기
*/
function HasMounted({ children }) {
  const hasMounted = useHasMounted();
  return children(hasMounted);
}

function withHasMounted(Component) {
  return function (props) {
    debugger; //1
    const hasMounted = useHasMounted();
    return <Component {...props} hasMounted={hasMounted}></Component>;
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
        <p>{hasMounted ? "yes" : "no"}</p>
      </div>
    );
  }
}

export default withHasMounted(MyComponent);
