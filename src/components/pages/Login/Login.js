import { useFormik } from "formik";
import Input from "../../../common/Input/Input";
import * as Yup from "yup";
// import "../Signup/signup.css";
import "../Login/login.css";
import { NavLink,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../../services/loginService";
import { useAuth, useAuthAction } from "../../providers/AuthProvider";
import { useQuery } from "../../../hooks/useQuery";
import { useEffect } from "react";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("ایمیل نامعتبر است")
    .required("ایمیل را وارد کنید"),

  password: Yup.string().required("پسورد را وارد کنید"),
});
const Login = (props) => {
  const setAuth = useAuthAction();
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  console.log(redirect)
  const auth=useAuth()
  let navigate = useNavigate();
  useEffect(()=>{
    if(auth){
      navigate(redirect)
    }
   
   },[redirect,auth])
  const onSubmit = async (values) => {
    try {
      console.log(values);
      const { data } = await loginUser(values);
      console.log(data);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      toast.success(`wellcome`);
      navigate(redirect);
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="ایمیل" type="email" />

        <Input
          formik={formik}
          name="password"
          label="پسورد"
          type="password"
        />

        <button
          style={{ width: "100%" }}
          type="submit"
          disabled={!formik.isValid}
          className="btn primary btnS"
        >
         ورود
        </button>
        <Link to={`/signup?redirect=${redirect}`}>
          <p className="loginlink" style={{ marginTop: "15px" }}>حساب کاربری ندارید ؟ ثبت نام کنید</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
