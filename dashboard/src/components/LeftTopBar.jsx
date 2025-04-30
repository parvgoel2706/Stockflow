import { useState } from "react";
import { NavLink } from "react-router-dom";
function LeftTopBar() {
  let [isProfileMenu, setIsProfileMenu] = useState(false);
  let handleProfileMenu = () => {
    setIsProfileMenu(!isProfileMenu);
  };

  return (
    <div className="topbar-part border d-flex justify-content-between px-3 align-items-center">
      <img src="/media/images/kiteLogo.webp" alt="" style={{ height: "70%" }} />
      <div className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/orders"
        >
          <span>Orders</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/holdings"
        >
          <span>Holdings</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/positions"
        >
          <span>Positions</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/funds"
        >
          <span>Funds</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/apps"
        >
          <span>Apps</span>
        </NavLink>
        &nbsp; &nbsp;
        <span className="profile" onClick={handleProfileMenu}>
          &nbsp;
          <img
            src="https://ui-avatars.com/api/?name=parv+Goel&rounded=true&&background=d1632c"
            alt=""
            style={{ height: "35px" }}
          />
          <span className="userid">Parv Goel</span>
        </span>
      </div>
      {isProfileMenu && (
        <div className="profile-menu ">
          <span className="fs-6 ">Parv Goel</span>
          <br />
          <span className="text-muted">hello@stockflow.com</span>
          <hr />
          <span>
            <i className="fa-solid fa-user" /> &nbsp;My profile
          </span>
          <hr />
          <span>
            <i className="fa-solid fa-circle-notch" /> &nbsp;Console
          </span>
          <br />
          <span>
            <i className="fa-solid fa-coins" /> &nbsp;Coin
          </span>
          <br />
          <span>
            <i
              className="fa-solid fa-square fa-rotate-by"
              style={{ "--fa-rotate-angle": "45deg" }}
            />{" "}
            &nbsp;Tour Kite
          </span>
          <hr />
          <span>
            <i className="fa-solid fa-user-plus " />
            &nbsp;Invite Friends
          </span>
          <br />
          <span>
            <i className="fa-solid fa-pen-to-square" /> &nbsp;Help
          </span>
          <br />
          <span>
            <i className="fa-solid fa-user" /> &nbsp;Support
          </span>
          <br />
          <span>
            <i className="fa-solid fa-right-from-bracket" /> &nbsp;Logout
          </span>
          <br />
        </div>
      )}
    </div>
  );
}

export default LeftTopBar;
