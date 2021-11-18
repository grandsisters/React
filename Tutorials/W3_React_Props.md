## React Props

Props는 React 구성 요소에 전달되는 인수입니다.

props는 HTML 속성을 통해 구성 요소에 전달됩니다.

    props : 속성을 나타냅니다.

---

### React props

React Props는 JavaScript의 함수 인수 와 HTML의 속성 과 같습니다 .

소품을 구성 요소로 보내려면 HTML 속성과 동일한 구문을 사용하십시오.

    예시
    Car 요소에 "brand" 속성을 추가합니다.

    const myelement = <Car brand="Ford" />;

구성 요소는 인수를 props객체 로 받습니다 .

    예시
    구성요소에서 브랜드 속성을 사용합니다.

    function Car(props) {
      return <h2>I am a { props.brand }!</h2>;
    }

---

### Pass Data

props는 또한 매개변수로 한 컴포넌트에서 다른 컴포넌트로 데이터를 전달하는 방법입니다.

    예시
    Garage 구성 요소에서 Car 구성 요소로 "brand" 속성을 보냅니다.

    function Car(props) {
      return <h2>I am a { props.brand }!</h2>;
    }

    function Garage() {
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <Car brand="Ford" />
        </>
      );
    }

    ReactDOM.render(<Garage />, document.getElementById('root'));

보낼 변수가 있고 위의 예와 같이 문자열이 아닌 경우 중괄호 안에 변수 이름을 넣으면 됩니다.

    예시
    이름이 지정된 변수 carName를 만들고 Car구성 요소로 보냅니다 .

    function Car(props) {
      return <h2>I am a { props.brand }!</h2>;
    }

    function Garage() {
      const carName = "Ford";
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <Car brand={ carName } />
        </>
      );
    }

    ReactDOM.render(<Garage />, document.getElementById('root'));

또는 객체인 경우:

    예시
    이름이 지정된 개체 carInfo를 만들고 Car구성 요소로 보냅니다 .

    function Car(props) {
      return <h2>I am a { props.brand.model }!</h2>;
    }

    function Garage() {
      const carInfo = { name: "Ford", model: "Mustang" };
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <Car brand={ carInfo } />
        </>
      );
    }

    ReactDOM.render(<Garage />, document.getElementById('root'));

참고: React Props는 읽기 전용입니다! 값을 변경하려고 하면 오류가 발생합니다.
