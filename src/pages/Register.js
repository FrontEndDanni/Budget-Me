import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, Stack } from 'react-bootstrap';
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase-config';

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Add error message state
  const navigate = useNavigate();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      navigate('/dashboard');
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already in use! Please use a different email, or log in to this existing account.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  const [password, setPassword] = useState('');

  function validatePassword() {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  }

  return (
    <>
      <div className="register">
        <div className="registerCard">
          <div className="registerContent">
            <h1>Create your Account</h1>
            <form>
              <label>
                Email:
                <input 
                  type="email" 
                  className="form-control"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value)
                  }} />
              </label>
              <label>
                Password:
                <input 
                  type="password" 
                  label="password" 
                  className="form-control" 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setRegisterPassword(e.target.value);
                  }}
                />
              </label>
              {password.length > 0 &&
                <div className={validatePassword() ? 'validPassword' : 'invalidPassword'}>
                  {validatePassword() ? 'Password is secure!' : 'Password must be at least 8 characters with at least one capital letter, one number, and one punctuation mark.'}
                </div>
              }
              {errorMessage && <div className="error">{errorMessage}</div>} {/* Display error message */}
              <center>
                <Link to="#">
                  <Button onClick={register}>Register</Button>
                </Link>
                <br></br>
                <br></br>
                <h5>Already have an account? <Link to="/login">Log in!</Link></h5>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
