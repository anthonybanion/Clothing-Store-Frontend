import { useState } from 'react';
import './App.css';
import { Export } from './utils/Export';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Export />
    </>
  );
}

export default App;
