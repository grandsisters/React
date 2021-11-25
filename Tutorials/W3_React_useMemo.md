## React useMemo Hook

React useMemoHook은 메모된 값을 반환합니다.

    memoization 다시 계산할 필요가 없도록 값을 캐싱하는 것으로 생각하십시오.

useMemo후크는 종속성 업데이트의 경우 하나를 실행합니다.

이렇게 하면 성능이 향상될 수 있습니다.

    useMemo와 useCallback후크는 유사하다. 주요 차이점은 useMemo메모화된 값을 useCallback반환하고 메모화된 함수를 반환한다는 것입니다. useCallback 장useCallback 에서 자세히 알아볼 수 있습니다 .

---

### 성능

useMemo훅은, 비싼 유지 불필요하게 실행 집약적 인 기능을 자원하는 데 사용할 수 있습니다.

이 예에는 모든 렌더에서 실행되는 값비싼 함수가 있습니다.

카운트를 변경하거나 할 일을 추가할 때 실행이 지연되는 것을 알 수 있습니다.

    예시:
    성능이 좋지 않은 기능입니다. expensiveCalculation모든에 기능이 실행 렌더링 :

    import { useState } from "react";
    import ReactDOM from "react-dom";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);
      const calculation = expensiveCalculation(count);

      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

      return (
        <div>
          <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
              return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
          </div>
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
          </div>
        </div>
      );
    };

    const expensiveCalculation = (num) => {
      console.log("Calculating...");
      for (let i = 0; i < 1000000000; i++) {
        num += 1;
      }
      return num;
    };

    ReactDOM.render(<App />, document.getElementById('root'));

---

### useMemo

이 성능 문제를 해결하기 위해 useMemoHook을 사용 하여 expensiveCalculation함수 를 메모할 수 있습니다. 이렇게 하면 필요할 때만 함수가 실행됩니다.

값비싼 함수 호출을 useMemo.

useMemo후크 선언 의존성에 제 파라미터를 받아 들인다. 값비싼 함수는 종속성이 변경된 경우에만 실행됩니다.

다음 예에서 비용이 많이 드는 함수는 count 가 변경 될 때만 실행 되고 할 일을 추가할 때는 실행 되지 않습니다.

    예시:
    useMemoHook을 사용한 성능 예시 :

    import { useState, useMemo } from "react";
    import ReactDOM from "react-dom";

    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);
      const calculation = useMemo(() => expensiveCalculation(count), [count]);

      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

      return (
        <div>
          <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
              return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
          </div>
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
          </div>
        </div>
      );
    };

    const expensiveCalculation = (num) => {
      console.log("Calculating...");
      for (let i = 0; i < 1000000000; i++) {
        num += 1;
      }
      return num;
    };

    ReactDOM.render(<App />, document.getElementById('root'));
