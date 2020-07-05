import React,{useState} from 'react';
import './App.css';
import {Message} from './Message.js'

export default function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count} />
      <br />

      <button onClick={() => setCount(count + 1)}>
        Update Counter
      </button>

      <button onClick={() => setMorning(!isMorning)}> 
        Update Day
      </button>

    </div>
  );
}





// export default function App() {

//   let [count , setCount]= useState(0);
//   return (
//     <div>
//       <Message counter={count} />
//       <br/>
//       <button onClick={
//         ()=> setCount(++count)
//       }>
//         update count
//       </button>
//     </div>
//   );
// }



// export default function App() {
//   let [count , setCount]= useState(0);
//   return (
//     <div>
//       <h3> value of counter value is {count}</h3>
//       <br/>
//       <button onClick={
//         ()=> setCount(++count)
//       }>
//         update count
//       </button>
//     </div>
//   );
// }
