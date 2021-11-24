## React Hooks

Hooks는 버전 16.8에서 React에 추가되었습니다.

후크를 사용하면 함수 구성 요소가 상태 및 기타 React 기능에 액세스할 수 있습니다. 이 때문에 일반적으로 클래스 구성 요소가 더 이상 필요하지 않습니다.

    Hooks는 일반적으로 클래스 구성 요소를 대체하지만 React에서 클래스를 제거할 계획은 없습니다.

---

### 후크 란 무엇입니까?

후크를 사용하면 상태 및 수명 주기 메서드와 같은 React 기능에 "후크"할 수 있습니다.

    예시:
    다음은 Hook의 예입니다. 말이 안 된다고 걱정하지 마세요. 우리는 다음 섹션 에서 더 자세히 다룰 것 입니다.

    import React, { useState } from "react";
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
          <button
            type="button"
            onClick={() => setColor("red")}
          >Red</button>
          <button
            type="button"
            onClick={() => setColor("pink")}
          >Pink</button>
          <button
            type="button"
            onClick={() => setColor("green")}
          >Green</button>
        </>
      );
    }

    ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

react에서 hooks를 import해야 합니다 .

여기서는 useStateHook을 사용 하여 애플리케이션 상태를 추적합니다.

상태는 일반적으로 추적해야 하는 애플리케이션 데이터 또는 속성을 나타냅니다.

---

### 후크 규칙

후크에는 3가지 규칙이 있습니다.

- Hook은 React 함수 컴포넌트 내에서만 호출할 수 있습니다.
- 후크는 구성 요소의 최상위 수준에서만 호출할 수 있습니다.
- 후크는 조건부일 수 없습니다.

  참고: Hook은 React 클래스 구성 요소에서 작동하지 않습니다.
