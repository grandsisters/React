## React useRef Hook

useRef후크 렌더링 사이에 당신이 값을 지속 할 수 있습니다.

업데이트할 때 다시 렌더링하지 않는 변경 가능한 값을 저장하는 데 사용할 수 있습니다.

DOM 요소에 직접 액세스하는 데 사용할 수 있습니다.

---

### 다시 렌더링하지 않음

useStateHook을 사용하여 애플리케이션이 몇 번 렌더링되는지 계산하려고 하면 이 Hook 자체가 다시 렌더링을 일으키기 때문에 무한 루프에 빠지게 됩니다.

이를 피하기 위해 useRefHook을 사용할 수 있습니다 .

    예시:
    사용하여 useRef응용 프로그램을 렌더링 추적 할 수 있습니다.

    import { useState, useEffect, useRef } from "react";
    import ReactDOM from "react-dom";

    function App() {
      const [inputValue, setInputValue] = useState("");
      const count = useRef(0);

      useEffect(() => {
        count.current = count.current + 1;
      });

      return (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h1>Render Count: {count.current}</h1>
        </>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));

useRef()하나의 항목만 반환합니다. current라는 개체를 반환합니다 .

초기화 useRef할 때 초기 값을 설정합니다: useRef(0).

count.current는 다음을 수행하는 것과 같습니다 const count = {current: 0}. 를 사용하여 카운트에 액세스할 수 있습니다 .

---

### DOM 요소 액세스

일반적으로 React가 모든 DOM 조작을 처리하도록 하고 싶습니다.

그러나 useRef문제를 일으키지 않고 사용할 수 있는 경우가 있습니다.

React에서는 ref요소에 속성을 추가 하여 DOM에서 직접 액세스할 수 있습니다.

    예시:
    useRef입력에 초점을 맞추는 데 사용 :

    import { useRef } from "react";
    import ReactDOM from "react-dom";

    function App() {
      const inputElement = useRef();

      const focusInput = () => {
        inputElement.current.focus();
      };

      return (
        <>
          <input type="text" ref={inputElement} />
          <button onClick={focusInput}>Focus Input</button>
        </>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));

---

### 상태 변경 추적

useRef후크는 이전 상태 값을 추적하는 데 사용할 수 있습니다.

이는 useRef렌더링 간에 값 을 유지할 수 있기 때문 입니다.

    예시:
    useRef이전 상태 값을 추적하는 데 사용 합니다.

    import { useState, useEffect, useRef } from "react";
    import ReactDOM from "react-dom";

    function App() {
      const [inputValue, setInputValue] = useState("");
      const previousInputValue = useRef("");

      useEffect(() => {
        previousInputValue.current = inputValue;
      }, [inputValue]);

      return (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h2>Current Value: {inputValue}</h2>
          <h2>Previous Value: {previousInputValue.current}</h2>
        </>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));

이번에는 useState, useEffect, 및 의 조합을 사용 useRef하여 이전 상태를 추적합니다.

useRefinputValue에서는 입력 필드에 텍스트를 입력하여 업데이트될 때마다 현재 값을 useEffect업데이트하고 있습니다.
