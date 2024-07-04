import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MiddleSection from "./components/MiddleSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Navbar />
      </div>
      <Hero />
      <div className="w-[90%] m-auto">
        <MiddleSection />
      </div>

      <Footer />
    </>
  );
};

export default App;
