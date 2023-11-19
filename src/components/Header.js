import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-items">
      <div className="logo">
        <img src={""} alt="logo" />
      </div>
      {}
      <div className="shopping-cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-length">0</span>
      </div>
    </div>
  );
};

export default Header;
