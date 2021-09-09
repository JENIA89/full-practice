import React, { useState } from 'react';

function Counter() {
  const [like, setLike] = useState(0);

  const increment = () => {
    setLike((prev) => prev + 1);
  };

  const decrement = () => {
    setLike((prev) => prev - 1);
  };
  return (
    <div className='App'>
      <h1>Like: {like}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
