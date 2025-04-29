import LeftTopBar from "./LeftTopBar";
import RightTopBar from "./RightTopBar";

function TopBar() {
  return (
    <div className="topbar-part container-fluid">
      <div className="row">
        <div className="col-4 px-0">
          <RightTopBar />
        </div>
        <div className="col-8 px-0">
          <LeftTopBar />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
