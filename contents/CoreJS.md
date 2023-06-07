---
date: '2022-12-29'
title: '코어자바스크립트'
categories: ['JS']
summary: '책 코어자바스크립트를 읽고'
thumbnail: './coreJS.png'
---
> 책 코어자바스크립트를 읽고 간단하게 정리한 글입니다.

### Primitive type (기본타입 혹은 원시타입)
- Number
- String
- Boolean
- null
- undefined
- Symbol
### Reference type (객체타입 혹은 참조타입)
- Array
- Function
- Date
- Object
- RegExp
- Map, WeakMap
- Set, WeakSet
기본형은 값이 담긴 주소값을 바로 복제.
참조형은 값이 담긴 주소값들로 이루어진 묶음을 가리키는 주소값을 복제한다.
모든 데이터는 바이트 단위의 식별자, 더 정확하게는 메모리 주소값을 통해 서로 구분하고 연결할 수 있다.
### 변수와 식별자의 차이
변수는 변할 수 있는 데이터
식별자는 데이터를 식별하는 데 사용하는 이름, 변수명
### 데이터 할당
```js
const a = 'abc'
```
a라는 이름의 주소를 검색해서 그곳에 문자열 ‘abc’를 할당할 것 같지만 해당 위치에 문자열을 직접 저장하지 않고 데이터를 저장하기 위한 별도의 메모리 공간을 다시 확보해서 문자열 ‘abc’를 저장하고, 그 주소를 변수영역에 저장하는 식으로 이루어진다. 이는 데이터 변환을 자유롭게 할 수 있게 함과 동시에 메모리를 더욱 효율적으로 관리하기 위함. 변수 영역과 데이터 영역을 분리하면 중복된 데이터에 대한 처리 효율이 높아짐.
### 불변값
기본타입 데이터는 모두 불변값이다. 한 번 만든 값은 바꿀 수 없고 변경은 새로 만드는 동작을 통해서만 이루어지며 가비지 컬렉팅을 하지 않는 한 변하지 않으며 이것이 불변값의 성질이다.
### 가변값
객체의 변수(프로퍼티) 영역이 별도로 존재한다. 객체가 별도로 할애한 영역은 변수 영역일 뿐 데이터 영역은 기존의 메모리 공간을 그대로 활용한다. 데이터 영역에 저장된 값은 모두 불변값이지만 변수에는 다른 값을 얼마든지 대입할 수 있다.
### 가비지컬렉터
런타임 환경에 따라 특정 시점이나 메모리 사용량이 포화 상태에 임박할 때마다 자동으로 수거 대상들을 수거하며 수거된 메모리는 다시 빈 공간이 된다.
### 기본형과 참조형의 차이
어떤 데이터 타입이든 변수에 할당하기 위해서는 주소값을 복사해야 하기 때문에 엄밀히 따지면 자바스크립트의 모든 데이터 타입은 참조형 데이터일 수밖에 없고 다만 기본형은 주소값을 복사하는 과정이 한 번만 이뤄지고 참조형은 한 단계를 더 거치게 된다.
참조형 데이터가 가변값이라고 설명할 때의 가변은 참조형 데이터 자체를 변경할 경우가 아닌 그 내부의 프로퍼티를 변경할 때만 성립힌다. (데이터 자체를 변경하고자 하면 기본 데이터는 변하지 않는다)
### 불변 객체 (immutable object)
내부 프로퍼티를 변경할 필요가 있을 때마다 매번 새로운 객체를 만들어 재할당하기로 규칙을 정하거나 자동으로 새로운 객체를 만드는 도구를 활용한다면 객체 역시 불변성을 확보할 수 있다.
### 얕은복사 깊은복사
얕은복사는 바로 아래 단계의 값만 복사하는 방법이고 깊은 복사는 내부의 모든 값들을 전부 복사하는 방법
객체를 복사하고자 할 때 객체 내부의 모든 값을 복사해서 완전히 새로운 데이터를 만드려면, 객체의 프로퍼티 중에서 기본형 데이터는 그대로 복사, 참조형 데이터는 다시 내부의 프로퍼티들을 복사해야 한다.
> 값을 대입하지 않은 변수, 즉 데이터 영역의 메모리 주소를 지정하지 않은 식별자에는 자바스크립트가 직접 undefined를 할당한다. var 변수는 L.E가 활성화 될 때 생성되면서 동시에 undefined로 초기화된다. let과 const는 undefined를 할당하지 않은 채로 초기화를 마치며, 이후 특정 값을 할당하기 전까지는 해당 변수에 접근할 수 없다. let과 const 변수는 L.E가 활성화될 때 생성되지만 실제 변수가 평가되기 전까지는 접근할 수 없다.
### 실행컨텍스트
실행할 코드에 제공할 환경 정보들을 모아놓은 객체. 전역 공간에서 자동으로 생성되는 전역 컨텍스트와 eval 및 함수 실행에 의한 컨텍스트 등이 있다. 실행 컨텍스트 객체는 활성화 되는 시점에 VariableEnvironment, LexicalEnvironment, ThisBinding의 세 가지 정보를 수집한다.
동일한 환경에 있는 코드들을 실행할 때 필요한 환경 정보들을 모아 컨텍스트를 구성하고, 이를 콜 스택에 쌓아올렸다가, 가장 위에 쌓여있는 컨텍스트와 관련 있는 코드들을 실행하는 식으로 전체 코드의 환경과 순서를 보장한다.
### LexicalEnvironment
어휘적 환경. 컨텍스트를 구성하는 환경 정보들을 사전에서 접하는 느낌으로 모아놓은 것
### environmentRecord
environmentRecord는 현재 컨텍스트와 관련된 코드의 식별자 정보(매개변수 이름, 함수 선언, 변수명 등)들이 저장된다. 컨텍스트 내부 전체를 처음부터 끝까지 순서대로 수집한다.
### 호이스팅
변수 정보를 수집하는 과정을 모두 마쳤더라도 아직 실행 컨텍스트가 관여할 코드들은 실행되기 전의 상태이다. 코드가 실행되기 전임에도 불구하고 자바스크립트 엔진은 이미 해당 환경에 속한 코드의 변수명들을 알게 된 셈이된다. 그렇게되면 자바스크립트 엔진은 식별자들을 최상단으로 끌어올려놓은 다음 실제 코드를 실행한다. (어떤 식별자들이 있는지에만 관심이 있고, 각 식별자에 어떤 값이 할당될 것인지는 관심이 없습니다.)라고 코드를 해석해도 문제될 것이 없다. 호이스팅은 변수 정보를 수집하는 과정을 더욱 이해하기 쉬운 방법으로 대체한 가상의 개념이다. 자바스크립트 엔진이 실제로 끌어올리지는 않지만 편의상 끌어올린 것으로 간주하자는 것임. 
변수는 선언부와 할당부를 나누어 선언부만 끌어올리지만 함수 선언은 함수 전체를 끌어올립니다.
함수 선언문은 함수 전체를 호이스팅 하지만 함수 표현식은 변수 선언부만 호이스팅한다.
함수도 하나의 값으로 취급할 수 있다는 것이 바로 이런 것이다. 함수를 다른 변수에 값으로 할당한 것이 곧 함수 표현식이다.
### 스코프
식별자에 대한 유효범위. ES5 까지의 자바스크립트는 전역공간을 제외하면 오직 함수에 의해서만 스코프개 생성되었다. 이러한 식별자의 유효범위를 안에서부터 바깥으로 차례로 검색해나가는 것을 스코프 체인이라고 한다. 이를 가능하게 하는 것은 LexicalEnvironment의 두 번째 수집 자료임 outerEnvironmentReference이다.
> ES6에서는 새로생긴 let, const, class, strict mode에서의 함수 선언 등에 대해서만 블록범위 로서의 역할을 수행한다. ES6에서는 둘을 구분하기 위해 함수 스코프, 블록 스코프라는 용어를 사용한다.
### 스코프체인
outerEnvironment는 현재 호출된 함수가 선언될 당시의 LexicalEnvironment를 참조한다. 
예를 들어, A 함수 내부에 B 함수를 선언하고 B 함수 내부에 C 함수를 선언한 경우, 함수 C의 outerEnvironmentReference는 함수 B의 LexicalEnvironment를 참조한다. B의 LexicalEnvironment에 있는 outerEnvironmentReference는 다시 B가 선언되던 떄 (A)의 LexicalEnvironment를 참조한다. 이처럼 outerEnvironmentReference는 연결리스트 형태를 띈다. 각 outerEnvironmentReference는 오직 자신이 선언된 시점의 LexicalEnvironment만 참조하고 있으므로 가장 가까운 요소부터 차례대로만 접근할 수 있다. 이런 특성 덕분에 여러 스코프에서 동일한 식별자를 선언한 경우에는 무조건 스코프 체인상에서 가장 먼저 발견된 식별자에만 접근 가능하게 된다.
### this
this에는 호출한 주체에 대한 정보가 담긴다.
자바스크립트에서 this는 기본적으로 실행 컨텍스트가 생성될 때 함께 결정된다. 실행 컨텍스트는 함수를 호출할 때 생성되므로 this는 함수를 호출할 때 결정된다고 할 수 있다. 함수를 어떤 방식으로 호출하느냐에 따라 값이 달라지는 것이다.
### 메서드 내부에서의 this
어떤 함수를 메소드로서 호출하는 경우 호출 주제는 함수명 앞의 객체이다.
### 함수 내부에서의 this
어떤 함수를 함수로서 호출할 경우에는 this가 지정되지 않는다.함수로서 호출하는 것은 호출 주체(객체지향언어에서의 객체)를 명시하지 않고 개발자가 코드에 직접 관여해서 실행한 것이기 때문에 호출 주체의 정보를 알 수 없는 것이다. 함수에서의 this는 전역 객체를 바라본다.
### 메서드의 내부함수에서의 this
This 바인딩에서는 함수를 실행하는 당시의 주변 환경(메서드 내부인지, 함수 내부인지 등)은 중요하지 않고, 오직 해당 함수를 호출하는 구문 앞에 점 또는 대괄호 표기가 있는지 없는지가 관건이다.
### 메서드의 내부 함수에서의 this를 우회하는 방법
상위 스코프의 this를 저장해서 내부함수에서 활용
### this를 바인딩하지 않는 함수
ES6에서는 함수 내부에서 this가 전영객체를 바라보는 문제를 보완하고자, this를 바인딩하지 않는 화살표 함수를 새로 도입했다. 화살표 함수는 실행 컨텍스트를 생성할 때 this바인딩 과정 자체가 빠지게 되어 상위 스코프의 this를 그대로 활용할 수 있다.
그 밖에도 call, apply 등의 메서드를 활용해 함수를 호출할 때 명시적으로 this를 지정하는 방법이 있다.
### 콜백함수 호출 시 그 함수 내부에서의 this
콜백 함수의 제어권을 가지는 함수(메서드)가 콜백 함수에서의 this를 무엇으로 할지를 결정하며, 특별히 정의하지 않은 경우에는 기본적으로 함수와 마찬가지로 전역객체를 바라본다.
### 생성자 함수 내부에서의 this
생성자 함수는 어떤 공통된 성질을 지니는 객체들을 생성하는 데 사용하는 함수이다.
객체지향 언어에서는 생성자를 클래스, 클래스를 통해 만든 객체를 인스턴스라고 한다.
프로그래밍 적으로 생성자는 구체적인 인스턴스를 만들기 위한 일종의 틀이라고 할 수 있다. 이 틀에는 해당 클래스의 공통 속성들이 미리 준비돼 있고, 여기에 구처젝인 인스턴스의 개성을 더해 개별 인스턴스를 만들 수 있는 것이다.
자바스크립트는 함수에 생성자로서의 역할을 함께 부여했습니다.  new 명령어와 함께 함수를 호출하면 해당 함수가 생성자로서 동작하게 된다. 그리고 어떤 함수가 생성자 함수로서 호출된 경우 내부에서의 this는 곧 새로 만들 구체적인 인스턴스 자신이 된다.
### 명시적 this 바인딩
### call 메서드
	Function.prototype.call(thisArg[, arg1[, arg2[, …]]])
call 메서드는 메서드의 호출 주체인 함수를 즉시 실행하도록 하는 명령어이다. 이때 call 메서드의 첫 번째 인자를 this로 바인딩하고 ,이후의 인자들을 호출할 함수의 매개변수로 한다. 함수를 그냥 실행하면 this는 전역객체를 참조하지만 call 메서드를 이용하면 임의의 객체를 this로 지정할 수 있다.
```js
const func = function (a,b,c) {
  console.log(this, a, b, c)
}
func(1, 2, 3);	// window 1 2 3
func.call({x : 1}, 4, 5, 6);	// { x: 1 } 4 5 6

const obj = {
  a: 1,
  method: function (x,y) {
    console.log(this.a, x, y);
  }
};
obj.method(2,3);	// 1 2 3
obj.method.call({ a:4 }, 5, 6);	// 4 5 6
```
### apply 메서드
	Function.prototype.apply(thisArg,[, argsArray])
apply 메서드는 call 메서드와 기능적으로 완전히 동일하다. call 메서드는 첫 번째 인자를 제외한 나머지 모든 인자들을 호출할 함수의 매개변수로 지정하는 반면, apply 메서드는 두 번째 인자를 배열로 받아 그 배열의 요소들을 호출할 함수의 매개변수로 지정한다는 점에서만 차이가 있다.
### call / apply 메서드 활용
```js
const obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};
Array.prototype.push.call(obj, 'd');
console.log(obj);	// { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }
const arr = Array.prototype.slice.call(obj);
console.log(arr);	// [ 'a', 'b', 'c', 'd' ]
```
객체에는 배열 메서드를 직접 사용할 수 없는데, 키가 0 또는 양의 정수인 프로퍼티가 존재하고 length 프로퍼티의 값이 0 또는 양의 정수인 객체인 유사배열객체의 경우 call, apply 메서드를 이용해 배열 메서드를 차용할 수 있다.
### bind 메서드
	Function.prototype.bind(thisArg[, arg1[, arg2[, …]]])
bind메서드는 call과 비슷하지만 즉시 호출하지는 않고 넘겨받은 this 및 인수들을 바탕으로 새로운 함수를 반환하기만 하는 메서드이다. 다시 새로운 함수를 호출할 때 인수를 넘기면 그 인수들은 기존 bind 메서드를 호출할 때 전달했던 인수들의 뒤에 이어서 등록된다. 즉 bind 메서드는 함수에 this를 미리 적용하는 것과 부분 적용 함수를 구현하는 두 가지 목적을 지닌다.
```js
const func = function (a,b,c,d) {
  console.log(this, a, b, c, d);
};
func(1,2,3,4);  // window{...} 1 2 3 4
const bindFunc1 = func.bind({ x: 1 });
bindFunc1(5,6,7,8); // { x: 1 } 5 6 7 8
const bindFunc2 = func.bind({ x: 1}, 4, 5);
bindFunc2(6,7); // { x: 1 } 4 5 6 7
bindFunc2(8,9); // { x: 1 } 4 5 8 9
```
### name 프로퍼티
bind 메서드를 적용해서 새로 만든 함수는 name 프로퍼티에 동사 bind의 수동태인 ‘bound’라는 접두어가 붙는다. 어떤 함수의 name 프로퍼티가 ‘bound xxx’라면 이는 함수명이 xxx인 원본 함수에 bind 메서드를 적용한 새로운 함수라는 의미가 된다.
```js
const func = function (a,b,c,d) {
  console.log(this, a, b, c, d);
};
const bindFunc = func.bind({x: 1}, 4, 5);
console.log(func.name); // func
console.log(bindFunc.name); // bound func
```
### 화살표 함수의 예외사항
화살표 함수는 실행 컨텍스트 생성 시 this를 바인딩하는 과정이 제외되었다. 이 함수 내부에는 this가 아예 없으며, 접근하고자 하면 스코프체인상 가장 가까운 this에 접근하게 된다.
### this 정리
전역 공간에서의 this는 전역객체를 참조한다.
어떤 함수를 메서드로서 호출한 경우 호출 주체(메서드 앞의 객체)를 참조한다.
어떤 함수를 함수로서 호출한 경우 전역객체를 참조한다. 메서드 내부함수도 같다.
콜백 함수 내부에서의 this는 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에 따르며, 정의하지 않은 경우에는 전역객체를 참조한다.
생성자 함수에서의 this는 생성될 인스턴스를 참조한다.

call, apply 메서드는 this를 명시적으로 지정하면서 함수 또는 메서드를 호출한다.
bind 메서드는 this 및 함수에 넘길 인수를 일부 지정해서 새로운 함수를 만든다.
요소를 순회하면서 콜백 함수를 반복 호출하는 내용의 일부 메서드는 별도의 인자로 this를 받기도 한다.
### 콜백함수
콜백 함수는 다른 코드의 인자로 넘겨주는 함수이다. 콜백 함수는 제어권과 관련이 깊다.
콜백 함수의 제어권을 넘겨받은 코드는 다음과 같은 제어권을 가진다.
1. 콜백 함수를 호출하는 시점을 스스로 판단해서 실행한다.
2. 콜백 함수를 호출할 때 인자로 넘겨줄 값들 및 그 순서가 정해져 있다.
3. 콜백 함수의 this 가 무엇을 바라보도록 할지가 정해져 있는 경우도 있다. 정하지 않은 경우에는 전역객체를 바라보며 사용자 임의로 this를 바꾸고 싶을 경우 bind 메서드를 활용하면 된다.
콜백 함수로 어떤 객체의 메서드를 전달하더라도 그 메서드는 메서드가 아닌 함수로서 호출된다.
비동기 제어를 위해 콜백 함수를 사용하다 보면 콜백 지옥에 빠질 수 있는데 Promise, Generator, async/await 등 콜백 지옥에서 벗어날 수 있는 방법이 있다.
### 클로저
클로저 한 문장 요약 들
> - 자신을 내포하는 함수의 컨텍스트에 접근할 수 있는 함수
> - 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 것
> - 함수를 선언할 때 만들어지는 유효범위가 사라진 후에도 호출할 수 있는 함수
> - 이미 생명 주기상 끝난 외부 함수의 변수를 참조하는 함수
> - 자유변수가 있는 함수와 자유변수를 알 수 있는 환경의 결합
> - 로컬 변수를 참조하고 있는 함수 내의 함수
> - 자신이 생성될 때의 스코프에서 알 수 있었던 변수들 중 언젠가 자신이 실행될 때 사용할 변수들만을 기억하여 유지시키는 함수
```js
const outer = function () {
  let a = 1;
  const inner = function () {
    return ++a;
  };
  return inner;
};
const outer2 = outer();
```
가비지 컬렉터는 어떤 값을 참조하는 변수가 하나라도 있으면 그 값은 수집 대상에 포함시키지 않는다. outer 함수는 실행 종료 시점에 inner 함수를 반환한다. 외부 함수인 outer의 실행이 종료되더라도 내부함수인 inner 함수는 언젠가 outer2를 실행ㅇ함으로써 호출될 가능성이 열린 것이다. 언젠가 inner 함수의 실행 컨텍스트가 활성화되면 outerEnvironmentReference가 outer 함수의 LexicalEnvironment를 필요로 할 것이므로 수집 대상에서 제외되기 때문에 inner 함수가 이 변수에 접근할 수 있는 것이다.
이를 바탕으로 클로저를 정의하자면 **클로저란 어떤 함수에서 선언한 변수를 참조하는 내부함수를 외부로 전달할 경우, 함수의 실행 컨텍스트가 종료된 후에도 해당 변수가 사라지지 않는 현상이다.**
### 접근 권한 제어(정보 은닉)
정보 은닉은 어떤 모듈의 내부 로직에 대해 외부로의 노출을 최소화해서 모듈간의 결합도를 낮추고 유연성을 높이고자 하는 현대 프로그래밍 언어의 중요한 개념 중 하나이다.
클르조럴 활용해 접근권한을 제어하는 방법
1. 함수에서 지역변수 및 내부함수 등을 생성
2. 외부에 접근권한을 주고자 하는 대상들로 구성된 참조형 데이터(대상이 여럿일 때는 객체 또는 배열, 하나일 떄는 함수)를 return 한다. -> return 한 변수들은 공개 멤버가 되고, 그렇지 않은 변수는 비공개 멤버가 된다.
### 부분 적용 함수
부분 적용 함수란 n 개의 인자를 받는 함수에 미리 m개의 인자만 넘겨 기억시켰다가, 나중에 (n-m)개의 인자를 넘기면 원래 함수의 실행 결과를 얻을 수 있게 하는 함수이다. 
```js
Object.defineProperty(window, '_', {
  value: 'EMPTY_SAPCE',
  writable: false,
  configurable: false,
  enumerable: false
});

const partial2 = function () {
  const originalPartialArgs = arguments;
  const func = originalPartialArgs[0];
  if (typeof func !== 'function') {
    throw new Error('첫 번째 인자가 함수가 아닙니다.');
  }
  return function () {
    const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    const restArgs = Array.prototype.slice.call(arguments);
    for (let i = 0; i < partialArgs.length; i++) {
      if (partialArgs[i] === _) {
        partialArgs[i] = restArgs.shift();
      }
    }
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

const add = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};
const addPartial = partial2(add, 1,2,_,4,5,_,_,8,9);
console.log(addPartial(3,6,7,10)); // 55

const dog = {
  name: '강아지',
  greet: partial2(function(prefix, suffix) {
    return prefix + this.name + suffix;
  }, '왈왈, ')
};
dog.greet('배고파요!');	// 왈왈, 강아지 배고파요!
```
### debounce
디바운스는 짧은 시간 동안 동일한 이벤트가 많이 발생할 경우 이를 전부 처리하지 않고 처음 또는 마지막에 발생한 이벤트에 대해 한 번만 처리하는 것으로, 프런트엔드 성능 최적화에 큰 도움을 주는 기능 중 하나이다.
```js
const debounce = function (eventName, func, wait) {
  const timeoutId = null;
  return function (event) {
    let self = this;
    console.log(eventName, 'event 발생');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(self, event), wait);
  };
};

const moveHandler = function (e) {
  console.log('move event 처리');
};

const wheelHandler = function (e) {
  console.log('wheel event 처리');
};

document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
document.body.addEventListener('mousewheel', debounce('wheel', wheelHandler, 700));
```
위 예제의 디바운스 함수는 출력 용도로 지정한 eventName과 실행할 함수 func, 마지막으로 발생한 이벤트인지 여부를 판단하기 위한 대기시간 wait를 받는다. 내부에서는 timeoutId 변수를 생성하고, 클로저로 EventListener에 의해 호출될 함수를 반환한다. 반환될 함수 내부에서는 setTimeout을 사용하기 위해 this를 별도의 self 변수에 담고 6번째 줄에서 무조건 대기큐를 초기화하게 했고 마지막으로 7번째 줄에서 setTimeout으로 wait 시간만큼 지연시킨 다음, 원래의 func를 호출하는 형태이다.
위 예제의 디바운스 함수에서 클로저로 처리되는 변수는 eventName, func, wait, timeoutId

> 부분 적용함수에서 _를 ‘비워놓음’으로 사용하기 위해 전역공간을 침범했는데 ES6에서는 Symbol.for를 활용할 수 있다. Symbol.for 메서드는 전역 심볼공간에 인자로 넘어온 문자열이 이미 있으면 해당 값을 참조하고, 선언돼 있지 않으면 새로 만드는 방식으로, 어디서든 접근 가능하면서 유일무이한 상수를 만들고자 할 때 적합하다.
### 커링 함수
커링 함수란 여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출될 수 있게 체인 형태로 구성한 것을 말한다. 커링은 한 번에 하나의 인자만 전달하는 것을 원칙으로 한다. 또한 중간 과정상의 함수를 실행한 결과는 그다음 인자를 받기 위해 대기만 할 뿐으로, 마지막 인자가 전달되기 전까지는 원본 함수가 실행되지 않는다. (부분 적용 함수는 여러 개의 인자를 전달할 수 있고, 실행 결과를 재실행할 때 원본 함수가 무조건 실행된다).
```js
const curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a,b);
    };
  };
};

const getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(8));		//10
console.log(getMaxWith10(25));	//25

const getMinWith10 = curry3(Math.min)(10);
console.log(getMinWith10(8));		//8
console.log(getMinWith10(25));	//10
```
부분 적용 함수와 달리 커링 함수는 필요한 상황에 직접 만들어 쓰기 용이하다. 필요한 인자 개수만큼 함수를 만들어 계속 리턴해주다가 마지막에 조합해서 리턴해주면 되기 때문이다. 다만 인자가 많을 수록 가독성이 떨어지는데 화살표 함수를 사용하면 더 수월하게 작성할 수 있다.
	const curry3 = func => a => b => func(a, b)
각 단계에서 받은 인자들을 모두 마지막 단계에서 참조할 것이므로 GC되지 않고 메모리에 쌓였다가 마지막 호출로 실행 컨텍스트가 종료된 후에 한꺼번에 GC의 수거 대상이 된다.
### 프로토타입
자바스크립트는 함수에 자동으로 객체인 prototype 프로퍼티를 생성해 놓는데, 해당 함수를 생성자 함수로서 사용할 경우, 즉 new 연산자와 함께 함수를 호출할 경우 그로부터 생성된 인스턴스에는 숨겨진 프로퍼티인 __ proto __가 자동으로 생성되며, 이 프로퍼티는 생성자 함수의 prototype 프로퍼티를 참조한다. __ proto __ 프로퍼티는 생략 가능하도록 구현돼 있기 때문에 **생성자 함수의 prototpye에 어떤 메서드나 프로퍼티가 있다면 인스턴스에서도 해당 메서드나 프로퍼티에 접근할 수 있게 된다.**
### constructor 프로퍼티
생성자 함수의 프로퍼티인 prototype 객체와 인스턴스의 __ proto __ 객체 내부에는 constructor 프로퍼티가 있다. 이 프로퍼티는 원래 생성자 함수(자기 자신)를 참조한다. 이 프로퍼티는 인스턴스가 자신의 생성자 함수가 무엇인지를 알고자 할 때 필요한 수단이다.
```js
// constructor 접근 방법
const Person = function (name) {
  this.name = name;
};
const p1 = new Person('사람1');	// Person {name: '사람1'} true
const p1Proto = Object.getPrototypeOf(p1);	
const p2 = new Person.prototype.constructor('사람2');	// Person {name: '사람2'} true
const p3 = new p1Proto.constructor('사람3');	//	Person {name: '사람3'} true
const p4 = new p1.__proto__.constructor('사람4');	//	Person {name: '사람4'} true
const p5 = new p1.constructor('사람5');	//	Person {name: '사람5'} true

[p1, p2, p3, p4, p5].forEach(function (p) {
  console.log(p, p instanceof Person);
});
```
### 프로토타입 체인
어떤 데이터의 __ proto __ 프로퍼티 내부에 다시 __ proto __ 프로퍼티가 연쇄적으로 이어진 것을 프로토타입 체인이라 하고, 이 체인을 따라가며 검색하는 것을 프로토타입 체이팅이라 한다. 프로토타입 체이닝은 메서드 오버라이드와 동일한 맥락으로, 어떤 메서드를 호출하면 자바스크립트 엔진은 데이터 자신의 프로퍼티들을 검색해서 원하는 메서드가 있으면 그 메서드를 실행하고, 없으면 __ proto __ 를 검색해서 있으면 그 메서드를 실행하고 ,없으면 다시 __ proto __ 를 검색해서 실행하는 식으로 진행한다.
### 클래스
클래스는 어떤 사물의 공통 속성을 모아 정의한 추상적인 개념이고, 인스턴스는 클래스의 속성을 지니는 구체적인 사례이다. superclass의 조건을 충족하면서 더 구체적인 조건이 추가된 것을 subclass라 한다.
클래스의 prototype 내부에 정의된 메서드를 프로토타입 메서드라 하며 인스턴스가 마치 자신의 것처럼 호출할 수 있다. 클래스(생성자 함수)에 직접 정의한 메서드를 스태틱 메서드라고 하며, 이들은 인스턴스가 직접 호출할 수 없고 클래스(생성자 함수)에 의해서만 호출할 수 있다.