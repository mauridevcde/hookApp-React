import { useState } from "react";


export function useCounter(initialValue = 10) {

    const [counter, setCounter] = useState(initialValue);
//se usa el current para que no se pierda el valor actual del counter
    const increment = (value= 1) => {
        setCounter( (current) => current + value);
    }

    const decrement = (value=1) => {
        setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}

