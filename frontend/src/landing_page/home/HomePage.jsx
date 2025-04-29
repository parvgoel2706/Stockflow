import Navbar from "../Navbar";
import HeroComp from "./HeroComp";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function HomePage() {
  return (
    <div className="HomePage" style={{color:"rgb(66,66,66)"}}>
      <HeroComp />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
    
  );
}

export default HomePage;
