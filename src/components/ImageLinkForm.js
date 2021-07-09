import React, { useRef, useState } from "react";
import DemographicData from "./DemographicData";

const ImageLinkForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [age, setAge] = useState(0);
  const [culturalAppearance, setCulturalAppearance] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  //   const imageUrlRef = useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    const response = await fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: imageUrl,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    setCulturalAppearance(
      data.results[0].outputs[2].data.regions[0].data.concepts[0].name
    );
    setAge(data.results[0].outputs[4].data.regions[0].data.concepts[0].name);
  };

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Enter an image url:"
      ></input>
      <button type="submit">Fetch demographic data</button>
      {isFormSubmitted && (
        <DemographicData
          imgUrl={imageUrl}
          age={age}
          culturalAppearance={culturalAppearance}
        />
      )}
    </form>
  );
};

export default ImageLinkForm;
