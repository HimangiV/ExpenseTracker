import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import NewExpense from "../NewExpense/NewExpense";
export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const filterExpense = (filteredYear) => {
    setFilterYear(filteredYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
    // (expense) => {
    //   console.log(typeof expense.date, expense.date);
    //   return expense.date.slice(0, 4).toString() === filterYear;
    // }
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onExpenseFilter={filterExpense} selected={filterYear} />
        {/* custom 'selected' prop- to reflect the default value we've used to set the initial state back on the web page as well (default selected option in the expensefilter). Utilizing two-way binding */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
