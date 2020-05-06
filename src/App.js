import React from 'react';
import './App.css';

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

const Quote = ({ quote: { text, author } }) => (
    <>
        <div id="text">{text}</div>
        <div id="author">- {author}</div>
    </>
);

const QuoteMachine = () => {
    const [quote, setQuote] = React.useState(randomItem(quotes));

    const setNewQuote = () => {
        setQuote(randomItem(quotes));
    }

    return (
        <div id="quote-box">
            <Quote quote={quote} />

            <div id="button-box">
                <button id="new-quote" onClick={setNewQuote}>Новая цитата</button>
                <a href={tweetIntent(quote)} id="tweet-quote">Твитнуть цитату</a>
            </div>
        </div>
    );
}

export default QuoteMachine;
