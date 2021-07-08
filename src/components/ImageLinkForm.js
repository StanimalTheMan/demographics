import React, { useRef, useState } from "react";
import DemographicData from "./DemographicData";

const ImageLinkForm = () => {
  const [imageUrl, setImageUrl] = useState("");
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
      {isFormSubmitted && <DemographicData imgUrl={imageUrl} />}
    </form>
  );
};

export default ImageLinkForm;
