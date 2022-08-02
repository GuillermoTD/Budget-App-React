import BudgetCard from "../components/BudgetCard";
import { useBudget } from "../Contexts/BudgetContext";
const TotalBudgetCard = () => {
  const { budgets, expenses } = useBudget();

  const amount = expenses.reduce(
    (total, expense) => total + expense.amountExpense,
    0
  );

  const max = budgets.reduce((total, budget) => total + budget.maxSpending, 0);

  console.log(max, parseInt(amount));

  if (amount === 0) return null;

  return (
    <BudgetCard amount={amount} name="Total" hideButtons defaultBg max={max} />
  );
};

export default TotalBudgetCard;
