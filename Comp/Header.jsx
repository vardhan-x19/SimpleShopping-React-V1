import { CgProfile } from "react-icons/cg";
import { FaGrinHearts } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            // src="/images/myntra_logo.webp"
            src="/images/shop9.png"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          {/* <span className="material-symbols-outlined action_icon">person</span> */}
          <CgProfile />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          {/* <span className="material-symbols-outlined action_icon">favorite</span> */}
          <FaGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          {/* <span className="material-symbols-outlined action_icon">shopping_bag</span> */}
          <IoBagAdd />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">0</span>
        </Link>
      </div>
    </header>
  );
}
export default Header;
