import { Button,Stack } from 'react-bootstrap';
import "./homepage.scss";
import accountingImage from '../assets/accounting.png';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";


export default function Homepage() {
  return (
    <>
        <div className="homePage">
            <div className="card">
                <div className="right">
                    <h1>budgetMe</h1>
                    <p>Join the millions of savvy savers and take charge of your finances today. Sign up now and start your journey towards financial freedom!</p>
                    <span>Create your free account!</span>
                    <Link to="/register">
                        <Button>Register</Button>
                    </Link>
                </div>

                <div className="left">
                    <h1>Sign In</h1>
                    <h5>Time to crunch some numbers!</h5>
                    <form>
                        <Link to="/login">
                            <Button>Log In</Button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>

    </>
  )
}
