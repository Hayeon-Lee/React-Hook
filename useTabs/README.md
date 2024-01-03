useTabs() 만들기

- useTabs() 인자

  - 첫 번째 값: 초기 인덱스 값
  - 두 번째 값: 전체 값 (배열)

- useTabs() 반환값

  - 첫 번째 값: 배열에서 특정 인덱스의 해당하는 내용
  - 두 번째 값: 특정 인덱스를 지정해주는 함수

- 흐름
  - useTabs 에 초기화 하는 인덱스 값과 전체 배열을 전달한다.
  - useTabs 내부에서 전체 배열 인자가 제대로 전달됐는지, 해당 데이터 타입이 배열이 맞는지 다시 확인한다.
  - useTabs 내부에서 useState()와 전달받은 값으로 초기값을 갱신한다.
  - 사용자가 버튼을 누르면 버튼의 index가 changeItem으로 전달, changeItem은 setCurrentIndex 이므로 currentIndex가 버튼의 index로 갱신된다.
  - 따라서 버튼을 누를 때마다 버튼의 인덱스에 해당하는 content가 하단에 렌더링된다.

```javascript
const content = [
  {
    tab: 'Section 1',
    content: "I'm the content of the section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of the section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className='App'>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
```
