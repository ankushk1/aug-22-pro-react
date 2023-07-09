import React, { useEffect, useState } from "react";

const ApiComp = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    const json = await res.json();
    setData(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      ApiComp
      {data.map((elem, index) => (
        <div key={index} className="my-4">
          <div>{elem.title}</div>
          <div>{elem.description}</div>
          <div>{elem.price}</div>
        </div>
      ))}
      {/* {data.map((elem) => {
        return (
          <div className="my-4">
            <div>{elem.title}</div>
            <div>{elem.description}</div>
            <div>{elem.price}</div>
          </div>
        );
      })} */}
    </div>
  );
};

export default ApiComp;
