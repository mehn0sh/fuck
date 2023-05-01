import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../providers/AuthProvider";
import "./profile.css";
const Profile = () => {
  const userData = useAuth();
  const history = useNavigate();

  const clickHandler = () => {
    localStorage.removeItem("authState");
    console.log(localStorage.getItem("authState")); // null

    history("/");
    window.location.reload();
  };
  useEffect(() => {
    console.log("d");
  }, [localStorage.getItem("authState")]);
  return (
    <div className="profContainer">
      <img
        id="userImg"
        src="https://cdn-icons-png.flaticon.com/512/131/131690.png?w=740&t=st=1679084347~exp=1679084947~hmac=eab034e8a9ce40d911e92f9023ad363e4feba934e9a7af96a3c7526310b07d3e"
      />
      <div className="userdata">
        <p>
          عزیز <span>{userData.name}</span> سلام
        </p>
        <p>
        <span>{userData.email}</span>   آدرس ایمیل شما 
        </p>
        <p>
          تلفن تماس شما :<span>{userData.phoneNumber}</span>
        </p>
        <button onClick={clickHandler} className="btn primary">
          خروج
        </button>
      </div>
    </div>
  );
};

export default Profile;
