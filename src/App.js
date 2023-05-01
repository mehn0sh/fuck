import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Switch,
  Router,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import "./App.css";
import Cart from "./components/pages/Home/Cart/Cart";
import CartProvider from "./components/providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOutPage from "./components/pages/checkOutPage/CheckOutPage";
import SignUpPage from "./components/pages/SignUp/SignUpPage";
import LoginPage from "./components/pages/Login/LoginPage";
import Authprovider from "./components/providers/AuthProvider";
import Profile from "./components/pages/profile/Profile";
// import Wellcome from "./components/pages/Home/Wellcome";
import WomenShoe from "./components/pages/women/WomenShoe";
import MenShoe from "./components/pages/Home/menShoe/MenShoe";
import Store from "./components/pages/store/Store";
import Product from "./components/productprovider/Product";
import ProductProvider from "./components/productprovider/ProductProvider";
import KidsShoe from "./components/pages/KidsShoe/KidsShoe";
import Both from "./components/pages/both/Both";
import HomePage from "./components/pages/Home/HomePage"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Authprovider>
            <ProductProvider>
              <CartProvider>
                <Layout>
                  <Routes>
                    <Route path="/" exact={true} element={<HomePage/>} />
                    <Route path="/cart" exact={true} element={<Cart />} />
                    <Route path="/store" exact={true} element={<Store />} />
                    <Route
                      path="/checkout"
                      exact={true}
                      element={<CheckOutPage />}
                    />
                    <Route
                      path="/signup"
                      exact={true}
                      element={<SignUpPage />}
                    />
                    <Route path="/login" exact={true} element={<LoginPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/womenshoe" element={<WomenShoe />} />
                    <Route path="/menshoe" element={<MenShoe />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/kidsshoe" element={<KidsShoe />} />
                    <Route path="/bothshoe" element={<Both />} />
                  </Routes>
                </Layout>
              </CartProvider>
            </ProductProvider>
          </Authprovider>
        </div>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
