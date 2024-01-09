## useClick() 만들기

- useClick() 인자

  - 클릭 시 실행할 함수

- useClick() 반환값

  - 현재 DOM

- 흐름
  - 클릭 시 실행할 함수를 인자로 받는다.
  - element에 현재 돔이 저장된다.
  - useEffect의 dependency가 빈 배열이기 때문에, 처음 시작할 때 (componentDidMount, componentDidUpdate) 호출 되어, element에 DOM이 성공적으로 저장됐다면 제일 첫 번째 if 가 시작되어 click 이벤트 리스너에 onClick에 연결된다.
  - componentWillUnmount 때 return이 실행된다. 끝날 때 click 이벤트 리스너를 제거해주는 것이다.

<br />

```javascript
const useClick = (onClick) => {
    const element = useRef();

    useEffect(()=> {
        if(element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        }
    }, [])
    return element;
}

const App = () => {
    const sayHello = () => console.log("say Hello");
    const title = useClick(sayHello);

    return (
        <div className = "App">
            <h1 ref={title}>Hi</h1>
        </div>
    )
}
``` 