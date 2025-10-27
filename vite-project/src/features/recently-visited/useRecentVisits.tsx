import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useRecentVisits() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const stored = JSON.parse(localStorage.getItem("recentVisits") || "[]");

    const updated = [currentPath, ...stored.filter((p: string) => p !== currentPath)];

    const limited = updated.slice(0, 3);

    localStorage.setItem("recentVisits", JSON.stringify(limited));
  }, [location]);
}
