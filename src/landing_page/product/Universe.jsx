import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container text-center p-5">
      <h2>The StockFlow Universe</h2>
      <p className="my-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="px-5" style={{ color: "#9b9b9b" }}>
        <div className="row p-5 pb-0 flex-wrap align-items-baseline">
          <div className="col-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
              style={{ width: "60%" }}
            />
          </div>
          <div className="col-4">
            <img
              src="media/images/sensibullLogo.svg"
              alt="sensibullLogo"
              style={{ width: "60%" }}
            />
          </div>
          <div className="col-4">
            <img
              src="media/images/goldenpiLogo.png"
              alt="goldenpiLogo"
              style={{ width: "60%" }}
            />
          </div>
        </div>
        <div className="row p-5 pt-3" style={{ fontSize: "12px" }}>
          <p className="col-4">
            Our asset management venture <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
          <p className="col-4">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
          <p className="col-4">
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="row px-5 align-items-baseline">
          <div className="col-4">
            <img
              src="media/images/streakLogo.png"
              alt="streakLogo"
              style={{ width: "50%" }}
            />
          </div>
          <div className="col-4">
            <img
              src="media/images/smallcaseLogo.png"
              alt="smallcaseLogo.png"
              style={{ width: "60%" }}
              className="col-4"
            />
          </div>
          <div className="col-4">
            <img
              src="media/images/dittoLogo.png"
              alt="dittoLogo"
              style={{ width: "40%" }}
              className="col-4"
            />
          </div>
        </div>
        <div className="row px-5 pt-3" style={{ fontSize: "12px" }}>
          <p className="col-4">
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
          <p className="col-4">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
          <p className="col-4">
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
      </div>
      <Link to="/signup">
        <button
          className="btn btn-primary p-2 fs-5 m-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </Link>
    </div>
  );
}

export default Universe;
