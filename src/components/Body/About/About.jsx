import React from "react";
import "./About.css";

import anna from "../../../assets/img/anna_kul.jpg";

const About = () => {
  return (
    <div className="About full-height" id="about">
      <div className="personal">
        <div className="p-left">
          <span className="bg-base">
            <h3>About me</h3>
            <p className="text">
              My name is Anna. I come from a small village in the south-east of
              Poland. Currently, I live in Lublin, Poland. In 2020, I graduated
              from Maria Curie- Skłodowska University in Lublin. I have BA and
              MA in Applied Linguistics. I speak English fluently and also
              French. My true passion is photography and learning new languages.
              Due to my travelling passion, I have lived in the USA for some
              time and in Norway. It helped me mastering my languages skills and
              develop my photography passion.
            </p>
          </span>
          <span className="bg-base">
            <h3>Career</h3>
            <p className="career">
              Right after graduating the university, I set up my own company.
              Youniverse Language Academy is a language school based in
              podkarpackie region. Recently, I have found myself really into
              coding. I have been successfully graduating SheCodes online
              workshops. In my professional life I follow perfection. I always
              do my best in everything. I am not afraid to be challenged. I am a
              fast learner and personally, I believe that the time management
              skill is essential while pursuing professional dreams and goals. I
              value and respect the work and experience of other people. That is
              why team work is important in my life. It does not only give me an
              opportunity to work with experienced people, but also I can share
              my knowledge with others.
            </p>
          </span>
          <div className="resume">
            <a
              href="https://drive.google.com/file/d/1mM4k5zwrdfLL47mAfeMdfKxU9GbItFzv/view?usp=sharing"
              target="_blank"
              title="Download CV"
              rel="noreferrer"
            >
              <button class="btn btn-brand">CV</button>
            </a>
            <a
              href="https://drive.google.com/file/d/10Cib-sEHm52YkQfAKseAvw9kE3tlI99s/view"
              target="_blank"
              title="Download diplomas"
              rel="noreferrer"
            >
              <button class="btn btn-brand">Diplomas</button>
            </a>
          </div>
        </div>
        <div className="p-right">
          <img src={anna} alt="Anna Kuliga" className="rounded-circle" />
        </div>
      </div>
    </div>
  );
};

export default About;
