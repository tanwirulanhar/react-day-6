import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
           <Link to="/">
                <h1>Home</h1>
           </Link>
           <Link to="/login">
                <h1>Login</h1>
           </Link>
        </div>
    );
};

export default Navbar;