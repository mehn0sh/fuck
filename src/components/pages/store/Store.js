import { useState } from "react";
import { NavLink } from "react-router-dom";
import { womenProducts } from "../../data";
import Both from "../both/Both";
import MenShoe from "../Home/menShoe/MenShoe";
import KidsShoe from "../KidsShoe/KidsShoe";
import WomenShoe from "../women/WomenShoe";
import "./store.css";

const Store = () => {
  const [WomenProduct, setWomenProduct] = useState(false);
  const [MenProducts, setMenProducts] = useState(false);
  const [KidsProduct, setKidsProduct] = useState(false);
  const [bothProduct, setbothProduct] = useState(false);
  const womenProductHandler = () => {
    setWomenProduct(true);
    setMenProducts(false);
    setKidsProduct(false);
    setbothProduct(false);
  };
  const menProductsHandler = () => {
    setWomenProduct(false);
    setMenProducts(true);
    setKidsProduct(false);
    setbothProduct(false);
  };
  const kidsProductHandler = () => {
    setWomenProduct(false);
    setMenProducts(false);
    setKidsProduct(true);
    setbothProduct(false);
  };
  const bothProductHandler = () => {
    setWomenProduct(false);
    setMenProducts(false);
    setKidsProduct(false);
    setbothProduct(true)
  };
  return (
    <div>
      <section className="storeStyle">
        <ul>
          <li
            onClick={womenProductHandler}
            className={WomenProduct && "active"}
          >
            زنانه
          </li>
          <li onClick={menProductsHandler} className={MenProducts && "active"}>
            مردانه
          </li>

          <li onClick={kidsProductHandler} className={KidsProduct && "active"}>
            بچه گانه
          </li>

          <li onClick={bothProductHandler} className={bothProduct && "active"}>
            اسپرت
          </li>
        </ul>
      </section>
{!WomenProduct&&!MenProducts&& !KidsProduct&& !bothProduct&& <WomenShoe/>}
      {WomenProduct && <WomenShoe />}
      {MenProducts&&<MenShoe/>}
      {KidsProduct&&<KidsShoe/>}
      {bothProduct&&<Both/>}
    </div>
  );
};

export default Store;
