import "./LinksGrid.css"
import calculatorSlika from "images/moj-kalkulator.png"
import weatherAppIcon from "images/weather-app-icon.png"
import tictactoeIcon from "images/tictactoe-icon.png"

function LinksGrid() {
    const links = [
        {url: "/calculator", img: calculatorSlika, alt: "Kalkulator"},
        {url: "/weather", img: weatherAppIcon, alt: "Weather"},
        {url: "/tictactoe", img: tictactoeIcon, alt: "TicTacToe game"},
        {url: "/about", img: "react.svg", alt: "About"},
        {url: "/contact", img: "nema slike trenutno", alt: "Contact"},
        {url: "/testiranje", alt: "Testiranje"},
        {},
        {},
    ];

    return (
        <div className="links-grid-container">
            <div className="links-grid">
                {links.map((link, index) => (
                <a key={index} href={link.url} className="link-item">
                <img src={link.img} alt={link.alt} />
                </a>
            ))}
            </div>
        </div>
    );
}

export default LinksGrid;