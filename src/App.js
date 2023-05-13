import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Table from "./components/Table";
import LetterCards from "./components/LetterCards";
import Game from "./components/Game";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-structure">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} index />
              <Route path="/table" element={<Table />} />
              <Route path="/lettercards" element={<LetterCards />} />
              <Route path="/game" element={<Game />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
