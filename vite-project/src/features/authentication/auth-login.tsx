import { useAuth0 } from "@auth0/auth0-react";
import type { AuthButtonType } from "./auth-button-type";

const LoginButton : React.FC<AuthButtonType> = ({onClick}) => {
    const {loginWithRedirect} = useAuth0();

    return <button onClick={(e) => {onClick?.(e); loginWithRedirect()}}>Login</button>
};

export default LoginButton;