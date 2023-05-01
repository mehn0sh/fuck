import { toast } from "react-toastify";
import { useCart, useCartAction } from "../../../providers/CartProvider";
import * as data from "../../../data";
import { NavLink } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import HoverImage from "react-hover-image";

import {
  useProduct,
  useProductAction,
} from "../../../productprovider/ProductProvider";

const checkInCart = (cart, product) => {
  return cart.find((c) => c.id == product.id);
};

const MenShoe = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  const product = useProduct();
  const dispatchP = useProductAction();
  const addProductHandler = (product) => {
    toast.success(`${product.name} به سبد خرید اضافه شد`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const productIdHandler = (product) => {
    dispatchP({ type: "GET_ID_MEN", payload: product });
  };
  return (
    <main className="container">
      <section className="productList">
        {data.products.map((product) => {
          return (
            <section
              className="product"
              key={product.id}
              onClick={() => productIdHandler(product)}
            >
              <NavLink to={`/product/${product.id}`}>
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
              </NavLink>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default MenShoe;
