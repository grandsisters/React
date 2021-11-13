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
