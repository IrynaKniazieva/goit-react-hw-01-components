import propTypes from 'prop-types'

export const TransactionHistory = ({column1, column2, column3, transactions}) => {
    return <table class="transaction-history">
    <thead>
      <tr>
        <th>{column1}</th>
        <th>{column2}</th>
        <th>{column3}</th>
      </tr>
    </thead>
  
    <tbody>
        {transactions.map(({id, type,amount, currency}) => (
            <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
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