import { createContext, useContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
const ProductContext = createContext();
const ProductContextDispatcher = createContext();
const initialState = {
  temp:0,
  type:null,
  
};
const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(ProductReducer, initialState);
  return (
    <ProductContext.Provider value={product}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export const useProduct = () => useContext(ProductContext);
export const useProductAction = () => useContext(ProductContextDispatcher);
