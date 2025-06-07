import React, { useState } from "react";
import "./styles/dropbox.css";
import { Container } from "react-bootstrap";

function Dropbox() {
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
    <Container>
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

export default Dropbox;
