import { useFormik } from "formik";
import Input from "../../common/Input/Input";
import * as Yup from "yup";
import "../Signup/signup.css";
import { NavLink, useNavigate,Link } from "react-router-dom";
import { signupUser } from "../../services/signupService";
import { useState } from "react";
import {  toast } from "react-toastify";
import { useAuth, useAuthAction } from "../providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";


const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام خود را وارد کنید")
    .min(6, "حداقل 6 کاراکتر"),
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل خود را وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره تماس خود را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره تماس نا معتبر")
    .nullable()
    ,
  password: Yup.string()
    .required("پسورد خود را وارد کنید")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
 
      "پسورد شامل 8 کاراکتر/ یک کاراکتر بزرگ/یک کاراکتر کوچک/ یک عدد و یک کارکتر خاض"
  
    ),
  passwordConfirm: Yup.string()
    .required("پسورد را تکرار کنید")
    .oneOf([Yup.ref("password"), null], "پسورد یکسان نیست"),
});
const Signup = () => {
  const setAuth = useAuthAction();
  const auth=useAuth()
 const query= useQuery()
 const redirect=('/'+(query.get('redirect')))||'/'
 console.log(redirect)
 const history = useNavigate();
 useEffect(()=>{
  if(auth){
    history(redirect)
  }
 
 },[redirect,auth])
  const onSubmit = async (values) => {
    const{name,email,phoneNumber,password}=values
    const userData={
      name,email,password,phoneNumber
    }
    try {
      const{data}=await signupUser(userData)
      console.log(data)
      setAuth(data)
      localStorage.setItem("authState",JSON.stringify(data))
      toast.success(`wellcome`)
      history(redirect)
    } catch (error) {
      if(error.response&&error.response.data.message){
toast.error(error.response.data.message)

      }
     
      console.log(error)
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
        <Input formik={formik} name="name" label="نام" />
        <Input formik={formik} name="email" label="ایمیل" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="تلفن تماس"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="رمز عبور"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="تکرار رمز عبور"
          type="password"
        />
        <button
          style={{ width: "100%" }}
          type="submit"
          disabled={!formik.isValid}
          className="btn primary btnS"
        >
          ثبت نام
        </button>
        <Link to={`/login?redirect=${redirect}`}>
          <p className="loginlink" style={{marginTop:'15px'}}>حساب کاربری دارید ؟ وارد شوید</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
