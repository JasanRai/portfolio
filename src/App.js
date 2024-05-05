import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <SocialLinks />
      <Skills />
    </div>
  );
}

export default App;
