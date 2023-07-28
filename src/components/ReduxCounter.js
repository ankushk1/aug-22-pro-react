import React, { useState } from "react";
import { increment, decrement } from "../redux/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

const ReduxCounter = () => {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  const incrementHandler = () => {
    // setCount(count + 1);
    dispatch(increment(5));
  };

  const decrementHandler = () => {
    dispatch(decrement());

  };

  return (
    <div>
      <h1>Count - {count}</h1>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default ReduxCounter;
