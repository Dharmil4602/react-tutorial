import React, { useState } from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {/* We are writing below code to render the entered title and all other details dynamically */}
      {props.expenseDetails.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))}

        {/* As we will be adding the data dynamically, we can remove the below code. */}
      {/* <ExpenseItem title={props.expenseDetails[0].title} date={props.expenseDetails[0].date} amount={props.expenseDetails[0].amount} />

      <ExpenseItem title={props.expenseDetails[1].title} date={props.expenseDetails[1].date} amount={props.expenseDetails[1].amount} />

      <ExpenseItem title={props.expenseDetails[2].title} date={props.expenseDetails[2].date} amount={props.expenseDetails[2].amount} /> */}
      
    </Card>
  )
}

export default Expenses