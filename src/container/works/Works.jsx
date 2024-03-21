import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wapper";
import { urlFor, client } from "../../client";
import ReadMore from "./ReadMore";
import "./Works.scss";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        <span>My Creative</span> Projects <span>Section</span>
      </h2>

      <div className="app__work-filter">
        {[
          "All",
          "Web App",
          "HTML & CSS",
          "React",
          "JDBC",
          "Java",
          "SpringBoot",
          "Figma",
          "Python",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            <p className="pt-text">{item}</p>
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="card" key={work.title + index}>
            <div className="card_img_container">
              <img
                className="card_img"
                src={urlFor(work.imgUrl)}
                alt={work.name}
              />
            </div>
            <motion.div className="card_design">
              {work.tags.map((tag, index) => (
                <h3 key={index}>{tag}</h3>
              ))}
            </motion.div>
            <h2 className="card_title">{work.title}</h2>
            {work.description.length < 120 ? (
              <p className="card_text">{work.description}</p>
            ) : (
              <ReadMore text={work.description} maxLength={110} />
            )}
            <hr />
            <div className="card_links app__flex">
              {work.projectLink ? (
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <h3>Preview</h3>
                </a>
              ) : null}

              {work.codeLink ? (
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <h3>Code</h3>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Works, "app__works"),
  "project",
  "app__primarybg"
);
