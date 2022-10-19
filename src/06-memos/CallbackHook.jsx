import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  // use calback funciona como useMemo, pero en vez de retornar un valor, retorna una función

  /*
  useCallback sin argumentos.
  const incrementFather = useCallback(
      () => {
        setCounter( (value ) => value + 1);
      },
      [],
    )*/

    // useCallback con argumentos.
    const incrementFather = useCallback(
      (valorDeArgumento) => {
        setCounter( ( element ) => element + valorDeArgumento);
      },
      []
    )
    
  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>

      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
