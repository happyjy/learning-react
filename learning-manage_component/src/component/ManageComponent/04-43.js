import React, { Component } from "react";
import axios from "axios";

/*
  코드 4-43 데이터 처리 로직을 렌더 속성값으로 구현하기
  * DataFetcher 컴포넌트에 url, parseData를 props로 넘긴다
  * POINT1
    * axios를 사용해 API를 호출한다. 
    * response를 props로 받은 psrseData funciton을 이용해 parse한다.
    * setState로 render가 다시 일어나며 POINT2로 단계로 넘어간다.
  * POINT2
    * children속성에 parsing된 데이터를 넘겨 render한다.   
 */
class DataFetcher extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const { url, parseData } = this.props;
    axios(url).then((response) => {
      console.log("### axios response: ", response);
      //POINT1
      const data = parseData(response.data);
      this.setState({ data });
    });
  }

  render() {
    const { children } = this.props;
    const { data } = this.state;
    if (data == null) {
      return <p>데이터 로딩 중...</p>;
    } else {
      //POINT 2.1
      return children({ data });
    }
  }
}

function MyComponent() {
  return (
    <DataFetcher
      url="https://api.github.com/users/happyjy"
      parseData={parseRepoData}
    >
      {/* POINT 2.2 */}
      {({ data }) => (
        <div>
          <p>코드 4-43 데이터 처리 로직을 렌더 속성값으로 구현하기</p>
          <p>* DataFetcher 컴포넌트에 url, parseData를 props로 넘긴다</p>
          <p>* POINT1</p>
          <p>* axios를 사용해 API를 호출한다. </p>
          <p>
            * response를 props로 받은 psrseData funciton을 이용해 parse한다.
          </p>
          <p>* setState로 render가 다시 일어나며 POINT2로 단계로 넘어간다.</p>
          <p>* POINT2</p>
          <p>* children속성에 parsing된 데이터를 넘겨 render한다. </p>
          <hr></hr>
          <p>ttps://api.github.com/users/happyjy에서 받아온 데이터</p>
          <p>{`id: ${data.id}`}</p>
          <p>{`html_url: ${data.html_url}`}</p>
          <p>{`created_at: ${data.created_at}`}</p>
        </div>
      )}
    </DataFetcher>
  );
}

function parseRepoData(data) {
  console.log("### parseRepoData: ", data);
  return {
    id: data.id,
    html_url: data.html_url,
    created_at: data.created_at,
  };
}

export default MyComponent;
