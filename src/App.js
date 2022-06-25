// import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenseDetails = [
    {
      title: "Car Insurance",
      date: "2020-01-01",
      amount: 100
    },
    {
      title: "Budget Trip",
      date: "2020-01-01",
      amount: 200
    },
    {
      title: "Rent",
      date: "2020-01-01",
      amount: 300
    },
    {
      title: "Food",
      date: "2020-01-01",
      amount: 400
    },
  ]

  return (
    <>
      <div className="App">
        <ExpenseItem title={expenseDetails[0].title} date={expenseDetails[0].date} amount={expenseDetails[0].amount} />

        <ExpenseItem title={expenseDetails[1].title} date={expenseDetails[1].date} amount={expenseDetails[1].amount} />

        <ExpenseItem title={expenseDetails[2].title} date={expenseDetails[2].date} amount={expenseDetails[2].amount} />

        {/* <ExpenseItem title={expenseDetails.title} date={expenseDetails.date} amount={expenseDetails.amount}/> */}
      </div>
    </>
  );
}

export default App;
