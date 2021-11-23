## React Memo

memo를 사용하면 props가 변경되지 않은 경우 React가 구성 요소 렌더링을 건너뜁니다.

이렇게 하면 성능이 향상될 수 있습니다.

---

### 문제

이 예에서 Todos구성 요소는 할일이 변경되지 않은 경우에도 다시 렌더링됩니다.

    예시:
    index.js:

    import { useState } from "react";
    import ReactDOM from "react-dom";
    import Todos from "./Todos";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState(["todo 1", "todo 2"]);

      const increment = () => {
        setCount((c) => c + 1);
      };

      return (
        <>
          <Todos todos={todos} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
    Todos.js:

    const Todos = ({ todos }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </>
      );
    };

    export default Todos;

증가 버튼을 클릭하면 Todos구성 요소가 다시 렌더링됩니다.

이 구성 요소가 복잡한 경우 성능 문제가 발생할 수 있습니다.

---

### 해결책

이 문제를 해결하기 위해 사용할 수 있습니다 memo.

구성 요소가 불필요하게 다시 렌더링 memo되지 않도록 하는 데 사용 합니다 Todos.

Todos구성 요소 내보내기를 memo다음으로 래핑합니다 .

    예시:
    index.js:

    import { useState } from "react";
    import ReactDOM from "react-dom";
    import Todos from "./Todos";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState(["todo 1", "todo 2"]);

      const increment = () => {
        setCount((c) => c + 1);
      };

      return (
        <>
          <Todos todos={todos} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
    Todos.js:

    import { memo } from "react";

    const Todos = ({ todos }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </>
      );
    };

    export default memo(Todos);

이제 Todos구성 요소 todos는 소품을 통해 전달된 구성 요소 가 업데이트 될 때만 다시 렌더링 됩니다.
