import About from "./components/About";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Mainpage />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
