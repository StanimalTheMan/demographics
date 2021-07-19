import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ handleFormSubmit, handleInputChange }) => {
  const onFormSubmit = (event) => {
    handleFormSubmit(event);
  };

  const onInputChange = (event) => {
    handleInputChange(event);
  };

  return (
    <form className="center" onSubmit={onFormSubmit}>
      <div className="form center pa4 br3 shadow-5">
        <input
          onChange={onInputChange}
          type="text"
          placeholder="Enter an image url:"
        ></input>
        <button type="submit">Fetch demographic data</button>
      </div>
    </form>
    // <div>
    //   <p className="f3">
    //     {"This Magic Brain will analyze faces.  Git it a try."}
    //   </p>
    //   <div className="center">
    //     <div className="form center pa4 br3 shadow-5">
    //       <input
    //         className="f4 pa2 w-70 center"
    //         type="text"
    //         onChange={onInputChange}
    //       />
    //       <button
    //         className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
    //         onClick={onFormSubmit}
    //       >
    //         Analyze
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ImageLinkForm;
