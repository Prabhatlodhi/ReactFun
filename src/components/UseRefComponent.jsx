import { useRef } from "react";

const UseRefComponent = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const handleSubmit = () => {
    console.log(nameInputRef.current.value, "<===NAME input field se");
    console.log(emailInputRef.current.value, "<===EMAIL input field se");
  };

  return (
    <div>
      <h1>UseRefComponent</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          //   onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          ref={emailInputRef}
          //   onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UseRefComponent;
