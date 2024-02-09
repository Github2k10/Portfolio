import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import Leetcode from "./leetcode";
import HackerRank from "./hackerRank";
import GitHub from "./github";

const ACCOMPLISHMENTS_TAGS = [
  {
    label: "leetcode",
    component: <Leetcode />,
  },
  {
    label: "hackerRank",
    component: <HackerRank />,
  },
  {
    label: "GitHub",
    component: <GitHub />,
  },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const handleTagFilter = (index) => {
    setActiveIndex(index);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        <span>My Skills &</span> Accomplishments
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-acc">
          <div className="app__accomplishments-filter">
            {ACCOMPLISHMENTS_TAGS.map((item, index) => (
              <div
                key={item.label}
                onClick={() => handleTagFilter(index)}
                className={`app__accomplishments-filter-item app__flex ${
                  activeIndex === index ? "item-active" : ""
                }`}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__accomplishments-container"
          >
            {ACCOMPLISHMENTS_TAGS[activeIndex].component}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
