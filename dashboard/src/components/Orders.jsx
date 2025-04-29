import { Link } from "react-router-dom";
function Orders() {
  return (
    <div className="orders">
      <div className="no-orders text-center p-5 mt-5 text-muted">
        <i
          className="fa-solid fa-book-open p-5"
          style={{ color: "#85878a" ,fontSize:"5rem"}}
        ></i>
        <p>You haven't placed any orders today</p>
        <Link to={"/"} className="btn btn-primary">
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Orders;
