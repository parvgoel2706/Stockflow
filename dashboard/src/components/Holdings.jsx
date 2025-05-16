import { holdings } from "../data/data";

function Holdings() {
  return (
    <div className="holdings">
      <h3 className="m-3">Holdings ({holdings.length})</h3>

      <table className="order-table w-100 ">
        <thead className="border">
          <tr className="text-muted small-14">
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </thead>
      </table>
      <div className="table-body-scroll">
        <table className="order-table w-100">
          <tbody className="border">
            {holdings.map((stock, idx) => {
              let currValue = stock.price * stock.qty;
              const isProfit = currValue - (stock.avg * stock.qty);
              const profClass = isProfit>0 ? "gain" : "loss";
              const dayClass = stock.isLoss ? "loss" : "gain";
              return (
                <tr key={idx} className=" small-14">
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>{(currValue - stock.avg*stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={`small-12 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row m-3">
        <div className="col">
          <h5>
            29,875.<span className="small-14">55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span className="small-14">95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            1,553.<span className="small-14">40</span>{" "}
            <span className="small-12">(+5.20%)</span>
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </div>
  );
}

export default Holdings;
