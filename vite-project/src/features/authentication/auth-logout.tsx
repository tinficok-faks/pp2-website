import { useAuth0 } from "@auth0/auth0-react";
import type { AuthButtonType } from "./auth-button-type";

const LogoutButton: React.FC<AuthButtonType> = ({ onClick }) => {
    const { logout } = useAuth0();

    return (<button onClick={(e) => {onClick?.(e); logout({ logoutParams: { returnTo: globalThis.location.origin } })}}>Logout</button>);
};

export default LogoutButton;
