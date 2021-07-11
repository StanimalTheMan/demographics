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
        {culturalAppearanceData.map((culturalAppearance, ind) => (
          <p key={ind}>
            {culturalAppearance.name} - {culturalAppearance.value}
          </p>
        ))}
        {ageData.map((data, ind) => (
          <p key={ind}>
            {data.name} - {data.value}
          </p>
        ))}
        {genderData.map((data, ind) => (
          <p key={ind}>
            {data.name} - {data.value}
          </p>
        ))}
      </div>
    </>
  );
};

export default DemographicData;
