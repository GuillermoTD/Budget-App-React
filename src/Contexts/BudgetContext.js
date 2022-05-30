import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetContext = createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

function BudgetProvider({ children }) {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const getBudgetExpenses = (BudgetID) =>
    expenses.filter((expense) => expense.budgetID === BudgetID);
  const addExpense = () => {};
  const addBudget = () => {};
  const deleteBudget = () => {};
  const deleteExpense = () => {};
  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export default BudgetProvider;
