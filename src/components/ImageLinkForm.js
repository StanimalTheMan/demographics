import React from "react";

const ImageLinkForm = ({ handleFormSubmit, handleInputChange }) => {
  const onFormSubmit = (event) => {
    handleFormSubmit(event);
  };

  const onInputChange = (event) => {
    handleInputChange(event);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        onChange={onInputChange}
        type="text"
        placeholder="Enter an image url:"
      ></input>
      <button type="submit">Fetch demographic data</button>
    </form>
  );
};

export default ImageLinkForm;
