import './App.css';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    title: "Car Insurance",
    date: new Date(2020, 2, 12),
    amount: 100
  },
  {
    title: "Budget Trip",
    date: new Date(2022, 6, 15),
    amount: 200
  },
  {
    title: "Rent",
    date: new Date(2019, 5, 20),
    amount: 300
  },
  {
    title: "Food",
    date: new Date (2018, 1, 1),
    amount: 400
  },
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    console.log('Data Added In App.js');
    // console.log(expense);

    setExpenses( (prevExpense) => {
      return [expense, ...prevExpense]
    }); // Here we are added the new data i.e. expenses (2nd argument) to the existing data (1st argument)
  }

  return (
    <>
      <div className="App">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenseDetails={expenses} />
      </div>
    </>
  );
}

export default App;
