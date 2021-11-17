## React Class Components

React 16.8 이전에는 Class 구성 요소가 React 구성 요소의 상태와 수명 주기를 추적하는 유일한 방법이었습니다. 기능 구성 요소는 "상태 비저장"으로 간주되었습니다.

Hooks가 추가되어 Function 구성 요소는 이제 Class 구성 요소와 거의 동일합니다. 차이점은 너무 미미하여 React에서 Class 구성 요소를 사용할 필요가 없을 것입니다.

Function 구성 요소가 선호되지만 현재 React에서 Class 구성 요소를 제거할 계획은 없습니다.

이 섹션에서는 React에서 Class 구성 요소를 사용하는 방법에 대한 개요를 제공합니다.

이 섹션을 건너뛰고 대신 함수 구성 요소를 사용하십시오.

---

### React Component

구성 요소는 독립적이고 재사용 가능한 코드 비트입니다. 그것들은 JavaScript 함수와 같은 목적을 제공하지만, 고립되어 작동하고 render() 함수를 통해 HTML을 반환합니다.

구성 요소는 클래스 구성 요소와 함수 구성 요소의 두 가지 유형으로 제공되며 이 장에서는 클래스 구성 요소에 대해 배웁니다.

---

### 클래스 Component 만들기

React 컴포넌트를 생성할 때 컴포넌트의 이름은 대문자로 시작해야 합니다.

구성 요소는 extends React.Component명령문 을 포함해야 하며 이 명령문은 React.Component에 대한 상속을 생성하고 구성 요소에 React.Component의 기능에 대한 액세스 권한을 부여합니다.

구성 요소에는 render()메서드 도 필요하며 이 메서드는 HTML을 반환합니다.

    예시
    라는 클래스 구성 요소를 만듭니다. Car

    class Car extends React.Component {
      render() {
        return <h2>Hi, I am a Car!</h2>;
      }
    }

이제 React 애플리케이션에는 요소를 반환하는 Car라는 구성 \<h2>요소가 있습니다.

애플리케이션에서 이 구성요소를 사용하려면 일반 HTML과 유사한 구문을 사용하십시오. \<Car />

    예시
    Car"루트" 요소에 구성요소를 표시합니다 .

    ReactDOM.render(<Car />, document.getElementById('root'));

---

### Component 생성자

가있는 경우 constructor()구성 요소의 기능 구성 요소가 시작됩니다 때,이 함수가 호출됩니다.

생성자 함수는 구성 요소의 속성을 시작하는 곳입니다.

React에서 컴포넌트 속성은 라는 객체에 보관되어야 합니다 state.

state이 튜토리얼의 뒷부분에서 더 자세히 배우게 될 것 입니다.

생성자 함수는 super() 부모 구성 요소의 생성자 함수를 실행하는 문 을 포함하여 부모 구성 요소의 상속을 존중하는 곳이기도 하며 구성 요소 는 상위 구성 요소의 모든 기능에 액세스할 수 있습니다( React.Component).

    예시
    Car 구성 요소에서 생성자 함수를 만들고 color 속성을 추가합니다.

    class Car extends React.Component {
      constructor() {
        super();
        this.state = {color: "red"};
      }
      render() {
        return <h2>I am a Car!</h2>;
      }
    }

render() 함수에서 color 속성을 사용하십시오:

    예시
    class Car extends React.Component {
      constructor() {
        super();
        this.state = {color: "red"};
      }
      render() {
        return <h2>I am a {this.state.color} Car!</h2>;
      }
    }

---

### Props

구성 요소 속성을 처리하는 또 다른 방법은 를 사용하는 것 props입니다.

소품은 함수 인수와 같으며 속성으로 구성 요소에 보냅니다.

props다음 장에서 더 자세히 배울 것 입니다.

    예시
    속성을 사용하여 Car 구성 요소에 색상을 전달하고 render() 함수에서 사용합니다.

    class Car extends React.Component {
      render() {
        return <h2>I am a {this.props.color} Car!</h2>;
      }
    }

    ReactDOM.render(<Car color="red"/>, document.getElementById('root'));

---

### 생성자의 props

구성 요소에 생성자 함수가 있는 경우 props는 항상 생성자에 전달되고 super()메서드 를 통해 React.Component에도 전달되어야 합니다 .

    예시
    class Car extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return <h2>I am a {this.props.model}!</h2>;
      }
    }

    ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));

---

### Component의 Component

다른 구성 요소 내부의 구성 요소를 참조할 수 있습니다.

    예시
    Garage 구성 요소 내에서 Car 구성 요소를 사용합니다.

    class Car extends React.Component {
      render() {
        return <h2>I am a Car!</h2>;
      }
    }

    class Garage extends React.Component {
      render() {
        return (
          <div>
          <h1>Who lives in my Garage?</h1>
          <Car />
          </div>
        );
      }
    }

    ReactDOM.render(<Garage />, document.getElementById('root'));

---

### 파일의 구성요소

React는 코드를 재사용하는 것이므로 일부 구성 요소를 별도의 파일에 삽입하는 것이 현명할 수 있습니다.

그렇게 하려면 .js 파일 확장자를 가진 새 파일을 만들고 그 안에 코드를 넣으십시오.

파일은 React를 가져오는 것으로 시작해야 하며(이전과 같이) export default Car;문으로 끝나야 합니다 .

    예시
    이것은 새 파일이며 이름을 Car.js다음 과 같이 지정했습니다 .

    import React from 'react';

    class Car extends React.Component {
      render() {
        return <h2>Hi, I am a Car!</h2>;
      }
    }

    export default Car;

Car구성 요소 를 사용하려면 응용 프로그램에서 파일을 가져와야 합니다.

    예시
    이제 Car.js응용 프로그램 에서 파일을 가져오고 Car 여기에서 만든 것처럼 구성 요소를 사용할 수 있습니다.

    import React from 'react';
    import ReactDOM from 'react-dom';
    import Car from './Car.js';

    ReactDOM.render(<Car />, document.getElementById('root'));

---

### React 클래스 구성 요소 상태

React Class 구성 요소에는 내장 state객체가 있습니다.

state컴포넌트 생성자 섹션에서 앞서 사용한 것을 눈치채셨을 것입니다 .

state당신이 구성 요소에 속하는 속성 값을 저장하는 곳 개체입니다.

state 객체가 변경되면 컴포넌트가 재랜더링 됩니다.

---

### 상태 개체 만들기

상태 개체는 생성자에서 초기화됩니다.

    예시
    state생성자 메서드에서 개체를 지정합니다 .

    class Car extends React.Component {
      constructor(props) {
        super(props);
      this.state = {brand: "Ford"};
      }
      render() {
        return (
          <div>
            <h1>My Car</h1>
          </div>
        );
      }
    }

상태 개체는 원하는 만큼 속성을 포함할 수 있습니다.

    예시
    구성 요소에 필요한 모든 속성을 지정합니다.

    class Car extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          brand: "Ford",
          model: "Mustang",
          color: "red",
          year: 1964
        };
      }
      render() {
        return (
          <div>
            <h1>My Car</h1>
          </div>
        );
      }
    }

---

### state개체 사용

this.state.propertyname을 사용하여 구성 요소의 아무 곳에서나 state개체를 참조하십시오 .

    예시:
    메서드 에서 state개체를 참조하십시오 render().

    class Car extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          brand: "Ford",
          model: "Mustang",
          color: "red",
          year: 1964
        };
      }
      render() {
        return (
          <div>
            <h1>My {this.state.brand}</h1>
            <p>
              It is a {this.state.color}
              {this.state.model}
              from {this.state.year}.
            </p>
          </div>
        );
      }
    }

---

### 상태 개체 변경

상태 객체의 값을 변경하려면 이 값을 사용합니다. setState() 메서드입니다.

상태 객체의 값이 변경되면 구성 요소는 다시 렌더링되며, 이는 출력이 새 값에 따라 변경됨을 의미합니다.

    예시
    색 속성을 변경할 onClick 이벤트와 함께 버튼을 추가합니다.

    class Car extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          brand: "Ford",
          model: "Mustang",
          color: "red",
          year: 1964
        };
      }
      changeColor = () => {
        this.setState({color: "blue"});
      }
      render() {
        return (
          <div>
            <h1>My {this.state.brand}</h1>
            <p>
              It is a {this.state.color}
              {this.state.model}
              from {this.state.year}.
            </p>
            <button
              type="button"
              onClick={this.changeColor}
            >Change color</button>
          </div>
        );
      }
    }

항상 setState() 메소드를 사용하여 상태 객체를 변경하십시오.

그러면 구성요소가 업데이트되었음을 알고 렌더() 메소드(및 기타 모든 수명 주기 메서드)를 호출합니다.
