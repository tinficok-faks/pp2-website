import React, { useState } from "react";
import "./SearchBar.css"

function SearchBar() {
    const [query, setQuery] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert("Pretrazio si: " + query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                className="search-input"
            />
            <button type="submit" className="search-button">Go</button>
        </form>
    );
}

export default SearchBar;