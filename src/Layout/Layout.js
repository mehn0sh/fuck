import Navigation from "../components/navigation/Navigation";
import { useCart } from "../components/providers/CartProvider";

const Layout = ({children}) => {
    const {cart}=useCart()
    return ( 
        <div>
            <Navigation/>
            {children}
        </div>
     );
}
 
export default Layout;