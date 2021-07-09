import React from "react";

const DemographicData = ({
  imgUrl,
  culturalAppearanceData,
  ageData,
  genderData,
}) => {
  return (
    <>
      <p>{imgUrl}</p>
      <img src={imgUrl} alt="" />
      <div>
        {culturalAppearanceData[0].name}
        {ageData[0].name}
        {genderData[0].name} - {genderData[0].value}
      </div>
    </>
  );
};

export default DemographicData;
