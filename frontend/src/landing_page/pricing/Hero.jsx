function Hero() {
  return (
    <div
      className="container-lg p-5 mt-5 text-center"
      style={{ color: "#424242" }}
    >
      <h1>Charges</h1>
      <h5 className="p-2 text-muted pb-5">List of all charges and taxes</h5>
      <div className="row py-5 px-lg-5 justify-content-lg-between justify-content-center">
        <div className="col-lg-4 col-7 p-4">
          <img
            src="media/images/pricing0.svg"
            alt="zero"
            className="mb-2 price-img"
            />
          <h3 className="fs-4">Free equity delivery</h3>
          <p className="mt-4 text-muted"> 
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-7 p-4">
          <img
            src="media/images/pricing20.svg"
            alt="zero"
            className="mb-2 price-img"
            />
          <h3 className="fs-4">Intraday and F&O trades</h3>
          <p className="mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4 col-9 p-4">
          <img
            src="media/images/pricing0.svg"
            alt="zero"
            className="mb-2 price-img"
            />
          <h3 className="fs-4">Free direct MF</h3>
          <p className="mt-4 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
