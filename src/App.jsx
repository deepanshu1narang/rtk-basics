import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement, incrementByNumber } from './store/slices/coounter'
import { useSelector, useDispatch } from 'react-redux'
import Summary from './Summary'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
      </div>
      <h1>RTC concepts</h1>
      <div className="card">
        <span>
          count is {count}
        </span>
        <div className='inc-dec'>
          <button className='inc-dec-buttons' onClick={() => dispatch(increment())}>+</button>
          <button className='inc-dec-buttons' onClick={() => dispatch(decrement())}>-</button>
          <button className='inc-dec-buttons' onClick={() => dispatch(incrementByNumber(2))}>+2</button>
        </div>

      </div>

      <h2>Summary</h2>
      <Summary />
    </>
  )
}

export default App
