import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const About = () => {
  const params = useParams();

  console.log(params);

  let [searchParams] = useSearchParams();
  console.log(searchParams)
  console.log(searchParams.get("name"), searchParams.get("id"));

  return <div>About</div>;
};

export default About;
