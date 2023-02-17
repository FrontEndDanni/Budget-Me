import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import "./register.scss";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export default function Register() {
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
                <input type="email" className="form-control" />
              </label>
              <label>
                Password:
                <input type="password" label="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              {password.length > 0 &&
                <div className={validatePassword() ? 'validPassword' : 'invalidPassword'}>
                  {validatePassword() ? 'Password is secure!' : 'Password must be at least 8 characters with at least one capital letter, one number, and one punctuation mark.'}
                </div>
              }
              <center>
                <Link to="#">
                  <Button>Register</Button>
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
  )
}
