import React from "react";
import Tippy from "@tippyjs/react";

import Git from "../assets/git.svg";
import CSS from "../assets/css.svg";
import JS from "../assets/js.svg";
import Tailwind from "../assets/tailwind.svg";
import ReactSkill from "../assets/react.svg";
import HTML from "../assets/html.svg";

const Skills = () => {
  return (
    <section id="skills" data-aos="fade-right">
      <div className="icons-container">
        <Skill tooltip="HTML5" icon={HTML} />
        <Skill tooltip="React" icon={ReactSkill} />
        <Skill tooltip="CSS3" icon={CSS} />
        <Skill tooltip="JavaScript" icon={JS} />
        <Skill tooltip="Tailwind" icon={Tailwind} />
        <Skill tooltip="Git" icon={Git} />
      </div>
    </section>
  );
};

const Skill = ({ tooltip, icon }) => (
  <Tippy content={tooltip} placement="top" animation="shift-toward">
    <img className="s icon" src={icon} alt="skill" />
  </Tippy>
);

export default Skills;
