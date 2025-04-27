import { Outlet, NavLink, useLocation } from "react-router-dom";

function Charges() {
  const location = useLocation();
  return (
    <div className="container-lg charges-tab">
      <ul className="nav nav-underline mx-5 border-bottom">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive || location.pathname === "/pricing"
                ? "nav-link active"
                : "nav-link"
            }
            to="equity"
          >
            <h4>Equity</h4>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="currency">
            <h4>Currency</h4>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="commodity">
            <h4>Commodity</h4>
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Charges;
