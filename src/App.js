// import './App.css';
import React from 'react';
import Expenses from './components/Expenses/Expenses';

function App() {

  const items = [
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
      date: "2018-01-01",
      amount: 400
    },
  ]

  return (
    <>
      <div className="App">
      <Expenses expenseDetails={items} />
      </div>
    </>
  );
}

export default App;
