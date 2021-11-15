## React ES6 Array Methods

---

### 배열 메서드

많은 JavaScript 배열 메서드가 있습니다.

React에서 가장 유용한 것 중 하나는 .map() array 메소드입니다.

이 .map()방법을 사용하면 배열의 각 항목에 대해 함수를 실행하여 결과로 새 배열을 반환할 수 있습니다.

React에서 map()목록을 생성하는 데 사용할 수 있습니다.

    예시
    배열에서 항목 목록 생성:

    const myArray = ['apple', 'banana', 'orange'];

    const myList = myArray.map((item) => <p>{item}</p>)
