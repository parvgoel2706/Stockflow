import { positions } from "../data/data";

function Positions() {
  return (
    <div className="positions">
      <h3 className="m-3">Positions ({positions.length})</h3>

      <table className="position-table w-100 ">
        <thead className="border">
          <tr className="text-muted small-14">
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>chg.</th>
          </tr>
        </thead>
      </table>
      <div className="table-body-scroll">
        <table className="position-table w-100">
          <tbody className="border">
            {positions.map((position) => {
              let currValue = position.price * position.qty;
              const isProfit = currValue - position.avg * position.qty;
              const profClass = isProfit > 0 ? "gain" : "loss";
              const dayClass = position.isLoss ? "loss" : "gain";
              return (
                <tr className="small-14">
                  <td>
                    <span className="lossPos">{position.product}</span>
                  </td>
                  <td>{position.name}</td>
                  <td>{position.qty}</td>
                  <td>{position.avg}</td>
                  <td>{position.price}</td>
                  <td className={profClass}>{position.net}</td>
                  <td className={`small-12 ${dayClass}`}>{position.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <table className="position-table w-100 ">
        <tfoot className="border">
          <tr className="small-14">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>-49.94</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Positions;
