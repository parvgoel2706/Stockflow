function Hero() {
  return (
    <div className="container-lg px-5">
      <div className="row px-5">
        <h5 className="col-6">Support Portal</h5>
        <p className="col-6 text-end">
          <a href="#" className="support-hero-link">
            Track tickets
          </a>
        </p>
      </div>
      <div className="row ps-5">
        <div className="col-6">
          <p className="fs-5 py-3">
            Search for an answer or browse help topics to create a ticket
          </p>
          <i class="fa-solid fa-magnifying-glass support-search-icon"></i>
          <input
            className="support-search"
            type="text"
            placeholder="Eg: How do I activate F&O, why is my order getting rejected ..."
          ></input>
          <br />
          <p style={{ display: "inline-block" }}>
            <a href="#" className="support-hero-link">
              Track account opening
            </a>
          </p>
          <p style={{ display: "inline-block" }}>
            <a href="#" className="support-hero-link">
              Track segment activation
            </a>
          </p>
          <p style={{ display: "inline-block" }}>
            <a href="#" className="support-hero-link">
              Intraday margins
            </a>
          </p>
          <p style={{ display: "inline-block" }}>
            <a href="#" className="support-hero-link">
              Kite user manual
            </a>
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <p className="fs-5 pt-3">Featured</p>
          <ol className="px-5">
            <li className="text-decoration-underline pb-3">Latest Intraday leverages and Square-off timings</li>
            <li className="text-decoration-underline">Rights Entitlements listing in April 2025
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
