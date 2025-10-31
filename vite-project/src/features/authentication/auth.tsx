import { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

export default function Auth() {
    const [user, setUser] = useState<any>(null);
  
    useEffect(() => {
      netlifyIdentity.init();

      netlifyIdentity.on("login", (user:any) => {
        console.log("Logged in:", user);
        setUser(user);
        netlifyIdentity.close();
      });
  
      netlifyIdentity.on("logout", () => {
        console.log("Logged out");
        setUser(null);
      });
  
      return () => {
        netlifyIdentity.off("login");
        netlifyIdentity.off("logout");
      };
    }, []);

  const handleLogin = () => netlifyIdentity.open("login");
  const handleSignup = () => netlifyIdentity.open("signup");
  const handleLogout = () => netlifyIdentity.logout();

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      {!user ? (
        <div>
          <h2>Login or Sign Up</h2>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup} style={{ marginLeft: "10px" }}>
            Sign Up
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.user_metadata.full_name || user.email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
