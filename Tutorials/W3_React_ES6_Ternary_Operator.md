## React ES6 Ternary Operator

---

### 삼항 연산자

삼항 연산자는 if/ 와 같은 단순화된 조건 연산자 else입니다.

    syntax:
    condition ? <expression if true> : <expression if false>

다음은 if/else 를 사용하는 예입니다 .

    이전에는:
    if (authenticated) {
    renderApp();
    } else {
    renderLogin();
    }

다음은 삼항 연산자를 사용하는 동일한 예입니다.

    삼항연산자로
    authenticated ? renderApp() : renderLogin();
