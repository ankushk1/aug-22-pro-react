import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";
import ApiItems from "./ApiItems";
const ApiComp = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("products");

  // Adding a new filter in getData and also rendering with new button
  const getData = (json) => {
    switch (filter) {
      case "products":
        return json.products;
      case "users":
        return json.users;
      case "todos":
        return json.todos;
      default:
        return;
    }
  };

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/${filter}?limit=10`);
    const json = await res.json();
    setData(getData(json));
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  const renderData = (elem) => {
    switch (filter) {
      case "products":
        return (
          <Card
            style={{
              width: "18rem",
              height: "30rem"
            }}
          >
            <img alt="Sample" src={elem.thumbnail} />
            <CardBody>
              <CardTitle tag="h5">{elem.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {elem.price}
              </CardSubtitle>
              <CardText>{elem.description}</CardText>
            </CardBody>
          </Card>
        );
      case "users":
        return (
          <Card
            style={{
              width: "18rem",
              height: "30rem"
            }}
          >
            <img alt="Sample" src={elem.image} />
            <CardBody>
              <CardTitle tag="h5">{elem.firstName}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {elem.age}
              </CardSubtitle>
              <CardText>{elem.email}</CardText>
            </CardBody>
          </Card>
        );
      case "todos":
        return (
          <Card
            style={{
              width: "18rem",
              height: "20rem"
            }}
          >
            <CardBody>
              <CardTitle tag="h3">{elem.todo}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h4">
                {elem.userId}
              </CardSubtitle>
            </CardBody>
          </Card>
        );
      default:
        return;
    }
  };

  return (
    <div>
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
      </div>
      <div className="d-flex flex-wrap justify-content-around">
        {data.map((elem, index) => (
          <div key={index} className="my-4">
            {/* {renderData(elem)} */}
            <ApiItems elem={elem} filter={filter} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiComp;
