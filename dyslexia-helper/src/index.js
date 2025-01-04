import React from "react";
import ReactDOM from "react-dom/client";
import Dropbox from "./Dropbox";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className='App'>
    <Router>
      <div className='container-fluid' style={{ padding: "1rem" }}>
        <Navbar />
      </div>
      <div style={{ paddingTop: "4rem" }}>
        <Routes>
          <Route path='/' element={<Dropbox />} />
          {/* <Route path='/training_plans' element={<TrainingPlans />} />
            <Route path='/appointments' element={<ScheduleAppt />} />
            <Route path='/feedback' element={<CustomerFeedback />} /> */}
        </Routes>
      </div>
    </Router>
  </div>
);
