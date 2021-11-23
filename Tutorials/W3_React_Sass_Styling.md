## Styling React Using Sass

---

### What is Sass

Sass는 CSS 전처리기입니다.

Sass 파일은 서버에서 실행되고 CSS를 브라우저로 보냅니다.

---

### how can i use Sass?

create-react-app프로젝트에서 사용하면 React 프로젝트에서 Sass를 쉽게 설치하고 사용할 수 있습니다.

터미널에서 다음 명령을 실행하여 Sass를 설치합니다.

    npm i sass

이제 프로젝트에 Sass 파일을 포함할 준비가 되었습니다!

---

### Sass 파일 생성

CSS 파일을 생성하는 것과 같은 방식으로 Sass 파일을 생성하지만 Sass 파일에는 파일 확장자가 있습니다. .scss

Sass 파일에서 변수 및 기타 Sass 함수를 사용할 수 있습니다.

    my-sass.scss:
    텍스트의 색상을 정의하는 변수를 만듭니다.

    $myColor: red;

    h1 {
      color: $myColor;
    }

CSS 파일을 가져온 것과 같은 방식으로 Sass 파일을 가져옵니다.

    index.js:
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './my-sass.scss';

    const Header = () => {
      return (
        <>
          <h1>Hello Style!</h1>
          <p>Add a little style!.</p>
        </>
      );
    }

    ReactDOM.render(<Header />, document.getElementById('root'));
