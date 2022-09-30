import { useEffect } from "react"


export const Message = () => {
    

    useEffect(() => {
        //primero
        console.log("mensaje montado");
        return () => {
            //segundo
            console.log("mensaje desmontado");
        }

    },
    []);

  return (
    <h3 className="mt-2">Usuario ya Existe</h3>
  )
}
