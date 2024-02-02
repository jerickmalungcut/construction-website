import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}

export default App;
