import { useCounter, useFetch } from "../hooks/indexBarril";
import { LoadingQuotes } from "./LoadingQuotes";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  console.log(author, quote);

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />
    {
        loading ? (
            <LoadingQuotes />
        ) : (
            <Quote author={author} quote={quote} />
        )

    }
      
      <button
        className="btn btn-primary"
        disabled={loading}
        onClick={() => increment(1)}
      >
        Siguiente frase
      </button>
    </>
  );
};
