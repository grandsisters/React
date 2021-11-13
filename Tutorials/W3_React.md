## React Tutorial

React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.

React는 단일 페이지 애플리케이션을 빌드하는 데 사용됩니다.

React를 사용하면 재사용 가능한 UI 구성 요소를 만들 수 있습니다.

---

### 사례를 통한 학습

"Show React" Tool을 사용하면 React를 쉽게 시연할 수 있습니다. 코드와 결과를 모두 보여줍니다.

    예시:
    import React from 'react';
    import ReactDOM from 'react-dom';

    function Hello(props) {
      return <h1>Hello World!</h1>;
    }

    ReactDOM.render(<Hello />, document.getElementById('root'));

---

### React 앱 만들기

React를 배우고 테스트하려면 컴퓨터에 React 환경을 설정해야 합니다.

이 튜토리얼에서는 create-react-app.

이 create-react-app도구는 공식적으로 지원되는 React 애플리케이션 생성 방법입니다.

Node.js 를 사용하려면 create-react-app.

애플리케이션을 생성하려는 디렉토리에서 터미널을 엽니다.

이 my-react-app 명령을 실행하여 다음과 같은 React 애플리케이션을 생성합니다.

    npx create-react-app my-react-app

create-react-app은 React 애플리케이션을 실행하는 데 필요한 모든 것을 설정합니다.

참고: 이전에 create-react-app전역으로 설치한 경우 npx가 항상 최신 버전의 create-react-app.

제거하려면 다음 명령을 실행하십시오 .

    npm uninstall -g create-react-app

---

### React 애플리케이션 실행

다음 명령을 실행하여 my-react-app디렉터리 로 이동합니다 .

    cd my-react-app

다음 명령을 실행하여 React 애플리케이션을 실행합니다.

    npm start

새로 만든 React 앱과 함께 새 브라우저 창이 나타납니다! 그렇지 않은 경우 브라우저를 열고 localhost:3000주소 표시줄에 입력하십시오 .
