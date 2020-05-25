import React from "react";
// # constructor
// import MyComponent from './component/lifeCycle/03-27~30';
// import MyComponent from './component/lifeCycle/03-31';
// import MyComponent from './component/lifeCycle/03-32';

// # getDerivedStateFromProps
// import MyComponent from './component/lifeCycle/03-33';
// import MyComponent from './component/lifeCycle/03-37~38';
// import MyComponent from './component/lifeCycle/03-39';
// import MyComponent from './component/lifeCycle/03-40';

// # render
// import MyComponent from './component/lifeCycle/03-41~43';

// # componentdidMount
// import MyComponent from './component/lifeCycle/03-44';
// import MyComponent from './component/lifeCycle/03-45';

// # shouldComponentUpdate
// import MyComponent from './component/lifeCycle/03-46';

// # getSnapshotBeforeUpdate
// import MyComponent from './component/lifeCycle/03-47';

// # componentDidMount
// import MyComponent from './component/lifeCycle/03-48';
import MyComponent from "./component/lifeCycle/03-49";

class App extends React.Component {
  // constructor(props) {
  // 	super(props);
  // }

  render() {
    return (
      <div>
        {/* <button onClick={this.speedUp}>speedUp</button>
				<button onClick={this.speedDown}>speedDown</button>
        <MyComponent speed={this.state.speed} /> */}

        <MyComponent />

        {/* <ProductEdit product={this.state.product} />
				<button onClick={this.changePrice}>Change Price</button> */}
      </div>
    );
  }
}

export default App;
