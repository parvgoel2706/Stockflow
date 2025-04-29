import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RighttSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div style={{ color: "#424242" }}>
      <Hero />
      <LeftSection
        imageName={"kite.png"}
        heading={"Kite"}
        content={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        links={[
          { label: "Try Demo", target: "tryDemo" },
          { label: "Learn More", target: "learnMore" },
        ]}
      />
      <RightSection
        imageName={"console.png"}
        heading={"Console"}
        content={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        links={[
          { label: "Learn More", target: "learnMore" },
        ]}
      />
      <LeftSection
        imageName={"coin.png"}
        heading={"Coin"}
        content={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        links={[
          { label: "Coin", target: "coin" },
        ]}
      />
      <RightSection
        imageName={"kiteconnect.svg"}
        heading={"Kite Connect API"}
        content={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        links={[
          { label: "Kite Connect", target: "kiteConnect" },
        ]}
      />
      <LeftSection
        imageName={"varsity.png"}
        heading={"Varsity mobile"}
        content={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
      />
      <Universe />
    </div>
  );
}

export default ProductPage;
