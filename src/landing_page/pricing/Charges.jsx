import { Outlet, NavLink } from "react-router-dom";

function Charges() {
  return (
    <div className="container-lg charges-tab">
      <ul className="nav nav-underline mx-5 border-bottom">
        <li className="nav-item">
          <NavLink className="nav-link" to="equity">
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
