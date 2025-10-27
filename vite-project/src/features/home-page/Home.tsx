import SearchBar from "../search-bar/SearchBar";
import LinksGrid from "./LinksGrid";
import SigniturePosition from "../../context/potpis-autora/pozicijaPotpisa";

export default function Home() {
  return (
      <div>
        <SearchBar />
        <LinksGrid />
        <SigniturePosition />
      </div>
  );
}
