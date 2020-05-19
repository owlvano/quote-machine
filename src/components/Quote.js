import React from "react";

const Quote = ({ quote: { text, author } }) => (
  <>
    <div id="text">{text}</div>
    <div id="author">
      <i>- {author}</i>
    </div>
  </>
);

export default Quote;
