import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      About
      <h2>{location.state.message}</h2>
    </div>
  );
};

export default About;
