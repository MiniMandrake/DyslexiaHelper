import "./styles/App.css";
import "./styles/Landing.css";
import Dropbox from "./Dropbox";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Landing() {
  // const [payload, setPayload] = useState("");
  const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);

  const [url, setURL] = useState("");

  return (
    <div className='main'>
      {/* <Dropbox /> */}

      <div className='twoColumns'>
        <URL_dropper url={url} setURL={setURL} />
        <File_Dropper />
        {url}
      </div>

      {/* <div className='grid-wrapper'>
        {items.map((text) => (
          <div className='grid-item' key={text}>
            {text}
          </div>
        ))}
      </div> */}
    </div>
  );
}

function URL_dropper({ url, setURL }) {
  //   const [text, setText] = useState("");
  const handleChange = (event) => {
    setURL(event.target.value); // updates the variable on every keystroke
  };

  return (
    <div className='twoColumns-item' style={{ padding: "1rem" }}>
      <input
        type='text'
        value={url}
        onChange={handleChange}
        placeholder='Type something...'
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "0.25rem",
          border: "1px solid #ccc",
          width: "100%",
          maxWidth: "300px",
        }}
      />
      <p style={{ marginTop: "0.75rem" }}>You typed: {url}</p>
    </div>
  );
}

function File_Dropper(params) {
  const [output, setOutput] = useState(
    "Hello! Input a file above and your text will appear here!"
  );

  const dropHandler = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setOutput(`File dropped: ${file.name}`);
    } else {
      setOutput("No file detected. Please try again!");
    }
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Container className='twoColumns-item'>
      <div
        className='centerMyItem'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id='dropzone' onDrop={dropHandler} onDragOver={dragOverHandler}>
          <p style={{ textAlign: "center" }}>
            Drag one file here. <br />
            <i>Currently not functional</i>
          </p>
        </div>
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {output}
      </p>
    </Container>
  );
}

export default Landing;
