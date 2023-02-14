import React from "react";
import { Card } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <h1 className="text-center mt-4">Skills</h1>

      <div className="d-flex flex-wrap justify-content-between w-75 my-4 mx-auto">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            height="200"
          />
          <Card.Body>
            <Card.Title>HTML</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
            height="200"
          />
          <Card.Body>
            <Card.Title>CSS</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            height="200"
          />
          <Card.Body>
            <Card.Title>JS</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Skills;
