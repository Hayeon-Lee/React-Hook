# REACT HOOK

### 레포지토리 개설 목적

리액트에서 사용되는 useState()와 useEffect()를 깊이 있게 공부함으로써 hook에 대한 이해도를 높입니다.

이후 이를 활용하여 custom react hook을 제작합니다.

<br />

### 공부를 통해 배운 점

1. 추후 업데이트

<br />

### Custom Hooks 모음

1. useState() 를 응용하여 만든 React Hook

   i. <a href='useInput'> useInput() </a>

   ii. <a href='useTabs'> useTabs() </a>

2. useEffect() 를 응용하여 만든 React Hook

<br />

### Custom Hooks 보기 전 읽으면 좋을 기본 지식

1. useState() 기본 지식

   ```javascript
   const [item, setItem] = useState(1);

   const [onlyItem] = useState(1)[0];

   const [onlySetItem] = useState(1)[1];
   ```

   - useState()의 인자는 item의 초기값을 지정한다

   - useState()는 배열을 반환하므로, 2번째와 3번째 줄 코드처럼 작성할 수 있다.

   ```javascript
   const increase = () => setItem(item + 1);
   const decrease = () => setItem(item - 1);
   ```

   - 위와 같이 손쉽게 item 값을 1 증감시키는 코드도 작성할 수 있다.

<br />

2. useEffect() 기본 지식

   - useEffect() 의 인자

     - 첫 번째 인자: 렌더링 후 컴포넌트에게 할 일을 지시

     - 두 번째 인자: 어떤 컴포넌트를 감시할 지 정함 (빈 값을 전달하면 처음 페이지 렌더링 될 때만 동작)

   - useEffect() 가 동작하는 법
     - ComponentDidMount
     - ComponentWillUnMount
     - ComponentDidUpdate
