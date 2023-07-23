import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Home = () => {
  // const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const onRedirect = () => {

    // you check for validations

    // Hit the api and get the response

    // if success
    navigate("/about", {
      state: {
        message: "String from Home.js",
        name: "ABC",
        age: 30
      }
    });

    //if error
  };

  return (
    <div>
      Home
      {/* {redirect && <Navigate to="/contact" />} */}
      <div>
        <button className="btn btn-sm btn-primary" onClick={() => onRedirect()}>
          Redirect
        </button>
      </div>
    </div>
  );
};

export default Home;
