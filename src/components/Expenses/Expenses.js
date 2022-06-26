import React from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expenseDetails[0].title} date={props.expenseDetails[0].date} amount={props.expenseDetails[0].amount} />

            <ExpenseItem title={props.expenseDetails[1].title} date={props.expenseDetails[1].date} amount={props.expenseDetails[1].amount} />

            <ExpenseItem title={props.expenseDetails[2].title} date={props.expenseDetails[2].date} amount={props.expenseDetails[2].amount} />
        </Card>
    )
}

export default Expenses