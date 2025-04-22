import { Link } from "react-router-dom";

function HeroComp() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="homePage"
          className="p-5 m-auto"
          style={{ width: "70%" }}
        />
        <h1 className="mt-4">Invest in everything</h1>
        <p className="mt-1 fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
          <button
            className="btn btn-primary p-2 fs-5 mt-3 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroComp;
