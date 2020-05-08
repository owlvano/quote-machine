import React from 'react';
import Quote from './Quote';
import twitterIcon from '../icons/twitter.svg';

const tweetIntent = (quote) => {
    const tweetText = encodeURI(quote.text + '\n- ' + quote.author);
    return `https://twitter.com/intent/tweet?text=${tweetText}`;
};

const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const quotes = [
    {
        text: 'Когда я родился - участковый застрелился.',
        author: 'Джейсон Стэтхэм',
    },
    {
        text: 'Не слушай тех, кто много обещают, они обычно много обещают.',
        author: 'Волчара',
    },
    {
        text: "Oh, so you're a fan of know Beethoven? Name 5 of his albums!",
        author: 'Сидоджи',
    },
];

const QuoteMachine = () => {
    const [quote, setQuote] = React.useState(randomItem(quotes));

    const setNewQuote = () => {
        setQuote(randomItem(quotes));
    }

    return (
        <div id="quote-box">
            <Quote quote={quote} />

            <div id="button-box">
                <button id="new-quote" className="button" onClick={setNewQuote}>New quote</button>
                <a href={tweetIntent(quote)} id="tweet-quote" className="button" title="Tweet the quote">
                    <img id="twitter-icon" src={twitterIcon} alt="Twitter" />
                </a>
            </div>
        </div>
    );
}

export default QuoteMachine;