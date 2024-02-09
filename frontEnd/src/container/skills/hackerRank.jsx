import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

const HackerRank = () => {
  const [hackerRank, setHackerRank] = useState([]);

  useEffect(() => {
    const query = '*[_type == "hackerRankBadges"]';

    client.fetch(query).then((data) => {
      setHackerRank(data);
    });
  }, []);

  return (
    <>
      <div className="app__skills-acc-hack">
        {hackerRank.map((code) => (
          <motion.div
            whileHover={{ scale: [1, 1.05] }}
            transition={{ duration: 0.25 }}
            className="app__skills-acc-hack-item"
            key={code.name}
          >
            <img src={urlFor(code.icon)} alt={code.name} />
            <p className="p-text">{code.name}</p>
            <p className="p-text">{code.level}</p>
            <p className="p-text">{code.points + "+"}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default HackerRank;
