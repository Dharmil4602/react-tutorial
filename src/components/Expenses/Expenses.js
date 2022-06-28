import React, { useState } from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenseDetails.filter(expense => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  let expenseContent = <p>No Expense Found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map(expense => {
      return <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount} />
    });
  }


  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler} />

      <ExpensesChart chartExpenses={filteredExpenses} />
      {expenseContent}

    </Card>
  )
}

export default Expenses