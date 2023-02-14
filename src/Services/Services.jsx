import React from "react";
import { Carousel } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <div className="text-center m-5">
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          consequatur illo quaerat eos. Quis officiis doloremque recusandae
          nesciunt tenetur nulla consequatur beatae repellendus? Omnis nihil
          voluptas pariatur eveniet voluptatibus hic! Quidem, deleniti eaque
          aliquam officia quae aut atque sapiente!
        </p>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg"
            alt="First slide"
            maxHeight="400"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://miro.medium.com/max/800/1*7zKy7ApAilsVT0Mzeiasyw.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Services;
