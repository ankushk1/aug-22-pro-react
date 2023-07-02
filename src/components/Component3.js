import React from "react";

const string = "This is a random string";
const num = 20;

const arr = [1, 2, 3, 4];
const userInfo = {
  name: "user1",
  age: 35, 
  address: {
    city: "Delhi",
    country: "India"
  }
};

const Component3 = () => {
  return (
    <div>
      Component3
      {/* <p>{string}</p>
      <div>{num}</div>
      <br />
      <br />
      <div>{arr}</div> */}

      <div>{userInfo.name}</div>
      <div>{userInfo.age}</div>
      <div>{userInfo.address.city}</div>
      <div>{userInfo.address.country}</div>
    </div>
  );
};

export default Component3;
