import React from "react";
import "./DemographicData.css";

const DemographicData = ({
  imgUrl,
  culturalAppearanceData,
  ageData,
  genderData,
  box,
}) => {
  console.log(box.topRow, box.rightCol, box.bottomRow, box.leftCol);
  return (
    <>
      <div className="center ma">
        <div className="absolute mt2">
          <img
            id="inputimage"
            alt=""
            src={imgUrl}
            width="500px"
            height="auto"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        </div>
      </div>
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
