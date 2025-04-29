function LeftTopBar() {
  return (
    <div className="topbar-part border d-flex justify-content-between px-3 align-items-center">
      <img src="/media/images/kiteLogo.webp" alt="" style={{ height: "70%" }} />
      <div className="menu">
        <span>Dashboard</span>
        <span>Orders</span>
        <span>Holdings</span>
        <span>Positions</span>
        <span>Funds</span>
        <span>Apps</span>
        &nbsp; &nbsp;
        <span className="user-logo">
          &nbsp;
          <img
            src="media/images/kiteLogo.webp"
            alt=""
            style={{ height: "50px" }}
          />
          <span className="userid">USERID</span>
        </span>
      </div>
    </div>
  );
}

export default LeftTopBar;
