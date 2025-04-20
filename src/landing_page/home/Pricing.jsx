function Pricing() {
  return (
    <div className="container px-5">
      <div className="row p-5">
        <div className="col-5">
          <h2>Unbeatable pricing</h2>
          <p className="mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#pricing">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7">
          <div className="row py-5">
            <div className="col-2">
              <img
                src="media/images/pricing0.svg"
                alt=""
                style={{ width: "130%" }}
              />
            </div>
              <div className="col">
                <p style={{ fontSize: "10px", position:"relative" ,top:"40px" }}>Free account opening</p>
              </div>

            <div className="col-2 ">
              <img
                src="media/images/pricing0.svg"
                alt=""
                style={{ width: "130%" }}
              />
            </div>
            <div className="col-3">
              <p style={{ fontSize: "10px", position:"relative" ,top:"40px"}}>
                Free equity delivery <br />and direct mutual funds
              </p>
            </div>

            <div className="col-2">
              <img
                src="media/images/pricing20.svg"
                alt=""
                style={{ width: "130%" }}
              />
            </div>
            <div className="col-1">
              <p style={{ fontSize: "10px", position:"relative" ,top:"40px" }}>Intraday & <br />F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
