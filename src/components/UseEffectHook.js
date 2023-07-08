import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(1);

  useEffect(() =>{
    console.log('useEffect called')
    setCount( 5 )
  } , [])

  return (
    <div>
      {console.log('render called')}
      <h3>Component rendered {count} {count > 1 ? "times" : "time"}</h3>

      <div>
        <button onClick={() => setCount(count + 1)}>Re-render</button>
      </div>
    </div>
  );
};

export default UseEffectHook;
