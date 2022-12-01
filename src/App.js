import { getDatabase, ref, onValue, get } from "firebase/database";
import firebase from "./firebase";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Request from "./pages/Request";
import Provide from "./pages/Provide";
function App() {
  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
        }
      })
      .catch((error) => {
        alert("There is no request matches your search. Please try again!");
      });
  }, []);
  return (
    <div>
      <Route
        path="/"
        element={
          <>
            <header>NBRLYU</header>
            <Home />
          </>
        }
      />
      <Route path="/request" element={<Request />} />

      <Route path="/provide" element={<Provide />} />
    </div>
  );
}

export default App;
