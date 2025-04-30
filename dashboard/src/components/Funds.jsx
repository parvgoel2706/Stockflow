function Funds() {
  return (
    <>
      <div className="text-end transfer-funds">
        <span className="small-12 p-2 text-muted">
          Instant,zero-cost fund transfers with UPI
        </span>
        <button className="btn m-2 btn-success">Add Funds</button>
        <button className="btn m-2 btn-primary">Withdraw</button>
      </div>
      <div className="fund-details">
        <h3>
          <i className="fa-regular fa-clock fs-5"></i>
          &nbsp;Equity
        </h3>
        <table className="border col-6">
          <tbody>
            <tr>
              <td>Available margin</td>
              <td className="fs-6 text-primary">4,043.10</td>
            </tr>
            <tr>
              <td>Used margin</td>
              <td className="fs-6">3,757.30</td>
            </tr>
            <tr className="border-bottom">
              <td>Available cash</td>
              <td className="fs-6">4,043.10</td>
            </tr>
            <tr>
              <td>Opening Balance</td>
              <td>4,043.10</td>
            </tr>
            <tr>
              <td>Payin</td>
              <td>4,064.00</td>
            </tr>
            <tr>
              <td>SPAN</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>Delivery margin</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>Exposure</td>
              <td>0.00</td>
            </tr>
            <tr className="border-bottom">
              <td>Option premium</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>Collateral (Liquid funds)</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>Collateral (Equity)</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>Total Collateral</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Funds;
