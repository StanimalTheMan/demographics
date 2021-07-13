import React, { useState, useRef } from "react";

const SignIn = () => {
  const [signInEmail, signInPassword] = useState("");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("temporary sign in");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input ref={emailInputRef} type="text" placeholder="Type in your email" />
      <input
        ref={passwordInputRef}
        type="text"
        placeholder="Type in your password"
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
