## React useState Hook

React useStateHook을 사용하면 함수 구성 요소의 상태를 추적할 수 있습니다.

상태는 일반적으로 애플리케이션에서 추적해야 하는 데이터 또는 속성을 나타냅니다.

---

### Import useState

useStateHook 을 사용하려면 먼저 import구성 요소에 Hook이 필요합니다 .

    예시:
    구성 요소의 맨 위에 import있는 useStateHook.

    import { useState } from "react";

명명된 내보내기이므로 useState에서 구조화하고 있음을 주목 react하세요.

---

### useState 초기화

useState함수 구성 요소를 호출 하여 상태를 초기화 합니다.

useState 초기 상태를 받아들이고 두 개의 값을 반환합니다.

현재 상태.
상태를 업데이트하는 함수입니다.

    예시:
    함수 구성 요소의 맨 위에서 상태를 초기화합니다.

    import { useState } from "react";

    function FavoriteColor() {
      const [color, setColor] = useState("");
    }

다시 한 번 useState에서 반환된 값을 구조화하고 있음을 주목하세요 .

첫 번째 값 color은 현재 상태입니다.

두 번째 값인 setColor은 상태를 업데이트하는 데 사용되는 함수입니다.

이 이름은 원하는 이름을 지정할 수 있는 변수입니다.

마지막으로 초기 상태를 빈 문자열로 설정합니다. useState("")

---

### 상태 읽기

이제 컴포넌트의 아무 곳에나 상태를 포함할 수 있습니다.

    예시:
    렌더링된 구성 요소에서 상태 변수를 사용합니다.

    import { useState } from "react";
    import ReactDOM from "react-dom";

    function FavoriteColor() {
      const [color, setColor] = useState("red");

      return <h1>My favorite color is {color}!</h1>
    }

    ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

---

### 상태 업데이트

상태를 업데이트하기 위해 상태 업데이터 기능을 사용합니다.

상태를 직접 업데이트해서는 안 됩니다. 예: color = "red"허용되지 않습니다.

    예시:
    버튼을 사용하여 상태를 업데이트합니다.

    import { useState } from "react";
    import ReactDOM from "react-dom";

    function FavoriteColor() {
      const [color, setColor] = useState("red");

      return (
        <>
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Blue</button>
        </>
      )
    }

    ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

---

### What Can State Hold

useState훅은 문자열, 숫자, 부울, 배열, 객체 추적, 및 이들의 조합을 유지하는 데 사용할 수 있습니다!

개별 값을 추적하기 위해 여러 상태 Hook을 만들 수 있습니다.

    예시:
    여러 상태 후크 만들기:

    import { useState } from "react";
    import ReactDOM from "react-dom";

    function Car() {
      const [brand, setBrand] = useState("Ford");
      const [model, setModel] = useState("Mustang");
      const [year, setYear] = useState("1964");
      const [color, setColor] = useState("red");

      return (
        <>
          <h1>My {brand}</h1>
          <p>
            It is a {color} {model} from {year}.
          </p>
        </>
      )
    }

    ReactDOM.render(<Car />, document.getElementById('root'));

또는 하나의 상태를 사용하고 대신 객체를 포함할 수 있습니다!

    예시:
    객체를 보유하는 단일 후크를 만듭니다.

    import { useState } from "react";
    import ReactDOM from "react-dom";

    function Car() {
      const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

      return (
        <>
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
        </>
      )
    }

    ReactDOM.render(<Car />, document.getElementById('root'));

이제 단일 개체를 추적하고 있으므로 구성 요소를 렌더링할 때 해당 개체를 참조한 다음 해당 개체의 속성을 참조해야 합니다. (예: car.brand)

---

### 상태의 객체 및 배열 업데이트

상태가 업데이트되면 전체 상태를 덮어씁니다.

우리 차의 색상만 업데이트하고 싶다면?

만 호출 setCar({color: "blue"})하면 상태에서 브랜드, 모델 및 연도가 제거됩니다.

JavaScript 스프레드 연산자를 사용하여 도움을 드릴 수 있습니다.

    예시:
    JavaScript 스프레드 연산자를 사용하여 자동차 색상만 업데이트합니다.

    import { useState } from "react";
    import ReactDOM from "react-dom";

    function Car() {
      const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

      const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
      }

      return (
        <>
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
          <button
            type="button"
            onClick={updateColor}
          >Blue</button>
        </>
      )
    }

    ReactDOM.render(<Car />, document.getElementById('root'));

state의 현재 값이 필요하기 때문에 함수에 함수를 전달 setCar합니다. 이 함수는 이전 값을 받습니다.

그런 다음 previousState색상만 펼치고 덮어 쓰면서 객체를 반환합니다 .
