import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import NoteState from "./Context/Notes/NoteState";
import Alert from "./Components/Alert/Alert";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";

function App() {
  return (
    <div className="App">
      <>
        <NoteState>
          <BrowserRouter>
            <Nav />
            <Alert message="This is ankit message" />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </BrowserRouter>
        </NoteState>
      </>
    </div>
  );
}

export default App;
