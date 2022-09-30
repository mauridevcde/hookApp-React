import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "mauricio",
    email: "mauricio@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = (event) => {
    console.log(event.target.name);
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("llamando al useEffect");
  }, []);

  useEffect(() => {
    //console.log("llamando al formState");
  }, [formState]);

  useEffect(() => {
    // console.log("llamando al email");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "mauricio" && <Message />}{" "}
    </>
  );
};
