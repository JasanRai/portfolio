import "./App.css";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App h-dvh bg-cyan-950">
      <Navbar />
      <Introduction />
    </div>
  );
}

export default App;
