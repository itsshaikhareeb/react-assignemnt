import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let count = 0;
  function inc(){
    count++;
    console.log(count);
  }
  
  function dec(){
    count--;
    console.log(count);
  }

  return (
    <>
    <h1>Counter App</h1>
    <div>

    <button onClick={inc} >Increase</button>
    <p>count: {count}</p>
    <button onClick={dec} >Decrease</button>
    </div>
    </>
  )
}

export default App
