import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import RamdonBuntton from "../components/ramdonBuntton";
import { QuoteInterface } from "../interface";

const Author = () => {
  const { author } = useParams<{ author: string }>();

  const [render, setRender] = useState(false);
  const [quotesAuthor, setQuotesAuthor] = useState<QuoteInterface[]>();
  useEffect(() => {
    generateRandomQuote();
  }, [render]);

  const generateRandomQuote = () => {
    return fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=3`
    )
      .then((res) => res.json())
      .then((data) => setQuotesAuthor(data.data));
  };

  return (
    <div>
      <nav className="header_1">
        <Link className="arrowback" to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width={24}
            height={24}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>

        <RamdonBuntton onClick={() => setRender(!render)} />
      </nav>
      <main>
        <h2 className="author">{author}</h2>
        <div className="listQuotes">
          {quotesAuthor?.map((quote: QuoteInterface) => (
            <p className="quote">{quote.quoteText}</p>
          ))}
        </div>
      </main>

      <footer>Creado por Yajhura </footer>
    </div>
  );
};

export default Author;
