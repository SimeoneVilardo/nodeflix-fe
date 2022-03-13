import Home from "./Pages/Home";
import Player from "./Pages/Player";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NodeFlix
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:hash" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
