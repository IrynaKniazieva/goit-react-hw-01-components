import styles from './TransactionHistory.module.css'
import propTypes from 'prop-types'

export const TransactionHistory = ({column1, column2, column3, transactions}) => {
    return <table className={styles.transactionHistory}>
    <thead className={styles.tableHead}>
      <tr className={styles.tableRow}>
        <th className={styles.tableHeader}>{column1}</th>
        <th className={styles.tableHeader}>{column2}</th>
        <th className={styles.tableHeader}>{column3}</th>
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
    column1: propTypes.string.isRequired,
    column2: propTypes.string.isRequired,
    column3: propTypes.string.isRequired,
    transactions: propTypes.arrayOf(
        propTypes.exact({
          id: propTypes.string.isRequired,
          type: propTypes.string.isRequired,
          amount: propTypes.string.isRequired,
          currency: propTypes.string.isRequired,
        })
      )
}