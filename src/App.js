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
    try {
      const response = await fetch("http://localhost:3001/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: input,
        }),
      });

      const data = await response.json();

      setCulturalAppearanceProbability(
        data.results[0].outputs[2].data.regions[0].data.concepts
      );
      setAgeProbability(
        data.results[0].outputs[4].data.regions[0].data.concepts
      );
      setGenderProbability(
        data.results[0].outputs[3].data.regions[0].data.concepts
      );
      displayFaceBox(
        calculateFaceLocation(
          data.results[0].outputs[2].data.regions[0].region_info.bounding_box
        )
      );
      // setBox(data.results[2].outputs[2].data.regions[0].region_info.bounding_box);
    } catch (error) {
      console.log("Error occured while trying to fetch data");
    }
  };

  const calculateFaceLocation = (clarifaiFace) => {
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    console.log(clarifaiFace.left_col * width);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: clarifaiFace.right_col * width,
      bottomRow: clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    setBox(box);
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
            box={box}
          />
        )}
      <SignIn />
    </>
  );
};

export default App;
