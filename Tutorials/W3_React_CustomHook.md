## React Custom Hooks

후크는 재사용 가능한 함수입니다.

여러 구성 요소에서 사용해야 하는 구성 요소 논리가 있는 경우 해당 논리를 사용자 지정 Hook으로 추출할 수 있습니다.

Custom Hooks는 "use"로 시작합니다. 예: useFetch.

---

### 후크 만들기

다음 코드에서는 Home구성 요소 에서 데이터를 가져와서 표시합니다.

JSONPlaceholder 서비스를 사용하여 가짜 데이터를 가져옵니다. 이 서비스는 기존 데이터가 없을 때 애플리케이션을 테스트하는 데 유용합니다.

자세히 알아보려면 JavaScript Fetch API 섹션을 확인하세요 .

JSONPlaceholder 서비스를 사용하여 가짜 "todo" 항목을 가져오고 페이지에 제목을 표시합니다.

    예시:
    index.js:

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom";

    const Home = () => {
      const [data, setData] = useState(null);

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.json())
          .then((data) => setData(data));
    }, []);

      return (
        <>
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })}
        </>
      );
    };

    ReactDOM.render(<Home />, document.getElementById("root"));

가져오기 논리는 다른 구성 요소에서도 필요할 수 있으므로 이를 사용자 정의 Hook으로 추출합니다.

사용자 정의 Hook으로 사용할 새 파일로 가져오기 로직을 ​​이동합니다.

    예시:
    useFetch.js:

    import { useState, useEffect } from "react";

    const useFetch = (url) => {
      const [data, setData] = useState(null);

      useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [url]);

      return [data];
    };

    export default useFetch;
    index.js:

    import ReactDOM from "react-dom";
    import useFetch from "./useFetch";

    const Home = () => {
      const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

      return (
        <>
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })}
        </>
      );
    };

    ReactDOM.render(<Home />, document.getElementById("root"));

---

### 예시 설명

데이터를 가져오는 데 필요한 모든 논리를 포함 useFetch.js하는 라는 함수를 포함하는 이라는 새 파일을 만들었습니다 useFetch.

하드 코딩된 URL을 제거하고 url사용자 정의 Hook에 전달할 수 있는 변수 로 대체했습니다 .

마지막으로 Hook에서 데이터를 반환합니다.

에서는 Hook을 index.js가져와서 useFetch다른 Hook처럼 활용하고 있습니다. 여기에서 데이터를 가져올 URL을 전달합니다.

이제 모든 구성 요소에서 이 사용자 정의 후크를 재사용하여 모든 URL에서 데이터를 가져올 수 있습니다.
