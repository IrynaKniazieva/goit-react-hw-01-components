import styles from './TransactionHistory.module.css'
import propTypes from 'prop-types'

export const TransactionHistory = ({ transactions }) => {
    return <table className={styles.transactionHistory}>
    <thead className={styles.tableHead}>
      <tr className={styles.tableRow}>
        <th className={styles.tableHeader}>TYPE</th>
        <th className={styles.tableHeader}>AMOUNT</th>
        <th className={styles.tableHeader}>CURRENCY</th>
      </tr>
    </thead>
  
    <tbody>
        {transactions.map(({id, type,amount, currency}) => (
            <tr className={styles.tableRow} key={id}>
            <td className={styles.tableData}>{type}</td>
            <td className={styles.tableData}>{amount}</td>
            <td className={styles.tableData}>{currency}</td>
          </tr>
        ))}
      
    </tbody>
  </table>
}

TransactionHistory.propTypes = {
    transactions: propTypes.arrayOf(
        propTypes.exact({
          id: propTypes.string.isRequired,
          type: propTypes.string.isRequired,
          amount: propTypes.string.isRequired,
          currency: propTypes.string.isRequired,
        })
      ).isRequired
}