import React from "react";
import { useState } from "react";

const StateComp = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
    setCount((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };

  const decreaseCount = (num) => {
    setCount(count - 1);
  };

  return (
    <div>
      The count is {count}
      <div>
        <button onClick={() => increaseCount(5)}>Increase</button>
        <button onClick={() => decreaseCount()}>Decrease</button>
      </div>
    </div>
  );
};

export default StateComp;
