import React, { useState } from 'react'
import './NewExpenseForm.css'

function NewExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        // Below three lines are added. By executing the below lines, as soon as the submit button is hit, the fields are cleared.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    /*
    // There is an alternate way to do this, instead of using more than one useState hook.

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    }
*/
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" step="1" onChange={amountChangeHandler} value={enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm