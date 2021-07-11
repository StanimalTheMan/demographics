import React, { useRef, useState } from "react";
import DemographicData from "./DemographicData";

const ImageLinkForm = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ageProbability, setAgeProbability] = useState(null);
  const [culturalAppearanceProbability, setCulturalAppearanceProbability] =
    useState(null);
  const [genderProbability, setGenderProbability] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  //   const imageUrlRef = useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setImageUrl(input);
    const response = await fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: input,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    setCulturalAppearanceProbability(
      data.results[0].outputs[2].data.regions[0].data.concepts
    );
    setAgeProbability(data.results[0].outputs[4].data.regions[0].data.concepts);
    setGenderProbability(
      data.results[0].outputs[3].data.regions[0].data.concepts
    );
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Enter an image url:"
      ></input>
      <button type="submit">Fetch demographic data</button>
      {isFormSubmitted &&
        ageProbability &&
        culturalAppearanceProbability &&
        genderProbability && (
          <DemographicData
            imgUrl={imageUrl}
            ageData={ageProbability}
            culturalAppearanceData={culturalAppearanceProbability}
            genderData={genderProbability}
          />
        )}
    </form>
  );
};

export default ImageLinkForm;
