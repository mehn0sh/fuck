const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_ID_MEN": {
      return { ...state, temp: action.payload.id ,type:'products'};
    }
    case "GET_ID_WOMEN": {
      return { ...state, temp: action.payload.id ,type:'womenProducts'};
    }
    case "GET_ID_KIDS": {
      return { ...state, temp: action.payload.id ,type:'kidsProducts'};
    }
    case "GET_ID_BOTH": {
      return { ...state, temp: action.payload.id ,type:'BothProducts'};
    }
    
  }
};
export default ProductReducer;
