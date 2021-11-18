## React Class Components

---

### Lifecycle of Components

React의 각 구성 요소는 세 가지 주요 단계에서 모니터링하고 조작할 수 있는 라이프사이클이 있습니다.

세 단계는 마운트, 업데이트 및 마운트 해제입니다.

---

### Mounting

장착이란 요소를 DOM에 넣는 것을 의미합니다.

Responent에는 구성 요소를 장착할 때 순서대로 호출되는 네 가지 기본 제공 메서드가 있습니다.

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

render() 메서드는 필수이며 항상 호출되며, 나머지는 선택 사항이며 정의할 경우 호출됩니다.
