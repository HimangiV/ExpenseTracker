// INPUT
import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // enteredExpenseData parameter will hold the object of the data entered by the user that we generated from the submit handler in ExpenseForm.
    const expenseData = {
      ...enteredExpenseData, // Copy in the entered expense data stored in the enteredExpenseData parameter, pull out all the key value pairs and add them to this new object
      id: Math.random().toString(), // adding in a new key, ID
    };
    props.onAddExpense(expenseData);

    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const addExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
