import { memo } from "react"
//memo sirve para memorizar un componente, es decir, que no se vuelva a renderizar si sus propiedades no cambian

export const Small = memo(({value}) => {

    console.log('me volvi a dibujar')
  return (
    <small>{value}</small>
  )
})
