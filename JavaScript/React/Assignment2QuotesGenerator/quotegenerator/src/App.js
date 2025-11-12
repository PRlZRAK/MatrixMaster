import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quotes, setQ] = useState([]);

  function getRandomQuote() {
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((result) => {
        setQ(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Quotes Generator</h1>
      </header>
      <main>
        <p className="quote">{quotes.data?.quote}</p>
        <p className="author"> "{quotes.data?.author}"</p>
      </main>
      <footer>
        <button onClick={getRandomQuote}>New Quote</button>
      </footer>
    </div>
  );
}

export default App;

