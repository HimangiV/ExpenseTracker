import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { type } from "@testing-library/user-event/dist/type";

const App = () => {
  // Using state-
  const [expenses, setExpenses] = useState([]);

  // Getting from local storage
  useEffect(() => {
    const currentExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (currentExpenses) {
      currentExpenses.forEach((exp) => {
        exp.date = new Date(exp.date);
      });
      setExpenses(currentExpenses);
    }
  }, []);

  // Child-to-parent communication (to add user input to the existing expenses array)
  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // Storing in local storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
