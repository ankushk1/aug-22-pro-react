import React from "react";
import NewChild from "./NewChild";

const PropsComp = (props) => {
  console.log(props)

  return (
    <div>
      PropsComp
      {/* <div>{name}</div>
      <div>{age}</div>
      <div>{city}</div> */}
      {/* <NewChild {...props} /> */}
    </div>
  );
};

export default PropsComp;
