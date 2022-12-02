//! on hold import
// import { getDatabase, ref, onValue, get } from "firebase/database";
// import firebase from "./firebase";
// import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
import { useState } from "react";
import Home from "./pages/Home";
import Request from "./pages/Request";
import Provide from "./pages/Provide";
import React from "react";
function App() {
  const [selectedRequest, setSelectedRequest] = useState(false);
  const [selectedProvide, setSelectedProvide] = useState(false);
  return (
    <div>
      <header>NBRLYU</header>
      <Home
        setSelectedRequest={setSelectedRequest}
        setSelectedProvide={setSelectedProvide}
      />
      {selectedRequest && <Request />}
      {selectedProvide && <Provide />}
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

//! on hold codes for route
{
  /* <Route
        path="/"
        element={
          <>
            <header>NBRLYU</header>
            <Home />
          </>
        }
      />
      <Route path="/request" element={<Request />} />

      <Route path="/provide" element={<Provide />} /> */
}
