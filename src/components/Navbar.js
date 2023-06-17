import { Button } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase-config';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand mx-4" href="/">
          <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
          budgetMe
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
              budgetMe
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {!isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/register">Sign Up</a>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home">Home</a>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>
              )}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Explore
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="/news">News</a></li>
                  <li><a className="dropdown-item" href="/crypto">Crypto</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              {isLoggedIn ? (
                <Button className="btn btn-success" type="submit" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <a className="btn btn-success" href="/login">
                  Login
                </a>
              )}
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
