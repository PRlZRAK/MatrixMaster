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

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [quote, setQuote] = useState("");
//   const [author, setAuthor] = useState("");

//   function getQuote() {
//     axios
//       .get("https://dummyjson.com/quotes/random")
//       .then((result) => {
//         setQuote(result.data.quote);
//         setAuthor(result.data.author || "Unknown");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   useEffect(() => {
//     getQuote();
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="title">Quote Generator</h1>
//       <div className="quote-box">
//         <p className="quote-text">{quote}</p>
//         <p className="quote-author"> "{author}"</p>
//       </div>
//       <button className="new-quote-btn" onClick={getQuote}>
//         New Quote
//       </button>
//     </div>
//   );
// }

// export default App;
