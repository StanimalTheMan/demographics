import React, { useState } from "react";
import ImageLinkForm from "./components/ImageLinkForm";
import DemographicData from "./components/DemographicData";
import SignIn from "./components/SignIn";

const App = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [ageProbability, setAgeProbability] = useState(null);
  const [culturalAppearanceProbability, setCulturalAppearanceProbability] =
    useState(null);
  const [genderProbability, setGenderProbability] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    console.log("here");
    setInput(event.target.value);
  };

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
    console.log("hi", input);
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

  return (
    <>
      <ImageLinkForm
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
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
      <SignIn />
    </>
  );
};

export default App;
