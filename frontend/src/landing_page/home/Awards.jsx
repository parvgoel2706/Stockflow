function Awards() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" alt="awardImage" />
        </div>
        <div className="col-6 p-5">
          <h1>Largest stock broker in India </h1>
          <p>
            2+ million StockFlow client contibute to over 15% of all register
            retail order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5 mb-2">
            <div className="col-6">
              <ul>
                <li className="p-1">Futures and Options</li>
                <li className="p-1">Commodity derivatives</li>
                <li className="p-1">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="p-1">Stocks & IPOs</li>
                <li className="p-1">Direct mutual funds</li>
                <li className="p-1">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="press logo" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
