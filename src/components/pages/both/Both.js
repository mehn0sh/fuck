import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import HoverImage from "react-hover-image";
import * as data from "../../data";
import { useCart, useCartAction } from "../../providers/CartProvider";
import {
  useProduct,
  useProductAction,
} from "../../productprovider/ProductProvider";

export const PId = createContext();

const checkInCart = (cart, product) => {
  return cart.find((c) => c.id == product.id);
};

const Both = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  const product = useProduct();
  const dispatchP = useProductAction();
  const addProductHandler = (product) => {
    toast.success(`${product.name} به سبد خرید اضافه شد`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const productIdHandler = (product) => {
    dispatchP({ type: "GET_ID_BOTH", payload: product });
  };
  return (
    <main className="container">
      <section className="productList">
        {data.BothProducts.map((product) => {
          return (
            <NavLink to={`/product/${product.id}`}>
              <section
                className="product"
                key={product.id}
                onClick={() => productIdHandler(product)}
              >
                <div className="productImg">
                  <HoverImage
                    src={product.image[0]}
                    hoverSrc={product.image[1]}
                  />
                </div>
                <div className="productDesc">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </section>
            </NavLink>
          );
        })}
      </section>
    </main>
  );
};
export default Both;
