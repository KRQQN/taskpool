const TextAreaInput = () => {
  return (
    <textarea
      className="my-4 text-black focus:outline-none"
      name="description"
      cols={30}
      rows={5}
      style={{ resize: "none" }}
    ></textarea>
  );
};

export default TextAreaInput;