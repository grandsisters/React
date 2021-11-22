## React Conditional Rendering

React에서는 조건부로 구성 요소를 렌더링할 수 있습니다.

이를 수행하는 방법에는 여러 가지가 있습니다.

---

### if statement

ifJavaScript 연산자를 사용하여 렌더링할 구성 요소를 결정할 수 있습니다 .

    예시:
    다음 두 가지 구성 요소를 사용합니다.

    function MissedGoal() {
      return <h1>MISSED!</h1>;
    }

    function MadeGoal() {
      return <h1>Goal!</h1>;
    }

<br />

    예시:
    이제 조건에 따라 렌더링할 구성 요소를 선택하는 또 다른 구성 요소를 만듭니다.

    function Goal(props) {
      const isGoal = props.isGoal;
      if (isGoal) {
        return <MadeGoal/>;
      }
      return <MissedGoal/>;
    }

    ReactDOM.render(
      <Goal isGoal={false} />,
      document.getElementById('root')
    );

isGoal속성을 true다음으로 변경해 보십시오 .

    예시:
    ReactDOM.render(
      <Goal isGoal={true} />,
      document.getElementById('root')
    );

---

### 논리 &&연산자

React 구성 요소를 조건부로 렌더링하는 또 다른 방법은 &&연산자 를 사용하는 것 입니다.

    예시:
    중괄호를 사용하여 JSX에 JavaScript 표현식을 포함할 수 있습니다.

    function Garage(props) {
      const cars = props.cars;
      return (
        <>
          <h1>Garage</h1>
          {cars.length > 0 &&
            <h2>
              You have {cars.length} cars in your garage.
            </h2>
          }
        </>
      );
    }

    const cars = ['Ford', 'BMW', 'Audi'];
    ReactDOM.render(
      <Garage cars={cars} />,
      document.getElementById('root')
    );

cars.length가 true와 같으면 &&의 식이 렌더링됩니다.

cars배열을 비우십시오 .

    예시:
    const cars = [];
    ReactDOM.render(
      <Garage cars={cars} />,
      document.getElementById('root')
    );

---

### 삼항 연산자

요소를 조건부로 렌더링하는 또 다른 방법은 삼항 연산자를 사용하는 것입니다.

    condition ? true : false

다시 목표 사례로 돌아가겠습니다.

    예시:
    반환 MadeGoal하는 경우 구성 요소 isGoal입니다 true그렇지 않으면 반환, MissedGoal구성 요소를 :

    function Goal(props) {
      const isGoal = props.isGoal;
      return (
        <>
          { isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
      );
    }

    ReactDOM.render(
      <Goal isGoal={false} />,
      document.getElementById('root')
    );
