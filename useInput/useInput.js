export const useInput = (initialValue, validator) => {
  const [value, setvalue] = useState(initialValue); //useInput의 인자값으로 초기화

  const onChange = (event) => {
    const { target = { value } } = event;
    let willUpdate = true;

    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
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
  );
};
