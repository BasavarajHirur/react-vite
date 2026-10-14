import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserStateContext, UserActionsContext } from "../utils/userContext";

const Header = () => {
    const status = useOnlineStatus();
    const user = useContext(UserStateContext);
    const { logIn, logOut } = useContext(UserActionsContext);

    const isLoggedIn = Boolean(user);

    return (
        <header className="header">
            <div className="logo">ShopEasy</div>
            <nav className="nav">
                <span>Online Status: {status ? "🟢" : "🔴"}</span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cart" className="cart">🛒 Cart</Link>
                {isLoggedIn && <span>Hi, {user}</span>}
                <button
                    className="cursor-pointer"
                    onClick={isLoggedIn ? logOut : () => logIn("Basavaraja Hiruru")}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </nav>
        </header>
    );
};

export default Header;