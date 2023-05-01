import { useCart, useCartAction } from "../../../providers/CartProvider";
import { Link, NavLink } from "react-router-dom";

import "../Cart/cartitem.css";

const Cart = () => {
  const { cart, total } = useCart();
  console.log(cart)
  const dispatch = useCartAction();
  const increamentHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decreamentHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };
  return (
    <main className="container">
      <section className="cartCenter">
        <div className="cartItemList ">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <section className=" cartItem">
                  <div className="itemImg">
                    <img src={item.image} />
                  </div>
                  <div>{item.name}</div>
                  <div>{item.offPrice * item.quantity}</div>
                  <div>
                    <button
                      onClick={() => increamentHandler(item)}
                      className="btnGroup"
                    >
                      +
                    </button>
                    <button className="btnGroup">{item.quantity}</button>
                    <button
                      onClick={() => decreamentHandler(item)}
                      className="btnGroup"
                    >
                      -
                    </button>
                  </div>
                </section>
              );
            })
          ) : (
            <>بازگشت به فروشگاه</>
          )}
        </div>
        <div className="cartsummary">
          <Cartsummary total={total} cart={cart} />
        </div>
      </section>
    </main>
  );
};
const Cartsummary = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.offPrice, 0)
    : 0;
  return (
    <section>
      <h3>اطلاعات خرید</h3>
      <div className="cartSummaryItem">
        <p>قیمت خرید</p>
        <p>{total}$</p>
      </div>
      <div className="cartSummaryItem">
        <p>تخفیفات</p>
        <p>{total - originalTotalPrice}$</p>
      </div>
      <div className="cartSummaryItem net">
        <p>قیمت نهایی</p>
        <p>{originalTotalPrice}$</p>
      </div>
      <NavLink to="/signup?redirect=checkout">
        <button
          className="btn primary loginlink"
          style={{ marginTop: "20px", width: "100%" }}
        >
ادامه خرید
        </button>
      </NavLink>
    </section>
  );
};
export default Cart;
