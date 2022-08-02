import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";
const BudgetContext = createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

function BudgetProvider({ children }) {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const getBudgetExpenses = (BudgetID) =>
    expenses.filter((expense) => expense.budgetID === BudgetID);

  const addExpense = ({ descriptionExpense, amountExpense, budgetID }) => {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        { id: uuid(), descriptionExpense, amountExpense, budgetID }
      ];
    });
  };

  const addBudget = ({ budgetName, maxSpending }) => {
    setBudgets((prevBudgets) => {
      //if user put a budget that already exist
      if (prevBudgets.find((budget) => budget.budgetName === budgetName)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuid(), budgetName, maxSpending }];
    });
  };

  const deleteBudget = ({ id }) => {
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
    console.log("budget added");
  };

  const deleteExpense = ({ id }) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  };
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
