import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useCart } from "../providers/CartProvider";

import "./Navigation.css";
const Navigation = () => {
  const { cart } = useCart();
  const userData=useAuth()
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeBtn" : "")}
            >
              خانه
            </NavLink>
          </li>
          <li>
            <img
              style={{ width: "40px", height: "40px" }}
              src="https://s2.uupload.ir/files/running_ahzi.png"
            />
          </li>
        </ul>
        <ul>
          <li className="cartLink">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "activeBtn" : "")}
            >
              سبد خرید
            </NavLink>
            <span className="cartBadge">{cart.length}</span>
          </li>
          <li style={{ color: "#6d28d9" }}>
            <NavLink
              to={userData?"/profile":"/login"}
              className={({ isActive }) => (isActive ? "activeBtn" : "")}
            >
             {userData?"پروفایل" : "ورود"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
