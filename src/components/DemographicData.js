import React from "react";

const DemographicData = ({ imgUrl }) => {
  return (
    <>
      <p>{imgUrl}</p>
      <img src={imgUrl} alt="" />
    </>
  );
};

export default DemographicData;
