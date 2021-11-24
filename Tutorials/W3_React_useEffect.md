## React useEffect Hooks

useEffect훅은 당신이 컴포넌트에 부작용을 일으키게 할 수 있습니다.

부작용의 몇 가지 예는 데이터 가져오기, DOM 직접 업데이트 및 타이머입니다.

useEffect두 개의 인수를 허용합니다. 두 번째 인수는 선택 사항입니다.

    useEffect(<function>, <dependency>)

타이머를 예로 들어보겠습니다.

    예시:
    setTimeout()초기 렌더링 후 1초를 계산하는 데 사용 :

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom";

    function Timer() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });

      return <h1>I've rendered {count} times!</h1>;
    }

    ReactDOM.render(<Timer />, document.getElementById('root'));

하지만 기다려!! 한 번만 세어야 하는데 계속 세고 있어!

useEffect모든 렌더링에서 실행됩니다. 즉, 개수가 변경되면 렌더링이 발생하고 다른 효과가 트리거됩니다.

이것은 우리가 원하는 것이 아닙니다. 부작용이 실행되는 시기를 제어하는 ​​몇 가지 방법이 있습니다.

배열을 허용하는 두 번째 매개변수를 항상 포함해야 합니다. 선택적 useEffect으로 이 배열에 종속성을 전달할 수 있습니다 .

1. 전달된 종속성 없음:
   useEffect(() => {
   //Runs on every render
   });

2. 빈 배열:
   useEffect(() => {
   //Runs only on the first render
   }, []);

3. 소품 또는 상태 값:
   useEffect(() => {
   //Runs on the first render
   //And any time any dependency value changes
   }, [prop, state]);

따라서 이 문제를 해결하기 위해 초기 렌더링에서만 이 효과를 실행해 보겠습니다.

    예시:
    초기 렌더링에서만 효과를 실행합니다.

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom";

    function Timer() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      } []); // <- add empty brackets here

      return <h1>I've rendered {count} times!</h1>;
    }

    ReactDOM.render(<Timer />, document.getElementById('root'));

<br />

    예시:
    다음은 useEffect변수에 의존 하는 Hook 의 예입니다 . 경우 count변수 업데이트, 효과는 다시 실행합니다 :

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom";

    function Counter() {
      const [count, setCount] = useState(0);
      const [calculation, setCalculation] = useState(0);

      useEffect(() => {
        setCalculation(() => count * 2);
      }, [count]); // <- add the count variable here

      return (
        <>
          <p>Count: {count}</p>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
          <p>Calculation: {calculation}</p>
        </>
      );
    }

    ReactDOM.render(<Counter />, document.getElementById('root'));

종속성이 여러 개인 경우 useEffect종속성 배열에 포함해야 합니다 .

---

### Effect 정리

일부 효과는 메모리 누수를 줄이기 위해 정리가 필요합니다.

더 이상 필요하지 않은 시간 초과, 구독, 이벤트 리스너 및 기타 효과는 삭제해야 합니다.

useEffectHook 의 끝에 return 함수를 포함하여 이를 수행합니다 .

    예시:
    useEffectHook 끝에서 타이머를 정리합니다 .

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom";

    function Timer() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        let timer = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);

      return () => clearTimeout(timer)
      }, []);

      return <h1>I've rendered {count} times!</h1>;
    }

    ReactDOM.render(<Timer />, document.getElementById("root"));

참고: 타이머를 지우려면 이름을 지정해야 했습니다.
