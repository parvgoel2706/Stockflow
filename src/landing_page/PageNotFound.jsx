import { Link } from "react-router-dom";

function PageNotFound() {
    return ( <div className="container mt-5 text-center">
        <h1 className="mt-5">404: Page Not Found</h1>
        <Link to="/"> <button
          className="btn btn-primary p-2 fs-5 m-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Back to Home
        </button></Link>
    </div> );
}

export default PageNotFound;