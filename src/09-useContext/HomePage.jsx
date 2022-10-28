import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user, setuser } = useContext(UserContext);
    return (
      <>
          <h1>home Page</h1>
          <hr />
          <pre>{JSON.stringify(user, null, 3)}</pre>
      </>
    )
  }