import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useRecentPages() {
    const location = useLocation();
    const [recentPages, setRecentPages] = useState<string[]>([]);

    useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentPages") || "[]") as string[];

    if (location.pathname === "/") return;

    const updated = [location.pathname, ...stored.filter((p) => p !== location.pathname)].slice(0, 3);

    localStorage.setItem("recentPages", JSON.stringify(updated));
    setRecentPages(updated);
    }, [location]);

    useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentPages") || "[]");
    setRecentPages(stored);
    }, []);

    return recentPages;
}
