import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  // use calback funciona como useMemo, pero en vez de retornar un valor, retorna una función

  const incrementFather = useCallback(
      () => {
        setCounter( (value ) => value + 1);
      },
      [],
    )
    
  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>

      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
