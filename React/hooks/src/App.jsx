import react from 'react';
import API from './components/api.jsx';
import Timer from './components/timer.jsx';
import Live from './components/live.jsx';
function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <API />
      <div style={{ marginTop: 20 }}>
        <Timer />
      </div>
      <Live />
    </div>
  );
}

export default App;


// what is th life cycle of the react components?
// 1. componentDidMount() -- when the component is mounted
// 2. componentDidUpdate() -- when the component is updated
// 3. componentWillUnmount() -- when the component is unmounted

// useEffect hook is used to handle the side effects in the react components
// it accepts two arguments first is the callback function and second is the dependency array
// if the dependency array is empty then the useEffect will be called only once when the component is mounted
// if the dependency array has some values then the useEffect will be called whenever the values in the dependency array are changed
// if there is no dependency array then the useEffect will be called whenever the component is re-rendered