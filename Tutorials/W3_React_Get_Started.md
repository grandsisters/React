## React Getting Started

프로덕션에서 React를 사용하려면 Node.js에 포함된 npm이 필요합니다 .

React가 무엇인지에 대한 개요를 보려면 HTML에서 직접 React 코드를 작성할 수 있습니다.

그러나 프로덕션에서 React를 사용하려면 npm과 Node.js가 설치되어 있어야 합니다.

---

### HTML에서 직접 반응

React 학습을 시작하는 가장 빠른 방법은 HTML 파일에 React를 직접 작성하는 것입니다.

세 개의 스크립트를 포함하는 것으로 시작합니다. 처음 두 개는 JavaScript에서 React 코드를 작성하게 하고 세 번째 Babel은 JSX 구문과 이전 브라우저에서 ES6을 작성할 수 있게 해줍니다.

    예시
    HTML 파일에 3개의 CDN을 포함합니다.

    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      </head>
      <body>

        <div id="mydiv"></div>

        <script type="text/babel">
          function Hello() {
            return <h1>Hello World!</h1>;
          }

          ReactDOM.render(<Hello />, document.getElementById('mydiv'))
        </script>

      </body>
    </html>

---

### React 환경 설정

npx와 Node.js가 설치되어 있다면 create-react-app.

이전에 create-react-app을 전체적으로 설치한 경우 패키지를 제거하여 npx가 항상 최신 버전의 create-react-app을 사용하도록 하는 것이 좋습니다.

제거하려면 다음 명령을 실행합니다. npm uninstall -g create-react-app.

이 my-react-app 명령을 실행하여 다음과 같은 React 애플리케이션을 생성합니다.

    npx create-react-app my-react-app

create-react-app는 당신이 응용 프로그램 React을 실행하는 데 필요한 모든 기능을 설정합니다.

---

### React 애플리케이션 수정

여기까지는 좋은데 내용을 어떻게 바꾸나요?

my-react-app디렉토리를 살펴보면 src폴더 를 찾을 수 있습니다. src폴더 안에 라는 파일이 있습니다. 파일을 App.js열면 다음과 같습니다.

    /myReactApp/src/App.js:

    import logo from './logo.svg';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }

    export default App;

HTML 내용을 변경하고 파일을 저장하십시오.

    파일을 저장한 직후 변경 사항이 표시되므로 브라우저를 다시 로드할 필요가 없습니다.

<br />

    예시
    내부의 모든 컨텐츠 교체 <div className="App">A의 <h1>요소를.

    저장을 클릭하면 브라우저에서 변경 사항을 확인하십시오.

    function App() {
      return (
        <div className="App">
          <h1>Hello World!</h1>
        </div>
      );
    }

    export default App;

<br />

    필요하지 않은 가져오기(logo.svg 및 App.css)를 제거했습니다.

---

### What's Next?

이제 컴퓨터에 React 환경이 있고 React에 대해 더 배울 준비가 되었습니다.

이 튜토리얼의 나머지 부분에서는 "Show React" 도구를 사용하여 React의 다양한 측면과 브라우저에 표시되는 방식을 설명합니다.

컴퓨터에서 동일한 단계를 수행하려면 src폴더를 제거하여 하나의 파일만 포함하도록 시작 합니다.

또한 index.js 파일 내의 불필요한 코드 줄을 제거하여 아래 "Show React" 도구의 예와 같이 보이게 해야 합니다.

    예시
    결과를 보려면 "예제 실행" 버튼을 클릭하십시오.

    index.js:

    import React from 'react';
    import ReactDOM from 'react-dom';

    const myfirstelement = <h1>Hello React!</h1>

    ReactDOM.render(myfirstelement, document.getElementById('root'));
