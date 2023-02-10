import { Button,Stack } from 'react-bootstrap';
import "./login.scss";
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";


export default function Login() {
  return (
    <>
        <div className="login">
            <div className="loginCard">
                <div className="loginContent">
                    <h1>Login</h1>
                    <form>
                        <Link to="#">
                            <Button>Login</Button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>

    </>
  )
}
