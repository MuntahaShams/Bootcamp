import React,{useState} from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';

// function App() {
//   return (
//     <CounterContext.Provider value={7}>
//     <div>
//      <Parent/>
//     </div>
//     </CounterContext.Provider>
//   );
// }

function App() {
  let countState=useState(1)
  return (
    <CounterContext.Provider value={countState}>
    <div>
     <Parent/>
    </div>
    </CounterContext.Provider>
  );
}
export default App;
