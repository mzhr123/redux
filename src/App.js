
import './App.css';
import {useSelector,useDispatch} from "react-redux";
// import { increment,decrement } from "./state/store/Store";
import {increment,decrement} from './state/action/action'
import Timer from "./components/Timer"

function App() {
  // const firstState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  // const selector=useSelector();
  return (
    <div className="App">
      <h1>increment/decrement using redux</h1>
      
      <button onClick={()=>dispatch(increment())}>+</button>
      <h2>{useSelector((state)=>state.changeTheNumber)}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>

      <div>
      <Timer/>
      
      </div>
    </div>
  );
}

export default App;


// import React, { useState, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [timer, setTimer] = useState(0)
//   const [isActive, setIsActive] = useState(false)
//   const [isPaused, setIsPaused] = useState(false)
//   const countRef = useRef(null)

//   const handleStart = () => {
//     setIsActive(true)
//     setIsPaused(true)
//     countRef.current = setInterval(() => {
//       setTimer((timer) => timer + 1)
//     }, 1000)
//   }

//   const handlePause = () => {
//     clearInterval(countRef.current)
//     setIsPaused(false)
//   }
//   return (
//     <div className="app">
//         <p>{timer}</p> 
//           <button onClick={handleStart}>Start</button>
//           <button onClick={handlePause}>Pause</button>
//         </div>
//   );
// }

// export default App;