import { createContext, useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

const AuthproviderContext=createContext()
const AuthproviderContextDispatcher=createContext()
const Authprovider = ({children}) => {
       const [State, setState] = useState(false);

       useEffect(()=>{
              const userD=JSON.parse(localStorage.getItem('authState'))||false
              setState(userD)

       },[])
    return ( 
       <AuthproviderContext.Provider value={State}>
       <AuthproviderContextDispatcher.Provider value={setState}>
{children}
       </AuthproviderContextDispatcher.Provider>
       </AuthproviderContext.Provider>
     );
}
 
export default Authprovider;
export const useAuth=()=>useContext(AuthproviderContext)
export const useAuthAction=()=>useContext(AuthproviderContextDispatcher)