import Person from './components/Person';
import UseMemo from './components/UseMemo.jsx';
function App() {
  return (
    <div>
      <Person />
      <UseMemo />
    </div>
  )
}

export default App;


// what are Memo()   , useCallback() , useMemo() in react?
// Memo() is a higher order component that is used to memoize the components
// useCallback() is a hook that is used to memoize the functions
// useMemo() is a hook that is used to memoize the values

// when to use Memo() , useCallback() , useMemo()?
// when the component is re-rendered multiple times and the props are not changed then we can use Memo() to prevent the re-rendering of the component
// when the function is passed as a prop to the child component and the function is not changed then we can use useCallback() to prevent the re-creation of the function
// when the value is passed as a prop to the child component and the value is not changed then we can use useMemo() to prevent the re-calculation of the value