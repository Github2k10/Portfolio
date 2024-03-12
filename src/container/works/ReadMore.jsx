import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  let [isTruncated, setIsTruncated] = useState(true);
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <>
      {isTruncated ? (
        <p className="card_text">
          {`${text.slice(0, maxLength)}... `}
          <span onClick={toggleTruncate}>Read More</span>
        </p>
      ) : (
        <p className="card_text">
          {text}
          <span onClick={toggleTruncate}> Read Less</span>
        </p>
      )}
      {/* <button onClick={toggleTruncate}>
        {isTruncated ? "Read More" : "Show Less"}
      </button> */}
    </>
  );
};

export default ReadMore;
