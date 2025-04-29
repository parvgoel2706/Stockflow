import { Link } from "react-router-dom";

function LeftSection({ imageName, heading, content, links }) {
  return (
    <div className="container mt-5 px-5 py-4">
      <div className="row justify-content-between align-items-center mx-5">
        <div className="col-6">
          <img
            src={`media/images/${imageName}`}
            alt={imageName}
            style={{ width: imageName === "varsity.png" ? "90%" : "100%" }}
          />
        </div>
        <div className="col-4">
          <h2>{heading}</h2>
          <p className="mt-4">{content}</p>
          {links && (
            <div className="row justify-content-between pe-5 mb-4">
              {links.map((link, index) => (
                <div className="col">
                  <Link to={`/${link.target}`} key={index}>
                    {link.label} <i class="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <Link to="#">
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="googlePlayStore"
                  style={{ width: "90%" }}
                />
              </Link>
            </div>
            <div className="col">
              <Link to="#">
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="AppleStore"
                  style={{ width: "85%" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
