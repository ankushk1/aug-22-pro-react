import React, { useState } from "react";
import { useFetch } from "../Utils/CustomHooks";
import { Button } from "reactstrap";
import ApiItems from "./ApiItems";

const ApiComp2 = () => {
  const [filter, setFilter] = useState("products");
  const { apiData } = useFetch("https://dummyjson.com", filter);
  
  return (
    <div>
      ApiComp2
      <div>
        <Button
          color="primary"
          className="me-3 my-3"
          size="lg"
          onClick={() => setFilter("products")}
        >
          Products
        </Button>
        <Button
          color="success"
          size="lg"
          className="me-3"
          onClick={() => setFilter("users")}
        >
          Users
        </Button>
        <Button color="warning" size="lg" onClick={() => setFilter("todos")}>
          Todos
        </Button>

        <div className="d-flex flex-wrap justify-content-around">
          {apiData.map((elem, index) => (
            <div key={index} className="my-4">
              <ApiItems elem={elem} filter={filter} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiComp2;
