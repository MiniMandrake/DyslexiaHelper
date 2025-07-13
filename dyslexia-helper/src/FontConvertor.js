import React, { useState } from "react";
import MyButton from "./MyButton";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const payload =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum";

function FontConvertor() {
  return (
    <div className='container-fluid' style={{ alignContent: "center" }}>
      Font Convertor {payload}
      <div className=''>
        <MyButton />
      </div>
      <Stack direction='horizontal' gap={3}>
        <Button> Open Dyslexia </Button>
        <Button> Arial </Button>
        <Button> Times New Roman </Button>
      </Stack>
    </div>
  );
}

export default FontConvertor;
