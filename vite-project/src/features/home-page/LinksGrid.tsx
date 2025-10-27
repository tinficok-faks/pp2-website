import { Link } from "react-router-dom";
import "./LinksGrid.css"
import calculatorSlika from "images/moj-kalkulator.png"
import weatherAppIcon from "images/weather-app-icon.png"
import tictactoeIcon from "images/tictactoe-icon.png"

function LinksGrid() {

    const links = [
        {element: <Link to="/calculator"><img src={calculatorSlika} alt="Calculator" /></Link>},
        {element: <Link to="/weather"><img src={weatherAppIcon} alt="Weather" /></Link>},
        {element: <Link to="/tictactoe"><img src={tictactoeIcon} alt="TicTacToe" /></Link>},
        {element: <Link to="/about"><img src="react.svg" alt="About" /></Link>},
        {element: <Link to="/contact"><img src="nema slike trenutno" alt="Contact" /></Link>},
        {element: <Link to="/testiranje"><img src="nema slike trenutno" alt="Testiranje" /></Link>},
        {},
        {},
    ];

    return (
        <div className="links-grid-container">
            <div className="links-grid">
                {links.map((item, index) => (
                    <div key={index} className="link-item">
                        {item.element}
                    </div>
))}
            </div>
        </div>
    );
}

export default LinksGrid;