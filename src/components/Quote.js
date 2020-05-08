import React from 'react';

const Quote = ({ quote: { text, author } }) => (
    <>
        <div id="text">{text}</div>
        <div id="author">- {author}</div>
    </>
);

export default Quote;