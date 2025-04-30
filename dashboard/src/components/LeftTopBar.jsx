import { NavLink } from "react-router-dom";
function LeftTopBar() {
  return (
    <div className="topbar-part border d-flex justify-content-between px-3 align-items-center">
      <img src="/media/images/kiteLogo.webp" alt="" style={{ height: "70%" }} />
      <div className="menu">
        <NavLink className={({isActive})=>(isActive? "active":"")} to="/">
          <span>Dashboard</span>
        </NavLink>
        <NavLink className={({isActive})=>(isActive? "active":"")} to="/orders">
          <span>Orders</span>
        </NavLink>
        <NavLink className={({isActive})=>(isActive? "active":"")} to="/holdings">
          <span>Holdings</span>
        </NavLink>
        <NavLink className={({isActive})=>(isActive? "active":"")} to="/positions">
          <span>Positions</span>
        </NavLink>
        <NavLink className={({isActive})=>(isActive? "active":"")} to="/funds">
          <span>Funds</span>
        </NavLink>
        <NavLink className={({isActive})=>(isActive? "active":"")} to="/apps">
          <span>Apps</span>
        </NavLink>
        &nbsp; &nbsp;
        <span className="profile">
          &nbsp;
          <img
            src="https://ui-avatars.com/api/?name=parv+Goel&rounded=true&&background=d1632c"
            alt=""
            style={{ height: "35px" }}
          />
          <span className="userid">Parv Goel</span>
        </span>
      </div>
    </div>
  );
}

export default LeftTopBar;
