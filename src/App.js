import "./App.scss";
// import firebase from "./firebase";
// import { getDatabase, ref, onValue, get } from "firebase/database";
// import { useEffect, useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Request from "./pages/Request";
import Provide from "./pages/Provide";
import CancelReq from "./pages/CancelReq";
import SubmitReq from "./pages/SubmitReq";
import Results from "./pages/Results";
import Warning from "./pages/Warning";
import Error from "./pages/Error";

function App() {
  //localStorage.clear();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Provide" element={<Provide />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Request" element={<Request />} />
        <Route path="/CancelReq" element={<CancelReq />} />
        <Route path="/SubmitReq" element={<SubmitReq />} />
        <Route path="/Warning" element={<Warning />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
