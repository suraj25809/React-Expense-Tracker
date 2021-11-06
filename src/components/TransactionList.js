import React, { useContext } from 'react'
import { GlobalState } from './../context/GlobalState'
const TransactionList = () => {
  const { transactions } = useContext(GlobalState)
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (<li className={transaction.amount > 0 ? 'plus' : 'minus'}>
          {transaction.text} <span>{transaction.amount} $</span><button className="delete-btn">x</button>
        </li>))}
      </ul>
    </>
  )
}

export default TransactionList
