import { useState } from "react";
import './Calculator.css'

function Calculator() {
    const [input, setInput] = useState("");

	// za brojeve i operatore
    const handleClick = (value: String) => {
      setInput(input + value);
    };

	const handleClear = () => { setInput("") };

	// tipka "="
	const handleCalculate = () => {
		try {
			setInput(eval(input).toString());
		} catch (error) {
			setInput("Error")
		}
	};

	return (
		<div className="calculator-container">
			<input
			type="text"
			className="calculator-input"
			value={input}
			placeholder="0"
			readOnly
			/>

			<div className="calculator-buttons">
				{[
					"7", "8", "9", "/",
					"4", "5", "6", "*",
					"1", "2", "3", "-",
					"0", ".", "=", "+"
				].map((btn) => (
					<button
						key={btn}
						className="calc-btn"
						onClick={() => btn === "=" ? handleCalculate() : handleClick(btn)}
					>
						{btn}
					</button>
				))}
				<button className="calc-btn claer-btn" onClick={handleClear}>C</button>
			</div>
		</div>
	);
}

export default Calculator;