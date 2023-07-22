import React from "react";
import { useForm } from "../Utils/CustomHooks";

const Signin = () => {
  const { inputVal, onInputChange } = useForm();

  return (
    <div className="mt-5">
      Signin
      <form className="d-flex flex-column align-items-center">
        <input
          type="email"
          placeholder="Email"
          className="form-control w-50 my-2"
          value={inputVal.email}
          name="email"
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control w-50 my-2"
          value={inputVal.password}
          name="password"
          onChange={(e) => onInputChange(e)}
        />
      </form>
      <button className="btn btn-info"> Sign In</button>
    </div>
  );
};

export default Signin;
