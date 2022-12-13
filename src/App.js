//! on hold import
// import { getDatabase, ref, onValue, get } from "firebase/database";
// import firebase from "./firebase";
// import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
import "./App.scss";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Request from "./pages/Request";
import Provide from "./pages/Provide";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Provide" element={<Provide />} />
        <Route path="/Request" element={<Request />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//! on hold codes for firebase
// useEffect(() => {
//   const database = getDatabase(firebase);
//   const dbRef = ref(database);
//   get(dbRef)
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//       }
//     })
//     .catch((error) => {
//       alert("There is no request matches your search. Please try again!");
//     });
// }, []);

//! on hold codes for conditional rendering
// const [selectedRequest, setSelectedRequest] = useState(false);
// const [selectedProvide, setSelectedProvide] = useState(false);

{
  /* <div>
      {selectedRequest || selectedProvide ? null : (
        <Home
          setSelectedRequest={setSelectedRequest}
          setSelectedProvide={setSelectedProvide}
        />
      )}
      {selectedRequest && (
        <Request
          setSelectedRequest={setSelectedRequest}
          setSelectedProvide={setSelectedProvide}
        />
      )}
      {selectedProvide && (
        <Provide
          setSelectedRequest={setSelectedRequest}
          setSelectedProvide={setSelectedProvide}
        />
      )}

      <Footer />
    </div> */
}

//TODO: Add Routes and Route
//TODO: Add Sitemap for SEO
//TODO: Add firebase
//TODO: Use Checkbox for multiple selections from provider side
