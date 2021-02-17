import './App.css';
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro"
import { Fade } from "@material-ui/core";

function App() {
  return (
  <Fade in={true}>
    <div className = "container">
      <Navbar />
      <Intro />
    </div>
  </Fade>
  );
}

export default App;
