## React Lists

React에서는 일종의 루프를 사용하여 목록을 렌더링합니다.

JavaScript map()배열 방법이 일반적으로 선호되는 방법입니다.

    예시:
    차고에 있는 모든 자동차를 렌더링해 보겠습니다.

    function Car(props) {
      return <li>I am a { props.brand }</li>;
    }

    function Garage() {
      const cars = ['Ford', 'BMW', 'Audi'];
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <ul>
            {cars.map((car) => <Car brand={car} />)}
          </ul>
        </>
      );
    }

    ReactDOM.render(<Garage />, document.getElementById('root'));

create-react-app에서 이 코드를 실행 하면 작동하지만 목록 항목에 대해 제공된 "키"가 없다는 경고를 받게 됩니다.

---

### key

키를 사용하면 React가 요소를 추적할 수 있습니다. 이렇게 하면 항목이 업데이트되거나 제거되면 전체 목록 대신 해당 항목만 다시 렌더링됩니다.

키는 각 형제에 고유해야 하지만 전역적으로 복제할 수 있습니다.

일반적으로 키는 각 항목에 할당된 고유 ID여야 합니다.

최후의 수단으로 배열 인덱스를 키로 사용할 수 있습니다.

    예시:
    키를 포함하도록 이전 예제를 리팩토링해 보겠습니다.

    function Car(props) {
      return <li>I am a { props.brand }</li>;
    }

    function Garage() {
      const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <ul>
            {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
          </ul>
        </>
      );
    }

    ReactDOM.render(<Garage />, document.getElementById('root'));
