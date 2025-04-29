function NewAccFees() {
  return (
    <div className="container-lg p-5 mb-5">
      <h4>Charges for account opening</h4>
      <table className="charges-category w-100 border">
        <thead className="border">
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td>
              <span className="free-tag">FREE</span>
            </td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td>
              <span className="free-tag">FREE</span>
            </td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NewAccFees;
