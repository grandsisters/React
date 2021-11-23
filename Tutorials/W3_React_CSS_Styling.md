## Styling React Using CSS

CSS로 React의 스타일을 지정하는 방법에는 여러 가지가 있습니다.

세 가지 일반적인 방법을 자세히 살펴봅니다.

- Inline styling
- CSS stylesheets
- CSS Modules

---

### Inline Styling

인라인 스타일 속성으로 요소의 스타일을 지정하려면 값이 JavaScript 객체여야 합니다.

    예시:
    스타일 정보가 있는 개체를 삽입합니다.

    const Header = () => {
      return (
        <>
          <h1 style={{color: "red"}}>Hello Style!</h1>
          <p>Add a little style!</p>
        </>
      );
    }

참고: JSX에서 JavaScript 표현식은 중괄호 안에 작성되며 JavaScript 객체도 중괄호를 사용하기 때문에 위 예제의 스타일은 두 세트의 중괄호 안에 작성됩니다 {{}}.

### Camel Case 속성 이름

인라인 CSS는 JavaScript 객체로 작성되기 때문에 하이픈 구분 기호가 있는 속성( background-color예: )은 카멜 케이스 구문으로 작성해야 합니다.

    예시:
    backgroundColor대신 사용 background-color:

    const Header = () => {
    return (
    <>
    <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
    <p>Add a little style!</p>
    </>
    );
    }

자바스크립트 객체
스타일 정보를 사용하여 객체를 생성하고 style 속성에서 참조할 수도 있습니다.

    예시:
    다음과 같은 myStyle 스타일 개체를 만듭니다 .

    const Header = () => {
    const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
    };
    return (
    <>
    <h1 style={myStyle}>Hello Style!</h1>
    <p>Add a little style!</p>
    </>
    );
    }

---

### CSS Stylesheet

CSS 스타일을 별도의 파일에 작성하고 .css파일 확장자로 파일을 저장하고 애플리케이션에서 가져올 수 있습니다.

    앱.css:
    "App.css"라는 새 파일을 만들고 여기에 CSS 코드를 삽입합니다.

    body {
      background-color: #282c34;
      color: white;
      padding: 40px;
      font-family: Sans-Serif;
      text-align: center;
    }

참고: 파일을 원하는 대로 호출할 수 있습니다. 올바른 파일 확장명만 기억하면 됩니다.

애플리케이션에서 스타일시트를 가져옵니다.

    index.js:
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './App.css';

    const Header = () => {
      return (
        <>
          <h1>Hello Style!</h1>
          <p>Add a little style!.</p>
        </>
      );
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

---

### CSS Modules

애플리케이션에 스타일을 추가하는 또 다른 방법은 CSS 모듈을 사용하는 것입니다.

CSS 모듈은 별도의 파일에 배치된 구성 요소에 편리합니다.

모듈 내부의 CSS는 그것을 가져온 컴포넌트에 대해서만 사용 가능하며 이름 충돌에 대해 걱정할 필요가 없습니다.

.module.css 확장자를 사용 하여 CSS 모듈을 만듭니다( 예: my-style.module.css.

"my-style.module.css"라는 새 파일을 만들고 여기에 CSS 코드를 삽입합니다.

    my-style.module.css:
    .bigblue {
      color: DodgerBlue;
      padding: 40px;
      font-family: Sans-Serif;
      text-align: center;
    }

구성 요소에서 스타일시트를 가져옵니다.

    자동차.js:
    import styles from './my-style.module.css';

    const Car = () => {
      return <h1 className={styles.bigblue}>Hello Car!</h1>;
    }

    export default Car;

애플리케이션에서 구성 요소를 가져옵니다.

    index.js:
    import ReactDOM from 'react-dom';
    import Car from './Car.js';

    ReactDOM.render(<Car />, document.getElementById('root'));
