import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked ' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClearClick = () => {
    // console.log('Uppercase was clicked ' + text);
    let newText = '';
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log('handleOnChange');
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  };

  const [text, setText] = useState('');
  //   setText('no, YOu shoul enter here: ');

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear the text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extraspace
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} charcaters
        </p>
        <p>{0.008 * text.split(' ').length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
