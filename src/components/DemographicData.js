import React from "react";

const DemographicData = ({ imgUrl, culturalAppearance, age }) => {
  return (
    <>
      <p>{imgUrl}</p>
      <img src={imgUrl} alt="" />
      <div>
        {culturalAppearance}
        {age}
      </div>
    </>
  );
};

export default DemographicData;
