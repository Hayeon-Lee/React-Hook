## useTitle() 만들기

- useTitle() 인자

    - 초기 타이틀 값 (초기화 할 때 들어갈 내용)

- useTitle() 반환값

    - 타이틀을 설정하는 함수

- 흐름
    - useTitle() 에 타이틀 초기값을 전달한다.
    - setTimeout으로 인해 5초 뒤, titleUpdater에 Home을 전달한다.
    - titleUpdater는 useTitle에서 반환된 setTitle이고, 이 함수를 사용하면 title에 변화가 발생한다.
    - 따라서 title에 변화가 생겼기 때문에, useEffect가 발생하면서 updateTitle이 시작된다.
    - updateTitle은 html에서 title 쿼리를 찾아 인자값으로 내용을 바꿔준다. 

```javascript
const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title])
    return setTitle;
}

const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(()=>titleUpdater("Home"), 5000);
    return (
        <div className="App">
            <div>Hi</div>
        </div>
    )
}

```