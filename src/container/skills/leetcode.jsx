import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

const Leetcode = () => {
  const [leetcode, setleetcode] = useState([]);

  useEffect(() => {
    const query = '*[_type == "leetcodeIcons"]';

    client.fetch(query).then((data) => {
      setleetcode(data);
    });
  }, []);

  return (
    <div className="app__skills-acc-leet">
      {leetcode.map((code) => (
        <motion.div
          whileHover={{ scale: [1, 1.05] }}
          transition={{ duration: 0.25 }}
          className="app__skills-acc-leet-item"
          key={code.name}
        >
          <img src={urlFor(code.icon)} alt={code.name} />
          <p className="p-text">{code.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Leetcode;
