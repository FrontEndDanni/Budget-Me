import { Button,Stack } from 'react-bootstrap';
import "./register.scss";
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <>
        <div className="register">
            <div className="registerCard">
                <div className="registerContent">
                    <h1>Register</h1>
                    <form>
                        <label>
                            First Name:
                            <input type="text" className="form-control"/>
                        </label>
                        <label>
                            Last Name:
                            <input type="text" className="form-control"/>
                        </label>
                        <label>
                            Email:
                            <input type="email" className="form-control"/>
                        </label>
                        <label>
                            Password:
                            <input type="password" className="form-control"/>
                        </label>
                        <Link to="#">
                            <Button>Register</Button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>

    </>
  )
}