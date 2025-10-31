import SearchBar from "../search-bar/SearchBar";
import LinksGrid from "./LinksGrid";
import SigniturePosition from "../../context/potpis-autora/pozicijaPotpisa";
import Auth from "../authentication/auth";
import LoginButton from "../authentication/auth-login";

export default function Home() {
  return (
      <div>
        <SearchBar />
        <LinksGrid />
        <SigniturePosition />
        <LoginButton />
        <Auth />
      </div>
  );
}
