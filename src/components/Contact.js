import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="overlay">
        <div className="aboutme">
          <div>
            <p>Howdy.</p>
            <p>
              I'm a beginner front end developer from Poland. I studied and
              gratuated journalism, but then I realized it's not exactly the
              kind of life I want for myself, so I turned to self-learning
              programming in JavaScript and React, though I still enjoy writing
              stuff from time to time.{" "}
            </p>
            <p>
              Other than that I'm interested in languages. I'm fluent in Polish
              and English, had a brief affair with Norwegian, currently learning
              and in love with Icelandic, curious about Finnish.
            </p>
            <p>
              {" "}
              I love hiking, cooking, learning new things and finding coziness
              where it's least expected.
            </p>
          </div>
        </div>
        <div className="contactme">
          <img src={require(`../img/me.jpg`)} alt="" />
          <div className="links">
            <a href="https://github.com/NordVinterSkog">
              <i class="fab fa-github"></i>
            </a>
            <a href="mailto:kamilj_95@wp.pl">
              <i class="fas fa-at"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
