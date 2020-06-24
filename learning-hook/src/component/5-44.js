import React from 'react';
import useHasMounted from './customHook/useHasMounted';
/*

  # 코드 5-44 useHasMounted 훅의 기능을 제공하기 위해 구현한 고차 컴포넌트와 렌더 속성값
    * 마운트 상태를 관리하는 useHasMounted
    * 코드 5-14 useHasMounted처럼 반환값이 잇는 훅은 고차 컴포넌트 또는 렌더 속성값으로 반환값을 전달할 수 있다. 
    * 다음은 'useHasMounted훅의 기능을 제공'하기 위해 구현한 '고차 컴포넌트'와 '렌더 속성'이다.
*/

function HasMounted({ children }) {
	const hasMounted = useHasMounted();
	return children(hasMounted);
}

function withHasMounted(Component) {
	return function(props) {
		const hasMounted = useHasMounted();
		return <Component {...props} hasMounted={hasMounted} />;
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
				<p>{hasMounted ? 'yes' : 'no'}</p>
			</div>
		);
	}
}

// export default withHasMounted(MyComponent);

export default function() {
	return <HasMounted>{(data) => <MyComponent hasMounted={data} />}</HasMounted>;
}
