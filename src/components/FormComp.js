import React, { useState } from "react";

const FormComp = () => {
  // const [firstName,  setFirstName] = useState("");
  // const [email,  setEmail] = useState("");

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    email: "",
    password: "",
    isActive: "",
    selectVal: ""
  });

  const onInputChange = (e, type = null) => {
    console.log(e)
    if (type === "checkbox") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.checked });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <div className="fs-2 my-4">FormComp</div>

      <form className="d-flex flex-column align-items-center">
        <input
          type="text"
          placeholder="First Name"
          className="form-control w-50 my-2"
          value={userInfo.firstName}
          name="firstName"
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control w-50 my-2"
          value={userInfo.email}
          name="email"
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control w-50 my-2"
          value={userInfo.password}
          name="password"
          onChange={(e) => onInputChange(e)}
        />

        <div className="d-flex align-items-center">
          <input
            id="cb-1"
            type="checkbox"
            className="my-2 me-2"
            checked={userInfo.isActive}
            name="isActive"
            onChange={(e) => onInputChange(e, "checkbox")}
          />
          <label htmlFor="cb-1"> Is Active</label>
        </div>

        {/* Try Adding a Radio input and get the selected Option */}
        {/* Try to also implement a number Input and also provide range of 10 to 500*/}

        <select
          name="selectVal"
          className="form-control w-50 my-2"
          value={userInfo.selectVal}
          onChange={(e) => onInputChange(e)}
        >
          <option value="" hidden>Select One</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </form>
    </div>
  );
};

export default FormComp;
