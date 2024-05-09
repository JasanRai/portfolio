import "./App.css";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <SocialLinks />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
