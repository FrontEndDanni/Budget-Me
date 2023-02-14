import { Button,Stack } from 'react-bootstrap';
import "./login.scss";
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <>
        <div className="register">
            <div className="registerCard">
                <div className="registerContent">
                    <h1>Welcome back!</h1>
                    <form>
                        <label>
                            Email:
                            <input type="email" className="form-control"/>
                        </label>
                        <label>
                            Password:
                            <input type="password" className="form-control"/>
                        </label>
                        <sup>Forgot your password?</sup>
                            <Link to="#">
                                 <Button >Login</Button>
                            </Link>
                            <h5>Don't have an account? <Link to="/register">Register here!</Link></h5>
                    </form>
                
                </div>

            </div>
        </div>

    </>
  )
}