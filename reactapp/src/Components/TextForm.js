import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleReverse = () => {
    let newText = text.split("");
    setText(newText.reverse().join(""));
    props.showAlert("text has been reversed", "success");
  };
  const [text, setText] = useState("");
  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "rgb(38, 39, 77)",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>
          Reverse Text
        </button>
      </div>
      <div className="container my-3">
        <h2>your text summary</h2>
        <p>
          {text.length > 0 ? text.trim().split(" ").length : 0} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes of read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "enter something on above box to preview here"}
        </p>
      </div>
    </div>
  );
}
