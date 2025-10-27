import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/home-page/Home";
import MojMenu from "./features/mega-menu/MojMegaMenu";
import Calculator from "./features/calculator/Calculator";
import About from "./features/about/About";
import Weather from "./features/weather/Weather";
import Board from "./features/tictactoe/Board";
import Contact from "./features/contact/contact";
import { PotpisProvider } from "./context/potpis-autora/potpisProvider";
import Testiranje from "./features/testiranje/testiranje";

function App() {
  return (
    <Router>
      <div>
        <MojMenu />
      </div>
      <Routes>
        <Route path="/" element={<PotpisProvider> <Home /> </PotpisProvider>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/calculator" element={<Calculator />}/>
        <Route path="/weather" element={<Weather />}/>
        <Route path="/tictactoe" element={<Board />}/>
        <Route path="/contact" element={<PotpisProvider> <Contact /> </PotpisProvider>}/>
        <Route path="/testiranje" element={<Testiranje />} />
      </Routes>
    </Router>
  );
}

export default App;