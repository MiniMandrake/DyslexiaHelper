import React from "react";
import ReactDOM from "react-dom/client";
import Dropbox from "./Dropbox";
import Navbar from "./Navbar";
import MindMap from "./MindMap";
import Landing from "./Landing";
import FontConvertor from "./FontConvertor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className='App'>
    <Router>
      <div className='container-fluid'>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/mind_map' element={<MindMap />} />
          <Route path='/font_convertor' element={<FontConvertor />} />
        </Routes>
      </div>
    </Router>
  </div>
);
