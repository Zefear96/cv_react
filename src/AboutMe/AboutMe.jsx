import React from "react";
import { Card } from "react-bootstrap";

const AboutMe = () => {
  return (
    <>
      <div className="text-center m-5">
        <h1>AboutMe</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          voluptates. Quo, facere corrupti. Blanditiis ratione rerum voluptate
          in cupiditate ut quas quisquam! Atque suscipit nam rerum maiores harum
          quasi architecto. Quae incidunt quasi quidem eveniet omnis ab nemo,
          laudantium sed nobis reiciendis magni. Ad nemo voluptates nisi nulla,
          commodi fuga est corporis praesentium quis, laboriosam inventore quae
          distinctio voluptatibus autem.
        </p>

        <div className="d-flex flex-wrap justify-content-between w-75 my-4 mx-auto">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.enigmaglobal.com/wp-content/uploads/2021/02/web-diseno.png"
              height="200"
            />
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://parametric-architecture.com/wp-content/uploads/2021/06/rhino-3d-PA-article-1919x928.jpg"
              height="200"
            />
            <Card.Body>
              <Card.Title>3d Modelling</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.also.com/ec/cms5/6000/blog/the-most-important-3d-printing-trends-320638073_800px.jpg"
              height="200"
            />
            <Card.Body>
              <Card.Title>3d printing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
