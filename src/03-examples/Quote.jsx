export const Quote = ({author, quote}) => {
  return (
    <div>
      <blockquote className="blockquote text-end">
        <p className="mb-0">{author}</p>
        <footer className="blockquote-footer">{quote}</footer>
      </blockquote>
    </div>
  );
};
