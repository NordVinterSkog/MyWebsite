import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="aboutme">
        <img src={require(`./img/me.jpg`)} alt="" />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          ullam minima placeat exercitationem. Sint hic cumque molestias, dicta
          animi architecto laudantium officia e
        </div>
      </div>
      <div className="contactme">
        <h1>Contact me!</h1>
        <div className="links">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
