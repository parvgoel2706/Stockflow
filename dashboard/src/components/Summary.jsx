function Summary() {
  return (
    <div className="summary p-5">
      <h3>Hi User,</h3>
      <hr />
      <h5>Equity</h5>
      <div className="row">
        <div className="p-4 col-4 border-end">
          <p className="fs-1 m-0">3.74k</p>
          <p className="small-12 text-muted">Margin available</p>
        </div>
        <div className="p-4 ms-3 text-muted col-4  small-12">
          <p>Margin used: 0</p>
          <p>Opening Balance: 3.74k</p>
        </div>
      </div>

      <hr />
      <h5>Holdings</h5>
      <div className="row">
        <div className="p-4 col-4 border-end">
          <p className="fs-1 m-0">1.55k <span className="text-muted small-12">+5.20%</span></p>
          <p className="small-12">P&L</p>
        </div>
        <div className="p-4 ms-3 col-4 text-muted small-12">
          <p>Current Value: 0</p>
          <p>Investment: 3.74k</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Summary;
