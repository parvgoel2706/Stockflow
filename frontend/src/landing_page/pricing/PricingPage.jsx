import Brokerage from "./Brokerage";
import Charges from "./Charges";
import Hero from "./Hero";
import NewAccFees from "./newAccFees";
import OpenAccount from "../OpenAccount"

function PricingPrice() {
  return (
    <div className="container p-5">
      <Hero />
      <Charges />
      <Brokerage />
      <NewAccFees />
      <OpenAccount/>
    </div>
  );
}

export default PricingPrice;
