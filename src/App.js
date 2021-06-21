
import './App.css';
import {useSelector,useDispatch} from "react-redux";
// import { increment,decrement } from "./state/store/Store";
import {increment,decrement} from './state/action/action'

function App() {
  const firstState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>increment/decrement using redux</h1>
      
      <button onClick={()=>dispatch(increment())}>+</button>
      <h2>{firstState}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
