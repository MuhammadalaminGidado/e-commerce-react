import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="m-4 p-4 border-black shadow-sm flex items-center">
      <div className="flex-1">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/products">
          Products
        </Link>
        <Link className="link" to="/orders">
          Orders
        </Link>
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
