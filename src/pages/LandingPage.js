import { Button } from 'react-bootstrap';
import "./landingpage.scss";
import Video from '../assets/video.mp4';
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
        <div className="video-container">
            <video autoPlay playsInline loop muted preload="auto">
                <source src={Video} type="video/mp4" />
            </video></div>
            <div className="overlay"></div>
            <div className="content">
                <h1>budgetMe</h1>
                <h3>Budgeting made simple.</h3>
                <br/>
                <Link to="/home">Get saving!</Link>
            </div>
        </>
    );
}
