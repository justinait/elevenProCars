import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";
import {db, loginGoogle, onSignIn} from '../../firebaseConfig'
import {collection, doc, getDoc} from "firebase/firestore"
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  const {handleLogin} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email:'',
    password:''
  })
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await onSignIn(userCredentials);

      if(res?.user){

        const userCollection = collection(db, "users");
        const userRef = doc(userCollection, res.user.uid)
        const userDoc = await getDoc(userRef);

        let finallyUser = {
          email: res.user.email,
          rol: userDoc.data().rol,
          instagram: userDoc.data().instagram,
          refCode: userDoc.data().refCode,
        }

        handleLogin(finallyUser);//le paso el usuario logueado al contexto
        navigate('/');
      }
    } catch (error) {
      setError('Wrong Password');
      console.log(error);
    }
  }

  const googleSignIn = async () => {
    let res = await loginGoogle();
    let finallyUser = {
      email: res.user.email,
      rol: "user"
    }

    handleLogin(finallyUser);
    navigate('/');
  }

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* <h2>Log in</h2> */}
      <form onSubmit={handleSubmit} className="form">
      <h3>Are you an affiliate? <br /> <br /> <strong className="strongh3">LOG IN</strong> </h3>
        <div className="">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="input"
          />
        </div>
        <div className="passwordContainer">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="input"
          />
          <span
            onClick={handleClickShowPassword}
            className="passwordToggle"
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>
        {error && <p className="errorMessage">{error}</p>} {/* Muestra el mensaje de error */}
        <Link to="/forgot-password" className="link">
          Forgot your password?
        </Link>
        <button
          type="submit"
          className="button"
        >
          Sign In
        </button>
        {/*<button
          type="button"
          className="googleButton button"
          onClick={googleSignIn}
        >
          <GoogleIcon style={{ marginRight: "8px" }} /> Ingresa con Google
        </button>
        */}
        <div>
          <p className="notAccountYet" >            Don't have an account yet?         </p>
          <button type="button" onClick={()=>navigate("/register")} className="button">Register now!</button>
        </div>
      </form>
    </div>
  );
};

export default Login;