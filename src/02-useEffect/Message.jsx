import { useEffect, useState } from "react"


export const Message = () => {
    const [cordenadas, setCordenadas] = useState({x:0, y:0})

    useEffect(() => {
        const onMouseMove = ({x ,y}) => {
            setCordenadas({x, y})
        }

        window.addEventListener("mousemove", onMouseMove)

        return () => {
            window.removeEventListener("mousemove", onMouseMove)
        }

    }, []);

  return (
    <>
        <h3 className="mt-2">Usuario ya Existe</h3>
        <h1> {JSON.stringify(cordenadas)} </h1>
    </>
    
  )
}
