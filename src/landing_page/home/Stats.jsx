function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-5 p-4">
          <h2 className="mb-5">Trust with confidence</h2>
          <div className="feature mt-5">
            <h4 className="fs-5">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.5+ crore customers trust StockFlow with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="feature mt-4">
            <h4 className="fs-5">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="feature mt-4">
            <h4 className="fs-5">The StockFlow universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="feature mt-4">
            <h4 className="fs-5">Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-7">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            style={{ width: "100%" }}
          />
          <div className="text-center">
            <a href="#explore" className="mx-4">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#kite">
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
