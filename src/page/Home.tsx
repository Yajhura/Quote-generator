import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RamdonBuntton from "../components/ramdonBuntton";
import { QuoteInterface } from "../interface";

const Home = () => {
  const [random, setRandom] = useState(false);
  const [randomQuote, setRandomQuote] = useState<QuoteInterface>();

  useEffect(() => {
    generateRandomQuote();
  }, [random]);
  const generateRandomQuote = () => {
    return fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((res) => res.json())
      .then((data) => setRandomQuote(data.data[0]));
  };

  return (
    <div>
      <nav className="header">
        <RamdonBuntton onClick={() => setRandom(!random)} />
      </nav>
      <section className="main">
        <p className="quote">{randomQuote?.quoteText ?? "Cargando"}</p>
        <Link to={`/author/${randomQuote?.quoteAuthor}`}>
          <div className="quote-detail">
            <div>
              <p className="quote-author">
                {randomQuote?.quoteAuthor ?? "Cargando"}
              </p>
              <p className="quote-genre">
                {randomQuote?.quoteGenre ?? "Cargando"}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>
      </section>

      <footer className="footer2">Creado por Yajhura </footer>
    </div>
  );
};

export default Home;
