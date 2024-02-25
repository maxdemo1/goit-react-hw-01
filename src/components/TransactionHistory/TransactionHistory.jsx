import style from './TransactionHistory.module.css';

const TransactionHistory = ({ transactionData }) => {
  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr className={style.tableHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={style.tableBody}>
          {transactionData.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td
                  className={style.typeColumn}
                >{`${type[0].toUpperCase()}${type.slice(1, type.length)}`}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
