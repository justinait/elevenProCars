import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { db, signUp } from "../../firebaseConfig";
import {setDoc, addDoc, doc} from "firebase/firestore"

const Register = () => {
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email:"",
    password:"",
    confirmPassword:"",
    instagram: ""
  })

  const handleChange = (e) => {
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(userCredentials);
      if(res.user.uid){
        await setDoc(doc(db, "users", res.user.uid), { 
          email: userCredentials.email,
          instagram: userCredentials.instagram,
          rol: "user",
          isApproved: false 
        } )
        //cambié esto
      }
      navigate('/login');
    } catch (error) {
      console.log(error);  
    }
  }
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div
      className="container"
    >
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            name="instagram"
            placeholder="Instagram Username"
            className="input"
            onChange={handleChange}
          />
          <div className="passwordContainer registerPassword">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input"
              onChange={handleChange}
            />
            <span
              onClick={handleClickShowPassword}
              className="passwordToggle"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
          <div className="passwordContainer registerPassword">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              className="input"
              onChange={handleChange}
            />
            <span
              onClick={handleClickShowPassword}
              className="passwordToggle"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
          <Link to="/login" className="notAccountYet">
            I already have an account
          </Link>
          <button
            type="submit"
            className="button"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;