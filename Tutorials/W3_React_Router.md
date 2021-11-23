## React Router

React 앱 만들기에는 페이지 라우팅이 포함되지 않습니다.

React Router는 가장 인기 있는 솔루션입니다.

---

### React 라우터 추가

애플리케이션에 React Router를 추가하려면 애플리케이션의 루트 디렉토리에 있는 터미널에서 다음을 실행하세요.

    npm i -D react-router-dom

---

### 폴더 구조

여러 페이지 경로가 있는 응용 프로그램을 만들려면 먼저 파일 구조부터 시작하겠습니다.

src폴더 내에서 pages여러 파일로 이름이 지정된 폴더를 만듭니다 .

    src\pages\:

    Home.js
    Blogs.js
    Contact.js

각 파일에는 매우 기본적인 React 구성 요소가 포함됩니다.

    Home.js:

    const Home = () => {
      return <h1>Home</h1>;
    };

    export default Home;

<br />

    Blogs.js:

    const Blogs = () => {
      return <h1>Blog Articles</h1>;
    };

    export default Blogs;

<br />

    Contact.js:

    const Contact = () => {
      return <h1>Contact Me</h1>;
    };

    export default Contact;

---

### 기본 사용법

이제 index.js파일 에서 라우터를 사용할 것 입니다.

    예시
    React Router를 사용하여 URL 기반 페이지로 라우팅:

    index.js:

    import ReactDOM from "react-dom";
    import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
    import Home from "./pages/Home";
    import Blogs from "./pages/Blogs";
    import Contact from "./pages/Contact";

    export default function App() {
      return (
        <Router>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/blogs">Blog Articles</Link>
          </div>
          <div>
            <Link to="/contact">Contact Me</Link>
          </div>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      );
    }

    ReactDOM.render(<App />, document.getElementById("root"));

예시 설명

    우리는 콘텐츠를 먼저 <Router>로 감싼다.

    <Link>는 URL을 설정하고 인터넷 사용 기록을 추적하는 데 사용됩니다.

    내부 경로에 연결할 때마다 <a href="">대신 <Link>을 사용 합니다.

    <Switch>는 JavaScript switch문과 유사 합니다.

    그것은 조건부로 <Link> 경로와 일치하는 <Route>를 렌더링한다.
