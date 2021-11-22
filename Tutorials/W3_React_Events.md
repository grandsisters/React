## React Events

HTML DOM 이벤트와 마찬가지로 React는 사용자 이벤트를 기반으로 작업을 수행할 수 있습니다.

React에는 HTML과 동일한 이벤트(클릭, 변경, 마우스오버 등)가 있습니다.

---

### 이벤트 추가

React 이벤트는 camelCase 구문으로 작성됩니다.

onclick 대신 onClick 사용.

React 이벤트 핸들러는 중괄호 안에 작성됩니다.

onClick="shoot()" 대신 onClick={shoot} 사용.

    React:
    <button onClick={shoot}>Take the Shot!</button>

    HTML:
    <button onclick="shoot()">Take the Shot!</button>

<br />

    예시:
    구성 요소 shoot내부 에 함수를 넣습니다 Football.

    function Football() {
      const shoot = () => {
        alert("Great Shot!");
      }

      return (
        <button onClick={shoot}>Take the shot!</button>
      );
    }

    ReactDOM.render(<Football />, document.getElementById('root'));

---

### 인수 전달

이벤트 핸들러에 인수를 전달하려면 화살표 함수를 사용하십시오.

    예시:
    shoot 화살표 함수를 사용하여 함수에 대한 매개변수로 "Goal!"를 보냅니다.:

    function Football() {
      const shoot = (a) => {
        alert(a);
      }

      return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
      );
    }

    ReactDOM.render(<Football />, document.getElementById('root'));

---

### React 이벤트 객체

이벤트 핸들러는 함수를 트리거한 React 이벤트에 액세스할 수 있습니다.

이 예에서 이벤트는 "클릭" 이벤트입니다.

    예시:
    화살표 기능: 이벤트 개체를 수동으로 보내기:

    function Football() {
      const shoot = (a, b) => {
        alert(b.type);
        /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
      }

      return (
        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
      );
    }

    ReactDOM.render(<Football />, document.getElementById('root'));
