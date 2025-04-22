function Team() {
  return (
    <div className="container text-center" style={{ color: "#424242" }}>
      <h2>People</h2>
      <div className="row p-5">
        <div className="col-6 py-5">
          <img
            src="media/images/owner.jpg"
            alt="owner"
            style={{ width: "50%", borderRadius: "100%" }}
            className="mb-3"
          />
          <p style={{ fontSize: "20px" }}>Parv Goel</p>
          <p style={{ fontSize: "14.4px" }}>CEO, Founder</p>
        </div>
        <div className="col-5 text-start py-5">
          <p>
            Parv created StockFlow as a Zerodha-inspired platform to simplify
            stock trading and learn full-stack development. Built with a focus
            on clean UI and core trading features, StockFlow reflects his
            passion for fintech, coding, and user experience.
          </p>
          <p>
            “StockFlow is where tech meets trading—a personal journey turned
            project.”
          </p>
          <p>
            Connect on <a href="https://github.com/parvgoel2706">GitHub</a> |{" "}
            <a href="https://www.linkedin.com/in/parvgoel07/">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
