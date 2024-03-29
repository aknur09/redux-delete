// import React, { useState } from 'react'

// export const Counter = () => {
//     const [count, setCount]=useState(7)

//     const plus=()=>{
//         setCount((count) => count +1)
//     }

//     const minus=()=>{
//         setCount((count) => count -1)
//     }
//   return (
//     <div>
//         <h1> Счётчик: {count}</h1>
//         <button className='btn btn-outline-danger' onClick={plus}>+</button>
//         <button className='btn btn-outline-primary' onClick={minus}>-</button>
//     </div>
//   )
// }

import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  // const minus = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      
      <h1> {count}</h1>
      <button className='btn btn-outline-dark' onClick={plus}>+</button>
      {/* <button className='btn btn-outline-dark' onClick={minus}>-</button> */}
       <button className='btn btn-outline-dark' onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
