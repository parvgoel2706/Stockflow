function Equity() {
  return (
    <div className="container p-5">
      <table className="charges-category border">
        <thead>
          <tr className="border">
            <th></th>
            <th> Equity delivery</th>
            <th> Equity intraday</th>
            <th> F&O - Futures</th>
            <th> F&O - Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brokerage</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower </td>
            <td>0.03% or Rs. 20/executed order whichever is lower </td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td>0.1% on buy & sell </td>
            <td>0.025% on the sell side </td>
            <td>0.02% on the sell side</td>
            <td>
              <ul className="p-1">
                <li>
                  0.125% of the intrinsic value on options that are bought and
                  exercised
                </li>
                <li>0.1% on sell side (on premium)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Transaction charges</td>
            <td>
              NSE: 0.00297% <br />
              BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00297% <br /> BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00173% <br /> BSE: 0
            </td>
            <td>
              NSE: 0.03503% (on premium) <br />
              BSE: 0.0325% (on premium)
            </td>
          </tr>
          <tr>
            <td>GST </td>
            <td>18% on (brokerage + SEBI charges + transaction charges) </td>
            <td>18% on (brokerage + SEBI charges + transaction charges) </td>
            <td>18% on (brokerage + SEBI charges + transaction charges) </td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td>SEBI charges </td>
            <td>₹10 / crore </td>
            <td>₹10 / crore </td>
            <td>₹10 / crore </td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <td>Stamp charges</td>
            <td>0.015% or ₹1500 / crore on buy side </td>
            <td>0.003% or ₹300 / crore on buy side </td>
            <td>0.002% or ₹200 / crore on buy side </td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Equity;
