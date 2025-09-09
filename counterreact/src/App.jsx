import { useState } from 'react';
import './App.css';
import Signup from './components/Signup';

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>

    <Signup/>
       <h1>My Counter</h1>
      <h3>counter: {counter}</h3>
      <button onClick={addValue}>Increase value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease value</button>
      <p>footer: {counter}</p> 
    </>
  );
}

export default App;
