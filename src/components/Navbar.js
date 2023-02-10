import { Button } from 'react-bootstrap';

//TODO: Debug navbar
// Third navbar's slide-out menu x/close button does NOT work without 
// first two navbar codes. Not sure why. Don't remove them until resolved.


export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" hidden>
        <div className="container-fluid">
            <a className="navbar-brand mx-4" href="/">budgetMe</a>
    <button 
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-link" href="#">Dashboard</li>
        </ul>

        <div className="d-flex align-items-center">
          <button type="button" class="btn btn-outline-light px-3 me-2">
            Login
          </button>
          <button type="button" class="btn btn-primary me-3">
            Sign up for free
          </button>
        </div>
      </div>
  </div>
</nav>


<nav class="navbar navbar-expand-lg navbar-dark bg-dark" hidden>
  <div class="container-fluid">
    <a class="navbar-brand mx-4" href="#">budgetMe</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
      </ul>
      <div className="d-flex align-items-center">
          <button type="button" class="btn btn-outline-light px-3 me-2">
            Login
          </button>
          <button type="button" class="btn btn-primary me-3">
            Sign Up
          </button>
        </div>
    </div>
  </div>
</nav>


<nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand mx-4" href="/">budgetMe</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">budgetMe</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Sign Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dashboard">Dashboard</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider"/>
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <Button class="btn btn-success" type="submit">Search</Button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}




