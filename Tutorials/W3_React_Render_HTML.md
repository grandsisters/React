## React Render HTML

React의 목표는 여러 가지 방법으로 웹 페이지에서 HTML을 렌더링하는 것입니다.

React는 ReactDOM.render()라는 함수를 사용하여 HTML을 웹 페이지에 렌더링합니다 .

---

### 렌더링 기능

이 ReactDOM.render()함수는 HTML 코드와 HTML 요소라는 두 개의 인수를 사용합니다.

함수의 목적은 지정된 HTML 요소 내부에 지정된 HTML 코드를 표시하는 것입니다.

그러나 어디에서 렌더링합니까?

React 프로젝트의 루트 디렉토리에는 "public"이라는 또 다른 폴더가 있습니다.

이 폴더에는 index.html파일이 있습니다.

\<div> 이 파일의 본문에서 단일 항목 을 확인할 수 있습니다.

여기에서 React 애플리케이션이 렌더링됩니다.

    예시
    ID가 "root"인 요소 내부에 단락을 표시합니다.

    ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
    결과는 <div id="root">요소에 표시됩니다 .

    <body>
      <div id="root"></div>
    </body>

요소 ID를 "루트"라고 부를 필요는 없지만 이것이 표준 규칙입니다.

---

### HTML 코드

이 자습서의 HTML 코드는 JavaScript 코드 내부에 HTML 태그를 작성할 수 있는 JSX를 사용합니다.

구문이 익숙하지 않더라도 걱정하지 마십시오. 다음 장에서 JSX에 대해 자세히 배울 것입니다.

    예시
    HTML 코드가 포함된 변수를 만들고 "루트" 노드에 표시합니다.

    const myelement = (
      <table>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>John</td>
        </tr>
        <tr>
          <td>Elsa</td>
        </tr>
      </table>
    );

    ReactDOM.render(myelement, document.getElementById('root'));

---

### 루트 노드

루트 노드는 결과를 표시하려는 HTML 요소입니다.

React에서 관리하는 콘텐츠의 컨테이너와 같습니다 .

그것은 id='root' 할 필요가 없습니다 그리고 그것은 \<div>요소여야 할 필요도 없습니다:

    예시
    루트 노드는 원하는 대로 호출할 수 있습니다.

    <body>

      <header id="sandy"></header>

    </body>
    <header id="sandy">요소에 결과를 표시합니다 .

    ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));
