import React, { useState } from "react";

const StateNonPrimUpdate = () => {
  // const [arr, setArr] = useState([]); // [11 , 20, 25]

  // const updateArr = () => {
  //   // const copyArr = [...arr]
  //   // copyArr.push(Math.floor(Math.random() * 100)); // 11 20 25
  //   setArr([...arr, Math.floor(Math.random() * 100)]);
  // };

  // const [obj, setObj] = useState({
  //   fistname: "user1",
  //   lastname: "xyz",
  //   address: {
  //     city: "Gurugram",
  //     state: "Haryana"
  //   }
  // });

  // const updateObj = (num) => {
  //   if (num === 1) {
  //     // const copyObj = { ...obj };
  //     // copyObj.fistname = "User 1";
  //     // setObj(copyObj);
  //     setObj({ ...obj, fistname: "User 1" });
  //   } else if (num === 3) {
  //     // const copyObj = { ...obj };
  //     // copyObj.address.city = "Delhi";
  //     // setObj(copyObj);
  //     // setObj({
  //     //   ...obj,
  //     //   address: {
  //     //     ...obj.address,
  //     //     city: "Delhi"
  //     //   }
  //     // });

  //     const newAddress = {...obj.address, city : "Delhi", state: "Delhi"}
  //     const updatedObj = {...obj, address : newAddress}
  //     setObj(updatedObj)

  //   } else {
  //     // const copyObj = { ...obj };
  //     // copyObj.lastname = "User Last Name";
  //     // setObj(copyObj);
  //     setObj({ ...obj, lastname: "User Last Name" });
  //   }
  // };

  const [artists, setArtists] = useState([
    {
      id: 0,
      name: "Marta Colvin Andrade",
      address: {
        city: "Gurugram",
        state: "Haryana"
      }
    },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" }
  ]);

  const onArrayChange = () => {
    const copyArr = [...artists];
    // const newObj = { ...artists[0], id: 20 };
    copyArr[0].name = "New name";
    // copyArr[0] = newObj
    setArtists(copyArr);
  };

  return (
    <div>
      {/* <div>{obj.fistname}</div>
      <div>{obj.lastname}</div>
      <div>{obj.address.city}</div> */}
      {/* <div>
        <button onClick={() => updateObj(1)}>Change First Name</button> <br />
        <button onClick={() => updateObj(2)}>Change Last Name</button>
      </div> */}

      <div>
        <button onClick={() => onArrayChange()}>Change Arr</button>
      </div>
    </div>
  );
};

export default StateNonPrimUpdate;
