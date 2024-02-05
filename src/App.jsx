import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
