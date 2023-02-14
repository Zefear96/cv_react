import React from "react";

const Home = () => {
  return (
    <>
      <div className="container d-flex my-5 justify-content-center ">
        <div className="block-left">
          <div className="icons">
            <i class="bi bi-facebook"></i>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-5">
            <h1>I am Zamir</h1>
            <br />
          </div>

          <p className="text-center">
            I'm Zamir, professional frontend developer with long time expirience
            in this field
          </p>
        </div>

        <div className="block-right">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/front-end-developer-4830933-4041850.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
