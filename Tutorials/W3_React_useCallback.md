## React useCallback Hook

---

### React useCallbackHook은 메모화된 콜백 함수를 반환합니다.

    memoization을 다시 계산할 필요가 없도록 값을 캐싱하는 것으로 생각하십시오.

이를 통해 리소스 집약적인 기능을 분리하여 모든 렌더링에서 자동으로 실행되지 않도록 할 수 있습니다.

useCallback후크는 종속성 업데이트의 경우 하나를 실행합니다.

이렇게 하면 성능이 향상될 수 있습니다.

    useCallback와 useMemo후크는 유사하다. 주요 차이점은 useMemo메모화된 값 을 useCallback반환하고 메모화된 함수를 반환한다는 것 입니다.

### 문제점

사용하는 한 가지 이유 useCallback는 props가 변경되지 않는 한 구성 요소가 다시 렌더링되는 것을 방지하는 것입니다.

이 예에서 다음과 Todos같이 todos변경 하지 않는 한 구성 요소가 다시 렌더링되지 않을 것이라고 생각할 수 있습니다.

이것은 React.memo 섹션 에 있는 것과 유사한 예 입니다.

    예시:
    index.js

    import { useState } from "react";
    import ReactDOM from "react-dom";
    import Todos from "./Todos";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);

      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

      return (
        <>
          <Todos todos={todos} addTodo={addTodo} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
    Todos.js

    import { memo } from "react";

    const Todos = ({ todos, addTodo }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </>
      );
    };

    export default memo(Todos);

이것을 실행하고 카운트 증가 버튼을 클릭하십시오.

변경되지 않은 Todos경우에도 구성 요소가 다시 렌더링 됨을 알 수 todos있습니다.

왜 이것이 작동하지 않습니까? 를 사용 memo하고 있으므로 카운트가 증가할 때 상태나 함수가 변경 Todos되지 않으므로 구성 요소가 다시 렌더링되지 않아야 합니다 .todosaddTodo

이것은 "참조 평등"이라는 것 때문입니다.

구성 요소가 다시 렌더링될 때마다 해당 기능이 다시 생성됩니다. 이 때문에 addTodo기능이 실제로 변경되었습니다.

---

### 해결책

이 문제를 해결 useCallback하기 위해 필요한 경우가 아니면 함수가 다시 생성되지 않도록 후크를 사용할 수 있습니다 .

useCallbackHook을 사용하여 Todos구성 요소가 불필요하게 다시 렌더링 되는 것을 방지합니다 .

    예시:
    index.js

    import { useState, useCallback } from "react";
    import ReactDOM from "react-dom";
    import Todos from "./Todos";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);

      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
      }, [todos]);

      return (
        <>
          <Todos todos={todos} addTodo={addTodo} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
    Todos.js

    import { memo } from "react";

    const Todos = ({ todos, addTodo }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </>
      );
    };

    export default memo(Todos);

이제 Todos구성 요소는 todos소품이 변경 될 때만 다시 렌더링됩니다 .
