const EmailInput = () => {
  return (
    <div className="flex flex-col my-2">
      <h1 className="text-center mb-5 text-2xl">What can we help you with?</h1>
      <label htmlFor="email">Email</label>
      <input
        className="text-black m-1 focus:outline-none"
        type="text"
        name="data"
        id="email"
      />
    </div>
  );
};

export default EmailInput;
