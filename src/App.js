import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import NoteState from "./Context/Notes/NoteState";
import Alert from "./Components/Alert/Alert";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  // Function to showing the alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };
  return (
    <div className="App">
      <>
        <NoteState>
          <BrowserRouter>
            <Nav />
            <Alert alert={alert} />
            <div className="container">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home showAlert={showAlert} />}
                />
                <Route
                  exact
                  path="/login"
                  element={<Login showAlert={showAlert} />}
                />
                <Route
                  exact
                  path="/signup"
                  element={<Signup showAlert={showAlert} />}
                />
              </Routes>
            </div>
          </BrowserRouter>
        </NoteState>
      </>
    </div>
  );
}

export default App;
