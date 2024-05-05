import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
    </div>
  );
}

export default App;
