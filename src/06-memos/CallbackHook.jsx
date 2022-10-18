import { useState } from "react";

export const CallbackHook = () => {
    const { counter, increment } = useState(10);
  
    return (
    <>
        <h1>useCallBack Hook: {counter}</h1>
    </>
  )
}
