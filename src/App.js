import Home from "./pages/Home";
import Request from "./pages/Request";
import Provide from "./pages/Provide";
import { getDatabase, ref, onValue, get } from "firebase/database";
import firebase from "./firebase";
import { useEffect } from "react";
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
      <header>NBRLYU</header>
      <Home />
      <Request />
      <Provide />
    </div>
  );
}

export default App;
