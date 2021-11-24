## React useContext Hook

---

### React Context

React Context는 전역적으로 상태를 관리하는 방법입니다.

useStateHook 과 함께 사용하면 useState단독으로 사용하는 것보다 더 쉽게 중첩된 구성 요소 간에 상태를 공유 할 수 있습니다 .

---

### 문제

상태는 상태에 대한 액세스가 필요한 스택에서 가장 높은 상위 컴포넌트에 의해 유지되어야 합니다.

설명을 위해 많은 중첩 컴포넌트가 있습니다. 스택의 맨 위와 맨 아래에 있는 컴포넌트는 상태에 액세스해야 합니다.

컨텍스트 없이 이 작업을 수행하려면 각 중첩 컴포넌트를 통해 상태를 "props"로 전달해야 합니다. 이것을 "프롭 드릴링"이라고 합니다.

    예시:
    중첩된 구성 요소를 통해 "props" 전달:

    import { useState } from "react";
    import ReactDOM from "react-dom";

    function Component1() {
      const [user, setUser] = useState("Jesse Hall");

      return (
        <>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 user={user} />
        </>
      );
    }

    function Component2({ user }) {
      return (
        <>
          <h1>Component 2</h1>
          <Component3 user={user} />
        </>
      );
    }

    function Component3({ user }) {
      return (
        <>
          <h1>Component 3</h1>
          <Component4 user={user} />
        </>
      );
    }

    function Component4({ user }) {
      return (
        <>
          <h1>Component 4</h1>
          <Component5 user={user} />
        </>
      );
    }

    function Component5({ user }) {
      return (
        <>
          <h1>Component 5</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
      );
    }

    ReactDOM.render(<Component1 />, document.getElementById("root"));

구성 요소 2-4에는 상태가 필요하지 않았지만 구성 요소 5에 도달할 수 있도록 상태를 전달해야 했습니다.

---

### 해결책

해결책은 컨텍스트를 만드는 것입니다.

### 컨텍스트 생성

컨텍스트를 생성하려면 컨텍스트를 가져 createContext오고 초기화해야 합니다.

import { useState, createContext } from "react";
import ReactDOM from "react-dom";

const UserContext = createContext()
다음으로 컨텍스트 공급자를 사용하여 상태 컨텍스트가 필요한 구성 요소 트리를 래핑합니다.

### 컨텍스트 제공자

컨텍스트 공급자에서 자식 구성 요소를 래핑하고 상태 값을 제공합니다.

    function Component1() {
      const [user, setUser] = useState("Jesse Hall");

      return (
        <UserContext.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 user={user} />
        </UserContext.Provider>
      );
    }

이제 이 트리의 모든 구성 요소는 사용자 컨텍스트에 액세스할 수 있습니다.

### useContext후크 사용

자식 구성 요소에서 컨텍스트를 사용하려면 useContextHook 을 사용하여 컨텍스트에 액세스해야 합니다 .

먼저 useContextimport 문에 다음을 포함합니다 .

    import { useState, createContext, useContext } from "react";
    그런 다음 모든 구성 요소에서 사용자 컨텍스트에 액세스할 수 있습니다.

    function Component5() {
      const user = useContext(UserContext);

      return (
        <>
          <h1>Component 5</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
      );
    }

---

### 전체 예

    예시:
    다음은 React Context를 사용하는 전체 예입니다.

    import { useState, createContext, useContext } from "react";
    import ReactDOM from "react-dom";

    const UserContext = createContext();

    function Component1() {
      const [user, setUser] = useState("Jesse Hall");

      return (
        <UserContext.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 user={user} />
        </UserContext.Provider>
      );
    }

    function Component2() {
      return (
        <>
          <h1>Component 2</h1>
          <Component3 />
        </>
      );
    }

    function Component3() {
      return (
        <>
          <h1>Component 3</h1>
          <Component4 />
        </>
      );
    }

    function Component4() {
      return (
        <>
          <h1>Component 4</h1>
          <Component5 />
        </>
      );
    }

    function Component5() {
      const user = useContext(UserContext);

      return (
        <>
          <h1>Component 5</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
      );
    }

    ReactDOM.render(<Component1 />, document.getElementById("root"));
