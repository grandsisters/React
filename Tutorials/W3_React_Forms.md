## React Forms

HTML과 마찬가지로 React는 사용자가 웹 페이지와 상호 작용할 수 있도록 양식을 사용합니다.

---

### React에 Form 추가하기

다른 요소와 마찬가지로 React로 양식을 추가합니다.

    예시:
    사용자가 이름을 입력할 수 있는 양식을 추가합니다.

    function MyForm() {
      return (
        <form>
          <label>Enter your name:
            <input type="text" />
          </label>
        </form>
      )
    }
    ReactDOM.render(<MyForm />, document.getElementById('root'));

이것은 정상적으로 작동하고 양식이 제출되고 페이지가 새로 고쳐집니다.

그러나 이것은 일반적으로 React에서 우리가 원하는 것이 아닙니다.

우리는 이 기본 동작을 방지하고 React가 양식을 제어하도록 하고 싶습니다.

---

### Handling Forms

Handling Form는 데이터가 값을 변경하거나 제출될 때 데이터를 처리하는 방법에 관한 것입니다.

HTML에서 form 데이터는 일반적으로 DOM에 의해 처리됩니다.

React에서 form 데이터는 일반적으로 컴포넌트에 의해 처리됩니다.

컴포넌트에서 데이터를 처리할 때 모든 데이터는 컴포넌트 state에 저장됩니다.

onChange속성에 이벤트 핸들러를 추가하여 변경 사항을 제어할 수 있습니다 .

useStateHook을 사용하여 각 입력 값을 추적하고 전체 애플리케이션에 대한 "단일 정보 소스"를 제공할 수 있습니다.

Hooks에 대한 자세한 내용은 React Hooks 섹션을 참조하세요.

    예시:
    사용 onChange입력을 관리하기 위해 후크를 :

    import { useState } from "react";
    import ReactDOM from 'react-dom';

    function MyForm() {
      const [name, setName] = useState("");

      return (
        <form>
          <label>Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </form>
      )
    }

    ReactDOM.render(<MyForm />, document.getElementById('root'));

---

### 양식 제출

다음 onSubmit속성에 \<form>이벤트 핸들러를 추가하여 제출 작업을 제어할 수 있습니다 .

    예시:
    onSubmit속성 에 제출 버튼과 이벤트 핸들러를 추가 합니다.

    import { useState } from "react";
    import ReactDOM from 'react-dom';

    function MyForm() {
      const [name, setName] = useState("");

      const handleSubmit = (event) => {
        event.preventDefault();
        alert('The name you entered was: ${name}')
      }

      return (
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      )
    }

    ReactDOM.render(<MyForm />, document.getElementById('root'));

---

### 다중 입력 필드

name각 요소에 속성을 추가하여 둘 이상의 입력 필드 값을 제어할 수 있습니다 .

우리는 빈 객체로 상태를 초기화할 것입니다.

이벤트 핸들러의 필드에 액세스하려면 event.target.name및 event.target.value구문을 사용하십시오 .

상태를 업데이트하려면 속성 이름 주위에 대괄호[대괄호 표기법]를 사용합니다.

    예시:
    두 개의 입력 필드가 있는 양식 작성:

    import { useState } from "react";
    import ReactDOM from "react-dom";

    function MyForm() {
      const [inputs, setInputs] = useState({});

      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }

      return (
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
          </label>
          <label>Enter your age:
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
            </label>
            <input type="submit" />
        </form>
      )
    }

    ReactDOM.render(<MyForm />, document.getElementById('root'));

참고: 두 입력 필드에 대해 동일한 이벤트 핸들러 함수를 사용합니다. 각각에 대해 하나의 이벤트 핸들러를 작성할 수 있지만 이것은 훨씬 더 깔끔한 코드를 제공하고 React에서 선호하는 방식입니다.

---

### 텍스트 영역

React의 textarea 요소는 일반 HTML과 약간 다릅니다.

HTML에서 텍스트 영역의 값은 시작 태그 \<textarea> 와 종료 태그 사이의 텍스트였습니다 \</textarea>.

    <textarea>
      Content of the textarea.
    </textarea>

React에서 텍스트 영역의 값은 값 속성에 배치됩니다. useStateHook을 사용 하여 텍스트 영역의 값을 관리합니다.

    예시:
    일부 콘텐츠가 포함된 간단한 텍스트 영역:

    import { useState } from "react";
    import ReactDOM from "react-dom";

    function MyForm() {
      const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
      );

      const handleChange = (event) => {
        setTextarea(event.target.value)
      }

      return (
        <form>
          <textarea value={textarea} onChange={handleChange} />
        </form>
      )
    }

    ReactDOM.render(<MyForm />, document.getElementById('root'));

---

### Select

React의 드롭다운 목록 또는 선택 상자도 HTML과 약간 다릅니다.

HTML에서 드롭다운 목록에서 선택한 값은 다음 selected속성 으로 정의되었습니다 .

    HTML:
    <select>
      <option value="Ford">Ford</option>
      <option value="Volvo" selected>Volvo</option>
      <option value="Fiat">Fiat</option>
    </select>

React에서 선택한 값은 select태그 의 value 속성으로 정의됩니다 .

    예시:
    선택한 값 "Volvo"가 생성자에서 초기화되는 간단한 선택 상자:

    function MyForm() {
      const [myCar, setMyCar] = useState("Volvo");

      const handleChange = (event) => {
        setMyCar(event.target.value)
      }

      return (
        <form>
          <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
        </form>
      )
    }

\<textarea>및 에 이러한 약간의 변경을 가함으로써 \<select>React는 모든 입력 요소를 동일한 방식으로 처리할 수 있습니다.
