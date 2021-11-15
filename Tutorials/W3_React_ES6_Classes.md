## React ES6 Classes

---

### 클래스

ES6에는 클래스가 도입되었습니다.

클래스는 함수의 한 유형이지만 function이를 시작하기 위해 키워드 를 사용하는 대신 키워드 를 사용 class하고 속성은 constructor()메서드 내부에 할당됩니다 .

    예시
    간단한 클래스 생성자:

    class Car {
      constructor(name) {
        this.brand = name;
      }
    }

클래스 이름의 대소문자를 확인하십시오. 대문자로 "Car"라는 이름을 시작했습니다. 이것은 클래스에 대한 표준 명명 규칙입니다.

이제 Car 클래스를 사용하여 객체를 생성할 수 있습니다.

    예시
    Car 클래스를 기반으로 "mycar"라는 객체를 만듭니다.

    class Car {
      constructor(name) {
        this.brand = name;
      }
    }

    const mycar = new Car("Ford");

참고: 생성자 함수는 객체가 초기화될 때 자동으로 호출됩니다.

---

### 클래스의 메소드

클래스에 고유한 메서드를 추가할 수 있습니다.

    예시
    "present"라는 메서드를 만듭니다.

    class Car {
      constructor(name) {
        this.brand = name;
      }

      present() {
        return 'I have a ' + this.brand;
      }
    }

    const mycar = new Car("Ford");
    mycar.present();

위의 예에서 볼 수 있듯이 개체의 메서드 이름 다음에 괄호를 참조하여 메서드를 호출합니다(매개변수는 괄호 안에 들어갈 것입니다).

---

### 클래스 상속

클래스 상속을 생성하려면 extends 키워드를 사용하십시오 .

클래스 상속으로 생성된 클래스는 다른 클래스의 모든 메서드를 상속합니다.

    예시
    "Car" 클래스에서 메서드를 상속할 "Model"이라는 클래스를 만듭니다.

    class Car {
      constructor(name) {
        this.brand = name;
      }

      present() {
        return 'I have a ' + this.brand;
      }
    }

    class Model extends Car {
      constructor(name, mod) {
        super(name);
        this.model = mod;
      }
      show() {
          return this.present() + ', it is a ' + this.model
      }
    }
    const mycar = new Model("Ford", "Mustang");
    mycar.show();

super()방법은 부모 클래스를 의미합니다.

호출하여 super()생성자 메서드에 메서드를, 우리는 부모의 생성자 메서드를 호출하고 부모의 메서드와 속성에 대한 액세스를 얻을 수 있습니다.
