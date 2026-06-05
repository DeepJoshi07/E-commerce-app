import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router";

const user = { _id: "1", role: "admin" };

const Header = () => {
    const [isOpen,setisOpen] = useState(false);
  return (
    <nav className="header">
      <Link to={"/"} onClick={() => setisOpen(false)}>Home</Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <FaShoppingBag />
      </Link>

      {user?._id?(
        <>
          <button onClick={() => setisOpen(prev => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link to="/admin/dashboard">Admin</Link>
              )}
              <Link to="/order">Orders</Link>
              <button>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
