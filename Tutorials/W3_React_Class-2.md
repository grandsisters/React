## React Class Components

---

### Lifecycle of Components

React의 각 구성 요소는 세 가지 주요 단계에서 모니터링하고 조작할 수 있는 라이프사이클이 있습니다.

세 단계는 마운트, 업데이트 및 마운트 해제입니다.

---

## Mounting

장착이란 요소를 DOM에 넣는 것을 의미합니다.

Responent에는 구성 요소를 장착할 때 순서대로 호출되는 네 가지 기본 제공 메서드가 있습니다.

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

render() 메서드는 필수이며 항상 호출되며, 나머지는 선택 사항이며 정의할 경우 호출됩니다.

---

### 생성자

생성자() 메소드는 구성 요소가 시작될 때 무엇보다도 먼저 호출되며, 초기 상태와 다른 초기 값을 설정하는 자연스러운 위치이다.

생성자() 메소드는 소품과 함께 인수로 호출되며, 항상 다른 무엇보다도 먼저 수퍼(props)를 호출하는 것으로 시작해야 합니다.

그러면 부모 생성자의 메소드가 시작되고 구성 요소가 부모로부터 메소드를 상속할 수 있습니다(React).구성 요소)

    예시
    생성자 메소드는 구성 요소를 만들 때마다 React에 의해 호출됩니다.

    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      render() {
        return (
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

---

### getDerivedStateFromProps

DOM에서 요소를 렌더링하기 직전에 getDerivatedStateFromProps() 메서드가 호출됩니다.

이곳은 초기 소품들을 바탕으로 상태 객체를 설정하는 자연스러운 장소입니다.

이것은 상태를 인수로 사용하고 상태에 대한 변경사항이 있는 객체를 반환합니다.

아래 예제는 즐겨찾는 색이 "빨간색"으로 시작하지만 getDerivatedStateFromProps() 메소드는 favcol 속성에 따라 즐겨찾는 색상을 업데이트합니다.

    예시
    get DerivatedStateFromProps 메서드가 렌더 메서드 바로 앞에 호출됩니다.

    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
      }
      render() {
        return (
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
      }
    }

    ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));

---

### render

render() 메서드가 필요하며, HTML을 실제로 DOM으로 출력하는 메서드입니다.

    예시
    단순 render() 방법을 사용하는 단순 구성요소:

    class Header extends React.Component {
      render() {
        return (
          <h1>This is the content of the Header component</h1>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

---

### componentDidMount

componentDidMount() 메서드는 컴포넌트가 렌더링 되고난 후에 호출된다.

이것은 DOM에서 이미 실행중인 컴포넌트를 필요로 하는 문을 실행합니다.

    예제:

    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }
      render() {
        return (
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

---

## Updating

라이프사이클의 다음 단계에서는 구성 요소가 업데이트됩니다.

구성 요소의 상태 또는 속성이 변경될 때마다 구성 요소가 업데이트됩니다.

Responent에는 구성 요소가 업데이트될 때 순서대로 호출되는 5개의 기본 제공 메서드가 있습니다.

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

render() 메서드는 필수이며 항상 호출되며, 나머지는 선택 사항이며 정의할 경우 호출됩니다.

---

### getDerivedStateFromProps

또한 업데이트 시 getDerivatedStateFromProps 메서드가 호출됩니다. 이것은 구성 요소가 업데이트될 때 호출되는 첫 번째 메서드입니다.

이곳은 여전히 초기 소품들을 바탕으로 상태 오브제를 설정하는 자연스러운 장소이다.

아래 예에는 즐겨찾기 색상을 파란색으로 변경하는 버튼이 있지만, 상태를 favcol 특성의 색상으로 업데이트하는 getDerivatedStateFromProps() 메서드가 호출되기 때문에 즐겨찾는 색상은 여전히 노란색으로 렌더링됩니다.

    예제
    컴포넌트가 업데이트 되면, getDerivedStateFromProps() 메서드가 호출됩니다.

    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
      render() {
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type="button" onClick={this.changeColor}>Change color</button>
          </div>
        );
      }
    }

    ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));

---

### shouldComponentUpdate

shouldComponentUpdate() 메서드에서 대응이 렌더링을 계속할지 여부를 지정하는 부울 값을 반환할 수 있습니다.

기본값은 true입니다.

아래 예는 shouldComponentUpdate() 메서드가 false를 반환할 때 발생하는 작업을 보여줍니다.

    예제
    업데이트 시 컴포넌트 렌더링 중지:

    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      shouldComponentUpdate() {
        return false;
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
      render() {
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type="button" onClick={this.changeColor}>Change color</button>
          </div>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

<br />

    예제
    위와 동일한 예이지만 이번에는 shouldComponentUpdate() 메서드가 true를 반환합니다.

    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      shouldComponentUpdate() {
        return true;
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
      render() {
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type="button" onClick={this.changeColor}>Change color</button>
          </div>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

---

### render()

render() 메소드는 물론 컴포넌트가 업데이트되면 HTML을 DOM으로 다시 렌더링해야 하며 새로운 변경사항이 있습니다.

아래 예에는 즐겨찾는 색을 파란색으로 변경하는 버튼이 있습니다.

    예제
    컴포넌트 상태를 변경하려면 다음 버튼을 누르십시오.

    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
      render() {
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type="button" onClick={this.changeColor}>Change color</button>
          </div>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

---

### getSnapshotBeforeUpdate

getSnapshotBeforeUpdate() 메서드에서 업데이트 전에, 업데이트 후에도 값을 업데이트 이전에 자신들이 있는지 확인할 수 있음을 의미하는 props에 대한 접근성과 state입니다.

만약 getSnapshotBeforeUpdate() 메서드가 존재하면 또한 componentDidUpdate()메서드, 그렇지 않으면 오류가 표시될 것을 포함해야 한다.

아래의 예는 복잡해 보일 수 있지만, 그 역할은 다음과 같습니다.

컴포넌트가 마운트될 때 선호하는 색상 "빨간색"으로 렌더링됩니다.

컴포넌트가 장착되면 타이머가 상태를 바꾸고 1초 후 favoriteColor가 "노란색"이 된다.

이 작업은 업데이트 단계를 트리거하며 이 구성 요소에 getSnapshotBeforeUpdate() 메서드가 있으므로 이 메서드가 실행되고 빈 DIV1 요소에 메시지를 씁니다.

그런 다음 ComponentDidUpdate() 메서드가 실행되어 빈 DIV2 요소에 메시지를 씁니다.

    예제
    업데이트 전 상태 개체의 모양을 확인하려면 getSnapshotBeforeUpdate() 방법을 사용하십시오.

    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
      }
      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
      render() {
        return (
          <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
          </div>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

---

### componentDidUpdate

componentDidUpdate 메서드는 DOM에서 component가 업데이트된 후 호출됩니다.

아래의 예는 복잡해 보일 수 있지만, 그 역할은 다음과 같습니다.

component가 마운트될 때 favoriteColor가 "빨간색"으로 렌더링됩니다.

component가 장착되면 타이머가 상태를 변경하고 favoriteColor가 "노란색"이 됩니다.

이 작업은 업데이트 단계를 트리거하며, 이 component에 componentDidUpdate 메서드가 있으므로 이 메서드가 실행되어 빈 DIV 요소에 메시지를 기록합니다.

    예제
    DOM에서 업데이트가 렌더링된 후 componentDidUpdate 메서드가 호출됩니다.

    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }
      componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
      render() {
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="mydiv"></div>
          </div>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

---

### Unmounting

라이프사이클의 다음 단계는 구성 요소가 DOM에서 제거되거나 React가 원하는 대로 마운트 해제되는 것입니다.

Responent에는 구성 요소가 마운트 해제될 때 호출되는 기본 제공 메서드가 하나뿐입니다.

    componentWillUnmount()

---

### componentWillUnmount

구성 요소를 DOM에서 제거하려고 할 때 componentWillUnmount 메서드가 호출됩니다.

    예제
    버튼을 클릭하여 머리글을 삭제합니다.

    class Container extends React.Component {
      constructor(props) {
        super(props);
        this.state = {show: true};
      }
      delHeader = () => {
        this.setState({show: false});
      }
      render() {
        let myheader;
        if (this.state.show) {
          myheader = <Child />;
        };
        return (
          <div>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete Header</button>
          </div>
        );
      }
    }

    class Child extends React.Component {
      componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }
      render() {
        return (
          <h1>Hello World!</h1>
        );
      }
    }

    ReactDOM.render(<Container />, document.getElementById('root'));
