import { Button,Stack } from 'react-bootstrap';
import "./homepage.scss";
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";


export default function Homepage() {
  return (
    <>
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>budgetMe</h1>
                    <p>Information about the application and everything it does will go here in this funny box.</p>
                    <span>Already have an account?</span>
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                </div>

                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <Link to="/register">
                            <Button>Register</Button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>

    </>
  )
}
