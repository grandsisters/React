## React Components

구성 요소는 HTML 요소를 반환하는 함수와 같습니다.

---

### 반응 구성 요소

구성 요소는 독립적이고 재사용 가능한 코드 비트입니다. JavaScript 함수와 동일한 목적을 제공하지만 분리되어 작동하고 HTML을 반환합니다.

구성 요소는 클래스 구성 요소와 함수 구성 요소의 두 가지 유형으로 제공되며 이 자습서에서는 함수 구성 요소에 집중합니다.

    이전 React 코드 베이스에서 주로 사용되는 Class 구성 요소를 찾을 수 있습니다.

    이제 React 16.8에 추가된 Hooks와 함께 Function 구성 요소를 사용하는 것이 좋습니다.

    참조용으로 클래스 구성 요소에 대한 선택적 섹션이 있습니다.

---

### 첫 번째 구성 요소 만들기

React 컴포넌트를 생성할 때 컴포넌트의 이름 은 반드시 대문자로 시작 해야 합니다.

### 클래스 구성 요소

클래스 구성 요소에는 extends React.Component명령문이 포함되어야 합니다 . 이 문은 React.Component에 대한 상속을 생성하고 구성 요소에 React.Component의 기능에 대한 액세스 권한을 부여합니다.

구성 요소에는 render()메서드 도 필요하며 이 메서드는 HTML을 반환합니다.

    예시
    라는 클래스 구성 요소를 만듭니다. Car

    class Car extends React.Component {
      render() {
        return <h2>Hi, I am a Car!</h2>;
      }
    }

### 기능 구성 요소

다음은 위와 동일한 예이지만 대신 Function 구성 요소를 사용하여 생성되었습니다.

Function 구성 요소도 HTML을 반환하고 Class 구성 요소와 거의 동일한 방식으로 작동하지만 Function 구성 요소는 훨씬 적은 코드를 사용하여 작성할 수 있고 이해하기 쉬우며 이 자습서에서 선호됩니다.

    예시
    라는 함수 구성 요소를 만듭니다. Car

    function Car() {
      return <h2>Hi, I am a Car!</h2>;
    }

---

### 구성 요소 렌더링

이제 React 애플리케이션에는 요소를 반환하는 Car라는 구성 \<h2>요소가 있습니다.

애플리케이션에서 이 구성요소를 사용하려면 일반 HTML과 유사한 구문을 사용하십시오. \<Car />

    예시
    Car"루트" 요소에 구성요소를 표시합니다 .

    ReactDOM.render(<Car />, document.getElementById('root'));

---

### Props

구성 요소는 props속성을 나타내는 로 전달할 수 있습니다 .

소품은 함수 인수와 같으며 속성으로 구성 요소에 보냅니다.

props다음 장에서 더 자세히 배울 것 입니다.

    예시
    속성을 사용하여 Car 구성 요소에 색상을 전달하고 render() 함수에서 사용합니다.

    function Car(props) {
      return <h2>I am a {props.color} Car!</h2>;
    }

    ReactDOM.render(<Car color="red"/>, document.getElementById('root'));

---

### Components in Components

다른 구성 요소 내부의 구성 요소를 참조할 수 있습니다.

    예시
    Garage 구성 요소 내에서 Car 구성 요소를 사용합니다.

    function Car() {
      return <h2>I am a Car!</h2>;
    }

    function Garage() {
      return (
        <>
          <h1>Who lives in my Garage?</h1>
          <Car />
        </>
      );
    }

    ReactDOM.render(<Garage />, document.getElementById('root'));

---

### Components in Files

React는 코드를 재사용하는 것이므로 구성 요소를 별도의 파일로 분할하는 것이 좋습니다.

그렇게 하려면 .js 파일 확장자를 가진 새 파일을 만들고 그 안에 코드를 넣으십시오.

파일 이름은 대문자로 시작해야 합니다.

    예시
    이것은 "Car.js"라는 새 파일입니다.

    function Car() {
      return <h2>Hi, I am a Car!</h2>;
    }

    export default Car;

Car 컴포넌트를 사용하려면 애플리케이션에서 파일을 가져와야 합니다.

    예시
    이제 응용 프로그램에서 "Car.js" 파일을 가져오고 Car 여기에서 만든 것처럼 구성 요소를 사용할 수 있습니다.

    import React from 'react';
    import ReactDOM from 'react-dom';
    import Car from './Car.js';

    ReactDOM.render(<Car />, document.getElementById('root'));
