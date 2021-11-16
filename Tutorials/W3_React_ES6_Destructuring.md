## React ES6 Destructuring

---

### 구조화

Destructuring을 설명하기 위해 샌드위치를 ​​만들겠습니다. 샌드위치를 ​​만들기 위해 냉장고에서 모든 것을 꺼내나요? 아니요, 샌드위치에 사용하고 싶은 재료만 꺼냅니다.

Destructuring은 그것과 정확히 동일합니다. 작업하는 배열이나 개체가 있을 수 있지만 여기에 포함된 항목 중 일부만 필요합니다.

Destructuring을 사용하면 필요한 것만 추출하기 쉽습니다.

---

### 배열 파괴하기

다음은 배열 항목을 변수에 할당하는 이전 방법입니다.

    이전에는:
    const vehicles = ['mustang', 'f-150', 'expedition'];

    // old way
    const car = vehicles[0];
    const truck = vehicles[1];
    const suv = vehicles[2];

다음은 배열 항목을 변수에 할당하는 새로운 방법입니다.

    구조화로:

    const vehicles = ['mustang', 'f-150', 'expedition'];

    const [car, truck, suv] = vehicles;

배열을 구조화할 때 변수가 선언되는 순서가 중요합니다.

자동차와 suv만 원하는 경우 트럭은 생략하고 쉼표는 유지하면 됩니다.

    const vehicles = ['mustang', 'f-150', 'expedition'];

    const [car,, suv] = vehicles;

구조화는 함수가 배열을 반환할 때 유용합니다.

    예시
    function calculate(a, b) {
      const add = a + b;
      const subtract = a - b;
      const multiply = a * b;
      const divide = a / b;

      return [add, subtract, multiply, divide];
    }

    const [add, subtract, multiply, divide] = calculate(4, 7);

---

### 객체 분해

다음은 함수 내에서 객체를 사용하는 오래된 방법입니다.

    이전에는:
    const vehicleOne = {
      brand: 'Ford',
      model: 'Mustang',
      type: 'car',
      year: 2021,
      color: 'red'
    }

    myVehicle(vehicleOne);

    // old way
    function myVehicle(vehicle) {
      const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
    }

다음은 함수 내에서 객체를 사용하는 새로운 방법입니다.

    구조화로:
    const vehicleOne = {
      brand: 'Ford',
      model: 'Mustang',
      type: 'car',
      year: 2021,
      color: 'red'
    }

    myVehicle(vehicleOne);

    function myVehicle({type, color, brand, model}) {
      const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    }

개체 속성을 특정 순서로 선언할 필요는 없습니다.

중첩된 객체를 참조한 다음 콜론과 중괄호를 사용하여 중첩된 객체에서 필요한 항목을 다시 구조화하여 깊이 중첩된 객체를 구조 해제할 수도 있습니다.

    예시
    const vehicleOne = {
      brand: 'Ford',
      model: 'Mustang',
      type: 'car',
      year: 2021,
      color: 'red',
      registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
      }
    }

    myVehicle(vehicleOne)

    function myVehicle({ model, registration: { state } }) {
      const message = 'My ' + model + ' is registered in ' + state + '.';
    }
