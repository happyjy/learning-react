import React, { Component } from "react";
import PropTypes from "prop-types";
import hoistNonReactStatic from "hoist-non-react-statics";
import { Route } from "react-router-dom";

/*
  코드 4-40 withRouter 고차 컴포넌트
  * 컴포넌트가 정적 메서들르 갖고 있을때 출력되는 컴포넌트에 전달되지 않는다.
  * 이를 해결하기 위해서 hoist-non-react-statics 패키지를 많이 사용한다.
  
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
  //POINT
  const C = (props) => {
    const { wrappedComponentRef, ...remainingProps } = props;
    return (
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

  C.displayNmae = `withRouter(${Component.displayNmae || Component.name})`;
  C.WrappedComponent = Component;
  C.propType = {
    wrappedComponentRef: PropTypes.func,
  };
  return hoistNonReactStatic(C, Component);
}

export default withRouter;
