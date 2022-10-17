import { useLayoutEffect, useRef, useState } from "react";

 
export const Quote = ({author, quote}) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({width: 0, height:0});

  useLayoutEffect(() => {
      console.log(pRef.current.getBoundingClientRect());
      const {width, height} = pRef.current.getBoundingClientRect();
      setBoxSize({width, height});
  }, [quote])
  

  return (
    <div>
      <blockquote className="blockquote text-end"
        style={{display: 'flex'}}
      >
        <p ref={pRef} className="mb-0">{author}</p>
        <footer className="blockquote-footer">{quote}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </div>
  );
};
