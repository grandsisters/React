## React ES6 Spread Operator

---

### 스프레드 연산자

JavaScript 스프레드 연산자( ...)를 사용하면 기존 배열이나 객체의 전체 또는 일부를 다른 배열이나 객체로 빠르게 복사할 수 있습니다.

    예시
    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const numbersCombined = [...numbersOne, ...numbersTwo];

스프레드 연산자는 종종 구조 분해와 함께 사용됩니다.

    예시
    numbers변수에 첫 번째와 두 번째 항목을 할당하고 나머지는 배열에 넣습니다.

    const numbers = [1, 2, 3, 4, 5, 6];

    const [one, two, ...rest] = numbers;

객체와 함께 스프레드 연산자를 사용할 수도 있습니다.

    예시
    다음 두 개체를 결합합니다.

    const myVehicle = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red'
    }

    const updateMyVehicle = {
      type: 'car',
      year: 2021,
      color: 'yellow'
    }

    const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

일치하지 않는 속성은 결합되었지만 일치하는 속성 , color은 전달된 마지막 개체 updateMyVehicle에 의해 덮어쓰여졌습니다 . 그 결과 색상은 이제 노란색입니다.
