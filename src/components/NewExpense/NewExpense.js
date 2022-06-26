import React from 'react'
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // create a spread operator to copy the data from the enteredExpenseData object to the expenseData object.
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }
  return (
    <div className='new-expense'>
        <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense