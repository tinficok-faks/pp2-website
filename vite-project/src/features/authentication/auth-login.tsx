import { useAuth0 } from "@auth0/auth0-react";
import type { LoginButtonProps } from "./auth-login-type";

const LoginButton : React.FC<LoginButtonProps> = ({onClick}) => {
    const {loginWithRedirect} = useAuth0();

    return <button onClick={(e) => {onClick?.(e); loginWithRedirect()}}>Login</button>
};

export default LoginButton;