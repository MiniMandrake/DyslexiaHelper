import "./styles/App.css";
import "./styles/Landing.css";
import Dropbox from "./Dropbox";
import React, { useState } from "react";

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
    <div style={{ padding: "1rem" }}>
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
  return <div>HEHEHHAHA</div>;
}

export default Landing;
