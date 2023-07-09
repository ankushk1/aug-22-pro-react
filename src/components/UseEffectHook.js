import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(0);

  let intrvl;
  useEffect(() => {
    intrvl = setInterval(() => {
      console.log(Math.floor(Math.random() * 100));
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("useEffect 1 called");
  }, [count]);

  useEffect(() => {
    console.log("useEffect 2 Called");
  }, [num]);

  useEffect(() => {
    return () => {
      console.log("Unmount");
      clearInterval(intrvl);
    };
  }, []);

  return (
    <div>
      {console.log("render called")}
      <h3>
        Component rendered {count} {count > 1 ? "times" : "time"}
      </h3>

      <h3>{num}</h3>

      <div>
        <button onClick={() => setCount(count + 1)}>Re-render</button>
      </div>

      <div>
        <button onClick={() => setNum(num + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default UseEffectHook;
