import React from "react";

const Prompt = () => {
  return (
    <div className="input-group-lg mb-3  flex-nowrap">
      <span
        className="input-group-text"
        id="addon-wrapping inputGroup-sizing-lg"
      ></span>
      <input
        type="text"
        className="form-control"
        placeholder="Prompt Maker"
        aria-label="Prompt Maker"
        aria-describedby="addon-wrapping inputGroup-sizing-lg"
      ></input>
    </div>
  );
};

export default Prompt;
