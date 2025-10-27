import { useState, type ChangeEvent } from "react";
import './About.css'

function About() {
    const [text, setText]=useState("tficok@mathos.hr");

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert("Copied the text: " + text);
    }

    const handleTextChange = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setText(event.target.value);
    }
    
    return (
        <div>
            <h1>About me</h1>
            <input type="text" value={text} onChange={handleTextChange}/>
            <button onClick={handleCopyToClipboard}>Copy text</button>
        </div>
    );
}

export default About;