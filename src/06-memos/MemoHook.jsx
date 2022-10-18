import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";


function heavyProcess(num) {
  for (let i = 0; i < num; i++) {
    console.log('Ahi vamos...');
  }
  return `${num} iteraciones realizadas.`;
}


export default function MemoHook() {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyProcess(counter), [counter])


  return (
    <>
      <h1>
        <small>{counter}</small>
      </h1>

      <hr />


      <h4>{memorizedValue}</h4>

      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>

      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
}
