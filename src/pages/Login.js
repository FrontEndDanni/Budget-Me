import { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./login.scss";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user)
      navigate('/dashboard'); // Navigate to dashboard on successful login
    } catch (error){
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="register">
        <div className="registerCard">
          <div className="registerContent">
            <h1>Welcome back!</h1>
            <form>
              <label>
                Email:
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => {
                    setLoginEmail(e.target.value)}}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setLoginPassword(e.target.value)}}
                />
              </label>
              <sup>Forgot your password?</sup>
              <Link to="#">
                <Button onClick={login}>Login</Button>
              </Link>
              <h5>Don't have an account? <Link to="/register">Register here!</Link></h5>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
