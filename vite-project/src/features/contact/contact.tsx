import SigniturePosition from "../../context/potpis-autora/pozicijaPotpisa";
import { potpis } from "../../context/potpis-autora/potpis";
import { useContext } from "react";

export default function Contact() {
    const {value, setValue} = useContext(potpis);
    
    return(
        <div className="center-container">
            <div className="center-box">
                <p>Trenutni autor: {value}</p>
                <input
                type="text"
                placeholder="Change author"
                onChange={(e) => setValue(e.target.value)}
                />
                <SigniturePosition/>
            </div>
        </div>
    );
}