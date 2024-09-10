import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Conocenos from "./components/Conocenos";

function App() {
  return (
    <>
      <Navbar />
      <div id="section1">
        <Hero />
      </div>
      <div id="section2" className="h-screen bg-gray-300">
        <Conocenos />
      </div>
      <div id="section3" className="h-screen bg-gray-400">
        <h1>Section 3</h1>
      </div>
    </>
  );
}

export default App;
