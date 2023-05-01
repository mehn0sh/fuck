import { useCart, useCartAction } from "../providers/CartProvider";
import { useProduct, useProductAction } from "./ProductProvider";
import * as data from "../../components/data";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "./product.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const Product = () => {
  var product;
  const checkInCart = (cart, product) => {
    return cart.find((c) => c.id == product.id);
  };
  const dispatch = useCartAction();
  const addProductHandler = (product) => {
    toast.success(` با موفقیت به سبد خرید اضافه شد`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const { cart } = useCart();
  const [DESCRIPTION, setDESCRIPTION] = useState(false);
  const [DETAILS, setDETAILS] = useState(false);

  const DESCRIPTIONHandler = () => {
    setDESCRIPTION(true);
    setDETAILS(false);
  };
  const DETAILSHandler = () => {
    setDESCRIPTION(false);
    setDETAILS(true);
  };

  const { temp, type } = useProduct();

  const dispatchP = useProductAction();
  type ? (product = data[type].find((i) => i.id == temp)) : <p>hichi nist</p>;
  return (
    <div>
      {console.log(product)}
      {product ? (
        <div className="container1">
          <p className="productName">{product.name}</p>
          <section className="productStyle">
            <div className="ImgContainer">
              <PhotoProvider>
                {product.image.map((i) => {
                  return (
                    <PhotoView src={i}>
                      <img src={i} alt="" className="imageProduct" />
                    </PhotoView>
                  );
                })}
              </PhotoProvider>
            </div>
            <ul>
              <div className="productTitile">
                <li
                  onClick={DESCRIPTIONHandler}
                  className={DESCRIPTION && "active"}
                >
                  توضیحات
                </li>
                <li onClick={DETAILSHandler} className={DETAILS && "active"}>
                  جزیات
                </li>
              </div>
            </ul>
          </section>
          <div className="descreption">
            {DESCRIPTION && product.description}
          </div>
          <div className="descreption">
            {DETAILS &&
              product.detail.map((item) => (
                <ul>
                  <li style={{ listStyle: "outside" }}>{item}</li>
                </ul>
              ))}
          </div>
          {!DESCRIPTION && !DETAILS && (
            <p className="descreption">{product.description}</p>
          )}
          <button
            className=" addToCart"
            onClick={() => addProductHandler(product)}
          >
            {checkInCart(cart, product) ? (
              "در سبد خرید "
            ) : (
              <p>اضافه به سبد خرید</p>
            )}
          </button>
          <NavLink to="/store">
            <button className="backToStore">بازگشت به فروشگاه</button>
          </NavLink>
        </div>
      ) : (
        <>
          <p style={{ marginTop: "30px" }}>شما محصولی انتخاب نکرده اید</p>
          <NavLink to="/store">
            <button className="backToStore" style={{ left: "590px" }}>
              بازگشت به فروشگاه
            </button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Product;
