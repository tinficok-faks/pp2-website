import { useContext } from "react";
import { potpis } from "./potpis";
import "./pozicijaPotpisa.css"

export default function SigniturePosition() {
    const {value} = useContext(potpis)
    return (
            <div className="author-box">
                <p>{value}</p>
            </div>
    );
}