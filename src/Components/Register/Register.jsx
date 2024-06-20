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
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
    setErrors({ ...errors, [e.target.name]: "" });
  }
  const validateForm = () => {
    const newErrors = {};
    if (!userCredentials.email) newErrors.email = "This field is required.";
    if (!userCredentials.instagram) newErrors.instagram = "This field is required";
    if (!userCredentials.password) newErrors.password = "Password is required.";
    if (userCredentials.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (userCredentials.password !== userCredentials.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      let res = await signUp(userCredentials);
      if (res.user.uid) {
        await setDoc(doc(db, "users", res.user.uid), {
          email: userCredentials.email,
          instagram: userCredentials.instagram,
          rol: "user",
          isApproved: false
        });
      }
      setShowConfirmationMessage(true);
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div      className="container"    >
      {showConfirmationMessage ? (
        <div className="confirmationMessage">
          The administrator will check your details and notify you shortly if your account is confirmed. Thank you. Eleven Pro Cars
        </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input"
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="text"
            name="instagram"
            placeholder="Instagram Username"
            className="input"
            onChange={handleChange}
          />
          {errors.instagram && <p className="error">{errors.instagram}</p>}
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
          {errors.password && <p className="error">{errors.password}</p>}
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

          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

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
      )}
    </div>
  );
};

export default Register;