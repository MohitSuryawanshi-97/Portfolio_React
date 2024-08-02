import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div  id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium laborum officia molestiae exercitationem reprehenderit
              provident alias ipsa, aliquid sed perferendis?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem autem amet maxime. Reiciendis possimus ipsum
              corporis repudiandae ut voluptates quisquam!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p> <hr style={{ width: '80%' }} />
            </div>
            <div className="about-skill">
              <p>CSS</p> <hr style={{ width: '80%' }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p> <hr style={{ width: '80%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p> <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p> <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>NextJS</p> <hr style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
       
      </div>
    </div>
  );
};

export default About;
