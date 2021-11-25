## React useReducer Hook

useReducer훅은 useState훅과 비슷합니다 .

사용자 정의 상태 논리를 허용합니다.

복잡한 논리에 의존하는 여러 상태를 추적하는 useReducer경우 유용할 수 있습니다.

---

### Syntax

useReducer Hook은 두 개의 인수를 허용합니다.

useReducer(<리듀서>, <초기 상태>)

이 reducer함수는 사용자 정의 상태 논리를 포함 initialState하며 단순한 값일 수 있지만 일반적으로 개체를 포함합니다.

useReducer후크는 현재의 state과 dispatch메소드를 반화합니다.

다음은 useReducer카운터 앱 의 예입니다 .

    예시:
    import { useReducer } from "react";
    import ReactDOM from "react-dom";

    const initialTodos = [
      {
        id: 1,
        title: "Todo 1",
        complete: false,
      },
      {
        id: 2,
        title: "Todo 2",
        complete: false,
      },
    ];

    const reducer = (state, action) => {
      switch (action.type) {
        case "COMPLETE":
          return state.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, complete: !todo.complete };
            } else {
              return todo;
            }
          });
        default:
          return state;
      }
    };

    function Todos() {
      const [todos, dispatch] = useReducer(reducer, initialTodos);

      const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
      };

      return (
        <>
          {todos.map((todo) => (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)}
                />
                {todo.title}
              </label>
            </div>
          ))}
        </>
      );
    }

    ReactDOM.render(<Todos />, document.getElementById('root'));

이것은 할 일 완료 상태를 추적하는 논리일 뿐입니다.

할 일을 추가, 삭제 및 완료하는 모든 논리는 useReducer더 많은 작업을 추가 하여 단일 Hook에 포함될 수 있습니다 .
