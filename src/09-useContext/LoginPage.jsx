import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setuser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <pre aria-label="pre">{ JSON.stringify( user, null, 3 ) }</pre>

      <button className="btn btn-primary"
        onClick={() => setuser({ id: 1, name: "Mauricio" })}
      >Loguear</button>
    </>
  );
};
