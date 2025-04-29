function RightTopBar() {
  return (
    <div className="topbar-part indices-container border">
      <div className="index ">
        <span className="index-name small-14">NIFTY 50:</span>
        <span className="index-point small-14">23,500</span>
        <span className="index-percent small-12 gain">+0.53%</span>
      </div>
      <div className="index ">
        <span className="index-name small-14">SENSEX:</span>
        <span className="index-point small-14">11,000</span>
        <span className="index-percent small-12 gain">+0.12%</span>
      </div>
    </div>
  );
}

export default RightTopBar;
