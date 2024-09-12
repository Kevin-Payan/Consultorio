import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Conocenos from "./components/Conocenos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Conocenos />
      <div id="section3" className="h-screen bg-gray-400">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          pariatur, rerum ea voluptatum fugit, veritatis quae blanditiis dolor
          exercitationem consectetur aperiam accusamus dolore? Sed unde adipisci
          libero quia repellat corrupti.
        </h1>
      </div>
      <div id="section4" className="h-screen bg-gray-400">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          provident, impedit consequuntur maxime modi libero mollitia dicta
          pariatur perferendis ea voluptates minima cumque error vitae corrupti
          voluptatum expedita, rem aliquam.
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
