import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";
const ApiItems = ({ elem, filter }) => {
  const renderData = () => {
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

  return <div>{renderData()}</div>;
};

export default ApiItems;
