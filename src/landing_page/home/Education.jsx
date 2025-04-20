function Education() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6">
          <img src="media/images/education.svg" alt="Education" style={{width:"80%"}}/>
        </div>
        <div className="col-6 mt-5">
          <h2>Free and open market education</h2>
          <p className="mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#pricing">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-4">
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="#pricing">
          TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
