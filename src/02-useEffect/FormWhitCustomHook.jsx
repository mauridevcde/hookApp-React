
import { useForm } from "../hooks/useForm";

export const FormWhitCustomHook = () => {
  const {formState, onInputChange, onResetForm} = useForm({
    username: "",
    email: "",
    password: "",
  });

  const {username, email, password} = formState;


  return (
    <>
      <h1>Formulario con Custoom Hook</h1>
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

      <input
        type="email"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    </>
  );
};
