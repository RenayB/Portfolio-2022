import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Work from "./componets/Work";

function App() { 
  return (
    <div>
      <Navbar></Navbar>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
    </div>
  );
}

export default App;
