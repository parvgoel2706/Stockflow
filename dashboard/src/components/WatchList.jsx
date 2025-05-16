import { useState } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BarChartIcon from '@mui/icons-material/BarChart';
import DeleteIcon from '@mui/icons-material/Delete';
function WatchList() {
  return (
    <div className="watchlist-container">
      <div className="watchlist-search mt-2">
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
        />
        <span className="text-muted ms-3">9/50</span>
        <hr />
      </div>
      <ul className="list ps-0">
        {watchlist.map((stock, idx) => (
          <WatchListItem stock={stock} key={idx} />
        ))}
      </ul>
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistAction, setshowWatchlistAction] = useState(false);
  const handleMouseEnter = () => {
    setshowWatchlistAction(true);
  };
  const handleMouseLeave = () => {
    setshowWatchlistAction(false);
  };
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="border-bottom px-3"
    >
      <div className="item d-flex align-items-baseline justify-content-between">
        <p className={`my-2 ${stock.isDown ? "loss" : "gain"}`}>{stock.name}</p>
        {showWatchlistAction ? (
          <div>
            <span>
                <Tooltip title="Buy (B)" placement="top" ><button className="btn btn-primary small-12">Buy</button></Tooltip>
                <Tooltip title="Sell (S)" placement="top" ><button className="btn btn-success ms-2 small-12">Sell</button></Tooltip>
                <Tooltip title="Analytics" placement="top" ><button className="btn btn-outline-dark ms-2"><BarChartIcon fontSize="small"/></button></Tooltip>
                <Tooltip title="Delete" placement="top" ><button className="btn btn-outline-dark ms-2"><DeleteIcon fontSize="small"/></button></Tooltip>
                <Tooltip title="More" placement="top" ><button className="btn btn-outline-dark ms-2"><MoreHorizIcon fontSize="small"/></button></Tooltip>
            </span>
          </div>
        ) : (
          <div className="small-14">
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDownIcon className="loss" />
            ) : (
              <KeyboardArrowUpIcon className="gain" />
            )}
          </div>
        )}
      </div>
    </li>
  );
};
