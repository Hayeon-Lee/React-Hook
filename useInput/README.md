## useInput() 만들기

- useInput() 인자

  - 첫 번째 값: 초기값
  - 두 번째 값: 유효성 검증 함수

- useInput() 반환값

  - 첫 번째 값: 유효성 검증까지 한 후의 값
  - 두 번째 값: onChange 함수 (입력이 변화할 때마다 발생)

- 흐름
  - useInput에 초기값과 유효성 검증용 함수에 조건을 확인하는 기능을 가진 함수를 전달한다
  - useInput은 전달받은 초기값을 useState()를 활용하여 할당한다.
  - useInput()의 반환값 onChange를 사용자 입력 폼에 연결한다.
  - 사용자가 입력을 발생시킬 때마다 useInput()의 onChange 이벤트 발생, 이벤트로 전달된 value 값을 validator로 검증한다.
  - 검증이 완료되면 useState()로 기존 값을 새로운 값으로 갱신시킨다.

```javascript
const useInput = (initialValue, validator) => {
  const [value, setvalue] = useState(initialValue); //useInput의 인자값으로 초기화

  const onChange = (event) => {
    const { target = { value } } = event;
    let willUpdate = true;

    if (typeof validator === 'function') {
      willUpdate = validator(value);
    } //validator가 함수면 유효성 검증 함수로 활용이 가능하므로 value를 이용해 확인한다.

    if (willUpdate) {
      //위의 유효성 검사에서 true가 나오면 해당 부분이 실행된다.
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput('Mr. ', maxLen);
  return (
    <div className='App'>
      <h1>Hello</h1>
      <input placeholder='Name' {...name} />
    </div>
    //{...name} 을 하면 name 안에 있는 모든 값이 unpacking 된다.
    //{value 와 onChange}는 자바스크립트의 키워드와 동일하여 자동 매칭된다.
    //value = name.value, onChange = name.onChange 와 동일하게 실행된다는 의미이다.
  );
};
```
