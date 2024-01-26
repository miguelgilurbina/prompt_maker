const Prompt = () => {
  return (
    <div className="input-group-lg w-75 position-absolute top-50 start-50 translate-middle">
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
