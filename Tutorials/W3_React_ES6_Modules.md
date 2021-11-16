## React ES6 Modules

---

### 모듈

JavaScript 모듈을 사용하면 코드를 별도의 파일로 나눌 수 있습니다.

이렇게 하면 코드 기반을 더 쉽게 유지 관리할 수 있습니다.

ES 모듈은 import 와 export문 에 의존 합니다.

---

### Export

모든 파일에서 함수 또는 변수를 내보낼 수 있습니다.

라는 이름의 파일을 만들고 person.js내보내고자 하는 내용으로 채우도록 합시다 .

내보내기에는 Named 및 Default의 두 가지 유형이 있습니다.

---

### Named Export

명명된 내보내기를 두 가지 방법으로 만들 수 있습니다. 개별적으로 인라인 또는 하단에 한 번에 모두.

    개별 인라인:
    person.js

    export const name = "Jesse"
    export const age = "40"

<br />

    한 번에 하단에:
    person.js

    const name = "Jesse"
    const age = "40"

    export { name, age }

---

### Default Export

이름이 message.js인 다른 파일을 만들고 기본 내보내기를 시연하는 데 사용하겠습니다.

파일에는 기본 내보내기가 하나만 있을 수 있습니다.

    예시
    message.js

    const message = () => {
    const name = "Jesse";
    const age = "40";
    return name + ' is ' + age + 'years old.';
    };

    export default message;

---

### Import

이름이 내보내기인지 기본 내보내기인지에 따라 두 가지 방법으로 모듈을 파일로 가져올 수 있습니다.

명명된 내보내기는 중괄호를 사용하여 구조를 해제해야 합니다. 기본 내보내기는 그렇지 않습니다.

명명된 내보내기에서 가져오기

    person.js 파일에서 명명된 내보내기 가져오기:

    import { name, age } from "./person.js";

기본 내보내기에서 가져오기

message.js 파일에서 기본 내보내기를 가져옵니다.

    import message from "./message.js";
