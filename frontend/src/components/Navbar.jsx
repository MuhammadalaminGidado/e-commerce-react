import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-3/4 m-4 p-4 border-black shadow-sm">
      <div className="">
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
    </nav>
  );
};

export default Navbar;
