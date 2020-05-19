import React from "react";
import Quote from "./Quote";
import quotes from "../data/quotes.json";
import twitterIcon from "../icons/twitter.svg";

const tweetIntent = (quote) => {
  const tweetText = encodeURI(quote.text + "\n- " + quote.author);
  return `https://twitter.com/intent/tweet?text=${tweetText}`;
};

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const QuoteMachine = () => {
  const [quote, setQuote] = React.useState(randomItem(quotes));

  const setNewQuote = () => {
    setQuote(randomItem(quotes));
  };

  return (
    <div id="quote-box">
      <Quote quote={quote} />

      <div id="button-box">
        <button id="new-quote" className="button" onClick={setNewQuote}>
          New quote
        </button>
        <a
          href={tweetIntent(quote)}
          id="tweet-quote"
          className="button"
          title="Tweet the quote"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="twitter-icon" src={twitterIcon} alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default QuoteMachine;
