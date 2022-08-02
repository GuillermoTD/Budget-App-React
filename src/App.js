import { Button, Container, Stack } from "react-bootstrap";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";
import { useState } from "react";
import { useBudget } from "./Contexts/BudgetContext";
import AddExpenseModal from "./components/AddExpenseModal";
import TotalBudgetCard from "./components/TotalBudgetCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, expenses, getBudgetExpenses } = useBudget();

  const openAddExpenseModal = (budgetId) => {
    setShowExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  };
  return (
    <>
      <Container className="my-3 mx-auto">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button
            onClick={() => setShowBudgetModal(!showBudgetModal)}
            variant="primary"
          >
            Add Budget
          </Button>
          <Button
            // onClick={() => setShowExpenseModal(!showExpenseModal)}
            onClick={openAddExpenseModal}
            variant="outline-primary"
          >
            Add Expense
          </Button>
        </Stack>
        <Container>
          {budgets.map((budget) => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amountExpense,
              0
            );
            console.log(amount);

            return (
              <Col lg={4} sm={8} md={4}>
                <BudgetCard
                  key={budget.id}
                  name={budget.budgetName}
                  amount={amount}
                  max={budget.maxSpending}
                  defaultBg
                  onAddBudgetClick={() => openAddExpenseModal()}
                ></BudgetCard>
              </Col>
            );
          })}
        </Container>
        <TotalBudgetCard />
      </Container>

      <AddBudgetModal
        show={showBudgetModal}
        handleClose={() => setShowBudgetModal(!showBudgetModal)}
        setModal={() => setShowBudgetModal(!showBudgetModal)}
      />
      <AddExpenseModal
        show={showExpenseModal}
        handleClose={() => setShowExpenseModal(!showExpenseModal)}
        // onAddExpenseClick={()=>set}
      />
    </>
  );
}
