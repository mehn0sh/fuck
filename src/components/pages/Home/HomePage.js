import { Link, NavLink } from "react-router-dom";
import "./wellcom.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div>
        <div
          className="headerContainer"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img
            className="headerImg"
            src="https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            // src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <div></div>
          <p className=" text ">
            we make <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; your move
          </p>
          {/* <p className="focus-in-contract-bck text "> */}
          <div>
            {/* <p className="text2 text-focus-in">are you ready to lead the way</p> */}
            <p className="text2 ">
              are you ready to <span>lead the way ?</span>{" "}
            </p>
          </div>
          <NavLink to="/store">
            <button className="disCoverBtn">فروشگاه</button>
          </NavLink>
        </div>
      </div>
      <div className="about-us" data-aos="fade-left" data-aos-duration="3000">
        <p>
          اولین چیزی که در استایل شما دیده می شود کفش های شماست
          <br />
          <br />

          شما با هر استایلی که دارید میتوانید در سایت ما کفش مناسب خود را پیدا
          کنید
          <br />
          <br />
          تمامی محصولات ما اورجینال هستند و شما میتوانید با اطمینان خرید خود را انجام دهید
          <br/>
          <br/>
          فروشگاه آنلاین ما از سال 1396 در تلاش است تا تجربه ی خرید عالی را برای
          شما فراهم کند
          <br/>

        </p>
        <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      </div>
      <div className="store" data-aos="fade-right" data-aos-duration="3000">
        <div className="category">
          <NavLink to="/womenshoe">
            <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
          </NavLink>
زنانه
        </div>
        <div className="category">
          <NavLink to="/menshoe">
            <img src="https://images.unsplash.com/photo-1561808843-7adeb9606939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
          </NavLink>
مردانه
        </div>
        <div className="category">
          <NavLink to="/bothshoe">
            <img src="https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
          </NavLink>
اسپرت
        </div>
        <div className="category">
          <NavLink to="/kidsshoe">
            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5ce7faa5-6098-4e3b-8e1c-1e931f39ae48/free-run-2-baby-toddler-shoes-hpV2ks.png" />
          </NavLink>
بچه گانه
        </div>
      </div>
    </div>
  );
};

export default HomePage;
