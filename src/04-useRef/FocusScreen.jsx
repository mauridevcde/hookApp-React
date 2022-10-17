import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);
 
  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <>

      <h1>Focus Screen</h1>
      
      <hr />

      <input
        type="text"
        ref={inputRef}
        placeholder="Su nombre"
        className="form-control"
      />

      <button className="btn btn-outline-primary mt-2"  onClick={handleClick}> set focus</button>

    </>
  );
};