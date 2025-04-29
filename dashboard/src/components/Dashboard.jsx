import Hero from "./Hero";
import WatchList from "./WatchList";

function Dashboard() {
  return (
    <div className="dashboard container-fluid">
      <div className="row h-100">
        <div className="col-4 border">
          <WatchList />
        </div>
        <div className="col-8 border">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
