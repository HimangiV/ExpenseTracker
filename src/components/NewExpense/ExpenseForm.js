// INPUT FORM
import React, { useEffect, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const today = new Date();
  const currMonth = today.getMonth() + 1;
  const maxDate =
    today.getFullYear() +
    "-" +
    (currMonth < 10 ? `0${currMonth}` : currMonth) +
    "-" +
    today.getDate();
  console.log(maxDate);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // save the input value using useState
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent default reloading

    // Gather different state slices and combine them into one object
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //number conversion
      date: new Date(enteredDate), // built in date constructor which will parse the date string passed and convert it into an object
    };

    props.onSaveExpenseData(expenseData);

    // Two-way binding
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // Two-way binding-> for inputs we don't just listen to changes, but we can also pass a new value back into the input. So that we can reset or change the input programmatically.
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler} // onChange- trigger on every keystroke
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            // max="2023-04-30"
            max={maxDate}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
