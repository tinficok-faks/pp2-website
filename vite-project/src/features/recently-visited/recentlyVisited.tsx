import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./recentlyVisited.css"
import useRecentVisits from "./useRecentVisits";

export default function RecentlyVisited() {
    useRecentVisits
    const [recent, setRecent] = useState<string[]>([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("recentVisits") || "[]");
        setRecent(stored);
    }, []);

    return (
        <div style={{ marginTop: "2rem", padding: "1rem", background: "#f4f4f4", borderRadius: "8px" }}>
            <h3>Recently Visited</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
            {recent.map((path) => (
                <li key={path}>
                <Link to={path}>{path === "/" ? "Home" : path.replace("/", "").toUpperCase()}</Link>
                </li>
            ))}
            </ul>
        </div>
    );
}
