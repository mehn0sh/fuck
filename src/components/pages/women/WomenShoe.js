import { useContext, useState } from "react";
import { NavLink, useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import * as data from "../../data";
import { useProductAction } from "../../productprovider/ProductProvider";
import { useCart, useCartAction } from "../../providers/CartProvider";
import "./women.css";
import HoverImage from "react-hover-image";


const WomenShoe = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  const dispatchP = useProductAction();

  const productIdHandler = (product) => {
    dispatchP({ type: "GET_ID_WOMEN", payload: product });
  };
  return (
    <main className="container">
      <section className="productList">
        {data.womenProducts.map((product) => {
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
export default WomenShoe;
