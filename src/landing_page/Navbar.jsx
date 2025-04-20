function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white", position:"fixed", width:"100%"}}
    >
      <div class="container p-1">
        <a class="navbar-brand" href="#">
          <img src="media/images/logo.png" alt="" style={{ width: "20%" }} />
        </a>
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
              <a class="nav-link " aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
