import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white", position: "sticky", top:"0", width: "100%" }}
    >
      <div class="container p-1">
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.png" alt="" style={{ width: "20%" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fa-solid fa-bars"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
