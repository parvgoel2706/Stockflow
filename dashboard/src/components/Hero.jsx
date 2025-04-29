import { Routes, Route } from "react-router-dom";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import Summary from "./Summary";

function Hero() {
  return (
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
  );
}

export default Hero;
