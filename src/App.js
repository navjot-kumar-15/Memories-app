import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import NoteState from "./Context/Notes/NoteState";
import Alert from "./Components/Alert/Alert";

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
                <Route exact path="/about" element={<About />} />
              </Routes>
            </div>
          </BrowserRouter>
        </NoteState>
      </>
    </div>
  );
}

export default App;
