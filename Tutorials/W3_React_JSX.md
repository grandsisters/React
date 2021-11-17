## React JSX

---

### What is JSX?

JSX는 JavaScript XML을 의미합니다.

JSX를 사용하면 React에서 HTML을 작성할 수 있습니다.

JSX를 사용하면 React에서 HTML을 더 쉽게 작성하고 추가할 수 있습니다.

---

### JSX 코딩

JSX를 사용하면 JavaScript로 HTML 요소를 작성하고 어떤 createElement() 및/또는 appendChild()메소드 없이 DOM에 배치할 수 있습니다.

JSX는 HTML 태그를 반응 요소로 변환합니다.

JSX를 사용할 필요는 없지만 JSX를 사용하면 React 애플리케이션을 더 쉽게 작성할 수 있습니다.

다음은 두 가지 예입니다. 첫 번째는 JSX를 사용하고 두 번째는 다음을 사용하지 않습니다.

    실시예 1
    JSX:

    const myelement = <h1>I Love JSX!</h1>;

    ReactDOM.render(myelement, document.getElementById('root'));

<br />

    실시예 2
    JSX 없이:

    const myelement = React.createElement('h1', {}, 'I do not use JSX!');

    ReactDOM.render(myelement, document.getElementById('root'));

첫 번째 예에서 볼 수 있듯이 JSX를 사용하면 JavaScript 코드 내에서 직접 HTML을 작성할 수 있습니다.

JSX는 ES6 기반 JavaScript 언어의 확장이며 런타임 시 일반 JavaScript로 변환됩니다.

---

### JSX의 표현식

JSX를 사용하면 { } 중괄호 안에 표현식을 작성할 수 있습니다 .

표현식은 React 변수, 속성 또는 기타 유효한 JavaScript 표현식일 수 있습니다. JSX는 표현식을 실행하고 결과를 반환합니다.

    예시
    표현식을 실행합니다 5 + 5.

    const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

---

### Inserting a Large Block of HTML

여러 줄에 HTML을 작성하려면 HTML을 괄호 안에 넣으십시오.

    예시
    세 가지 목록 항목으로 목록을 만듭니다.

    const myelement = (
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>
    );

---

### 하나의 최상위 요소

HTML 코드는 하나의 최상위 요소 로 래핑되어야 합니다 .

따라서 두 개의 단락 을 작성 하려면 요소와 같이 상위 요소 안에 두 단락을 넣어야 합니다 div.

    예시
    하나의 DIV 요소 안에 두 개의 단락을 감쌉니다.

    const myelement = (
      <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
      </div>
    );

HTML이 올바르지 않거나 HTML이 상위 요소를 놓치면 JSX에서 오류가 발생합니다.

또는 "조각"을 사용하여 여러 줄을 줄 바꿈할 수 있습니다. 이것은 불필요한 추가 노드를 DOM에 추가하는 것을 방지합니다.

조각은 빈 HTML 태그처럼 보입니다: <></>.

    예시
    조각 내에서 두 단락을 래핑합니다.

    const myelement = (
      <>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
      </>
    );

---

### 요소를 닫아야 합니다.

JSX는 XML 규칙을 따르므로 HTML 요소를 제대로 닫아야 합니다.

    예시
    다음으로 빈 요소 닫기 />

    const myelement = <input type="text" />;

HTML이 제대로 닫히지 않으면 JSX에서 오류가 발생합니다.

---

### 속성 클래스 = className

class속성은 HTML에서 많이 사용되는 속성이지만, JSX는 자바 스크립트로 렌더링하고 있기 때문에 class키워드가 자바 스크립트에서 예약어, 당신은 JSX에서 사용할 수 없습니다.

className대신 속성 을 사용하십시오 .

JSX는 이 문제를 className대신 사용하여 해결했습니다 . JSX가 렌더링되면 className 속성을 class속성으로 변환 합니다.

    예시
    JSX className대신 속성 사용 class:

    const myelement = <h1 className="myclass">Hello World</h1>;

---

### 조건 - if 문

React는 if명령문을 지원 하지만 JSX 내부 에서는 지원 하지 않습니다 .

JSX에서 조건문을 사용하려면 JSX if 외부에 명령문을 넣거나 대신 삼항 표현식을 사용할 수 있습니다.

옵션 1:
ifJSX 코드 외부에 명령문을 작성 하십시오.

    예시
    x10보다 작으면 "Hello"를 쓰고 , 그렇지 않으면 "Goodbye"를 쓰세요 .

    const x = 5;
    let text = "Goodbye";
    if (x < 10) {
      text = "Hello";
    }

    const myelement = <h1>{text}</h1>;

옵션 2:
대신 삼항 표현식을 사용하십시오.

    예시
    x10보다 작으면 "Hello"를 쓰고 , 그렇지 않으면 "Goodbye"를 쓰세요 .

    const x = 5;

    const myelement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

참고 JSX 내부 JavaScript 표현식을 포함하기 위해, 자바 스크립트는 중괄호로 포장되어야합니다 {}.
