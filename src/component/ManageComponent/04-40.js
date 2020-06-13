import React, { Component } from "react";
import PropTypes from "prop-types";
import hoistNonReactStatic from "hoist-non-react-statics"; // POINT 1
import { Route } from "react-router-dom";

/*
  코드 4-40 withRouter 고차 컴포넌트에 대해서 
  * 고차 컴포넌트가 실제 리액트 생태계에서 어떻게 만들어지고 있는지 알아보자.
  단일 페이지 애플리케이션(SPA)을 만들 때 많이 사용되는 리액트 라우터 (react-router)의 withRouter 고차 컴포넌트는 아래 코드와 같다. 
  
  (hoist-non-react-statics, ref 속성값, displayName 설정 코드)
  POINT 1. 정적 메서드를 전달하기 위해 hoist-non-react-statics 패키지를 사용
  POINT 2. ref속성값을 전달하기 위해 wrappedComponentRef라는 속성값을 사용
  POINT 3. 편리한 디버깅을 위해 displayName설정
  
  * PropsTypes
  npm install prop-types

  * withRouter 고차 컴포넌트
  https://reactjs.org/docs/typechecking-with-proptypes.html

  * route
  npm install react-router-domß
  https://reacttraining.com/react-router/web/guides/quick-start
  * 
*/
function withRouter(InputComponent) {
  const C = (props) => {
    const { wrappedComponentRef, ...remainingProps } = props; // POINT 2
    return (
      // <div>
      //   <p>04-40(withRouter)/04-40(withRouterExample)</p>
      //   <p>04-40(Router)/04-40(RouterExample)</p>
      // </div>
      <Route
        render={(routeComponentProps) => (
          <Component
            {...remainingProps}
            {...routeComponentProps}
            ref={wrappedComponentRef}
          />
        )}
      />
    );
  };

  // POINT 3
  C.displayNmae = `withRouter(${Component.displayNmae || Component.name})`;
  C.WrappedComponent = Component;
  C.propType = {
    wrappedComponentRef: PropTypes.func,
  };
  return hoistNonReactStatic(C, Component);
}

export default withRouter;
